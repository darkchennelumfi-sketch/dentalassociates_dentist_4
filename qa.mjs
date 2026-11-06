import { chromium } from "playwright";

const base = "http://localhost:3210";
const routes = ["/", "/about-us", "/dental-services", "/contact-us", "/payment-options"];

const browser = await chromium.launch();
const report = { routes: [], errors: [], mobile: {}, form: {}, faq: {} };
const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });

for (const route of routes) {
  const page = await context.newPage();
  const consoleErrors = [];
  const pageErrors = [];
  const failedRequests = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") consoleErrors.push(msg.text());
  });
  page.on("pageerror", (err) => pageErrors.push(err.message));
  page.on("requestfailed", (req) =>
    failedRequests.push(`${req.url()} :: ${req.failure()?.errorText ?? "unknown"}`),
  );

  const response = await page.goto(`${base}${route}`, { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(1200);

  const data = await page.evaluate(() => {
    const imgs = Array.from(document.images);
    return {
      title: document.title,
      h1: Array.from(document.querySelectorAll("h1")).map((el) => el.textContent?.trim()),
      headings: Array.from(document.querySelectorAll("h1,h2,h3")).length,
      textLength: document.body.innerText.length,
      horizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
      images: imgs.map((img) => ({
        src: img.getAttribute("src"),
        loaded: img.complete && img.naturalWidth > 0,
        alt: img.alt,
      })),
      links: Array.from(document.querySelectorAll("a")).map((a) => a.getAttribute("href")),
    };
  });

  report.routes.push({
    route,
    status: response?.status() ?? null,
    ...data,
    consoleErrors,
    pageErrors,
    failedRequests,
  });
  await page.close();
}

// Mobile checks
const mobile = await browser.newContext({
  viewport: { width: 390, height: 844 },
  isMobile: true,
  hasTouch: true,
});
const mpage = await mobile.newPage();
const mobileErrors = [];
mpage.on("pageerror", (err) => mobileErrors.push(err.message));
await mpage.goto(`${base}/`, { waitUntil: "domcontentloaded" });
await mpage.waitForTimeout(1000);
report.mobile = {
  overflow: await mpage.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
  ),
  menuButton: await mpage.getByRole("button", { name: "Open menu" }).count(),
};
await mpage.getByRole("button", { name: "Open menu" }).click();
await mpage.waitForTimeout(500);
report.mobile.dialogVisible = await mpage.locator('[role="dialog"]').isVisible();
report.mobile.menuLinks = await mpage.locator('[role="dialog"]').getByRole("link").count();
await mpage.locator('[role="dialog"]').getByRole("link", { name: /About Us/i }).click();
await mpage.waitForTimeout(900);
report.mobile.navigatedToAbout = mpage.url().includes("/about-us");
report.mobile.errors = mobileErrors;
await mobile.close();

// Contact form flow
const formPage = await context.newPage();
const formErrors = [];
formPage.on("pageerror", (err) => formErrors.push(err.message));
await formPage.goto(`${base}/contact-us`, { waitUntil: "domcontentloaded" });
await formPage.waitForTimeout(800);
await formPage.getByRole("button", { name: "Continue" }).click();
await formPage.waitForTimeout(300);
report.form.validationMessages = await formPage.getByRole("alert").allTextContents();
await formPage.getByLabel("Name").fill("Test Patient");
await formPage.getByLabel("Phone").fill("701-663-7545");
await formPage.getByLabel("Email").fill("test@example.com");
await formPage.getByRole("button", { name: "Continue" }).click();
await formPage.waitForTimeout(500);
report.form.stepTwoVisible = await formPage
  .getByText("How can we help?", { exact: true })
  .isVisible()
  .catch(() => false);
await formPage.getByLabel("Subject").fill("Appointment");
await formPage.getByLabel("Comments").fill("I would like to schedule a visit for my family.");
await formPage.getByRole("button", { name: "Submit" }).click();
await formPage.waitForTimeout(1200);
report.form.successVisible = await formPage
  .getByText("Thank you for reaching out.")
  .isVisible()
  .catch(() => false);
report.form.successText = await formPage
  .getByText(/Thank you for contacting us/i)
  .allTextContents();
report.form.errors = formErrors;
await formPage.close();

// FAQ check
const faqPage = await context.newPage();
await faqPage.goto(`${base}/`, { waitUntil: "domcontentloaded" });
await faqPage.waitForTimeout(1000);
const faqTrigger = faqPage.getByRole("button", {
  name: /How do I schedule an appointment/i,
});
await faqTrigger.scrollIntoViewIfNeeded();
await faqTrigger.click();
await faqPage.waitForTimeout(500);
report.faq.firstAnswerVisible = await faqPage
  .getByText(/Call Dental Associates Inc\. at 701-663-7545/i)
  .first()
  .isVisible()
  .catch(() => false);
await faqPage.close();

console.log(JSON.stringify(report, null, 2));
await browser.close();
