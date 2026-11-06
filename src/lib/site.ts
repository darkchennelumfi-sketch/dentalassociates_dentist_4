export const site = {
  name: "Dental Associates Inc.",
  shortName: "Dental Associates",
  tagline: "Your Caring Dental Office",
  description:
    "To schedule an appointment with an amazing family dentist in Mandan, North Dakota, contact Dental Associates Inc. at 701-663-7545.",
  phoneDisplay: "701-663-7545",
  phoneHref: "tel:7016637545",
  email: "mandandentalassociates@gmail.com",
  emailHref: "mailto:mandandentalassociates@gmail.com",
  address: {
    street: "204 3rd Ave NW",
    city: "Mandan",
    state: "ND",
    zip: "58554",
    full: "204 3rd Ave NW, Mandan, ND 58554",
  },
  facebook: "https://www.facebook.com/DentalAssociatesMandan/",
  googleReviews:
    "https://www.google.com/search?q=Dental+Associates+P+C+mandan%2C+nd&rlz=1C1GCEA_enPH981PH981",
  maps: "https://www.google.com/maps/search/?api=1&query=204+3rd+Ave+NW,+Mandan,+ND+58554",
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Dental Services", href: "/dental-services" },
  { label: "Contact Us", href: "/contact-us" },
] as const;

export const footerNavigation = [
  ...navigation,
  { label: "Payment Options", href: "/payment-options" },
] as const;

export type Service = {
  slug: string;
  title: string;
  description: string;
  detail: string;
  icon: "tooth" | "sparkle" | "smile" | "child" | "family" | "shield";
};

export const services: Service[] = [
  {
    slug: "general-dentistry",
    title: "General Dentistry",
    description:
      "From routine dental checkups to tooth extractions, we care for every general dentistry need.",
    detail:
      "Our practice is built around complete general dentistry, with attentive care for the everyday needs of your smile.",
    icon: "tooth",
  },
  {
    slug: "routine-checkups",
    title: "Routine Checkups",
    description:
      "Keep your smile healthy with routine dental checkups and the trusted care of our dental team.",
    detail:
      "Routine visits are the foundation of a healthy smile. Our dentists and staff make every checkup feel personal.",
    icon: "shield",
  },
  {
    slug: "tooth-extractions",
    title: "Tooth Extractions",
    description:
      "Tooth extractions are part of the general dentistry care we provide, delivered with attention and comfort.",
    detail:
      "When a tooth extraction is needed, you can count on the same caring approach that guides every visit.",
    icon: "tooth",
  },
  {
    slug: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    description:
      "We offer pediatric dentistry and treat patients of any age.",
    detail:
      "Young smiles are welcome here. Our team offers pediatric dentistry in a calm, caring environment.",
    icon: "child",
  },
  {
    slug: "family-dentistry",
    title: "Family Dentistry",
    description:
      "If you need someone to take care of your entire family's oral health, you have found the right place.",
    detail:
      "From children to grandparents, we care for the whole family under one roof.",
    icon: "family",
  },
  {
    slug: "smile-care",
    title: "Smile Care",
    description:
      "Dental care to restore the health and beauty of your smile.",
    detail:
      "Let us help you care for the health and beauty of your smile with dental care you can feel good about.",
    icon: "smile",
  },
];

export const values = [
  {
    title: "Trusted dentists",
    description:
      "General dentistry provided by some of the most trusted dentists in Mandan.",
    icon: "shield" as const,
  },
  {
    title: "A truly caring staff",
    description:
      "A caring team that wants you to have the best dental patient experience you have ever had.",
    icon: "heart" as const,
  },
  {
    title: "Every age welcome",
    description:
      "We offer pediatric dentistry and treat patients of any age.",
    icon: "family" as const,
  },
  {
    title: "Complete general dentistry",
    description:
      "From routine dental checkups to tooth extractions, we care for every general dentistry need.",
    icon: "tooth" as const,
  },
];

export const paymentMethods = [
  { label: "Visa", kind: "card" as const },
  { label: "MasterCard", kind: "card" as const },
  { label: "Discover", kind: "card" as const },
  { label: "American Express", kind: "card" as const },
  { label: "Cash", kind: "cash" as const },
  { label: "Debit", kind: "debit" as const },
];

export const faqs = [
  {
    question: "How do I schedule an appointment?",
    answer:
      "Call Dental Associates Inc. at 701-663-7545. Our dentists and staff cannot wait to give you the best dental patient experience you have ever had.",
  },
  {
    question: "Where is the office located?",
    answer:
      "You will find us at 204 3rd Ave NW, Mandan, ND 58554. There is a map link on our contact page to help you find your way.",
  },
  {
    question: "Do you treat children?",
    answer:
      "Yes. We offer pediatric dentistry and treat patients of any age, so the whole family is welcome.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Visa, MasterCard, Discover, American Express, cash, and debit. CareCredit is also accepted.",
  },
  {
    question: "What dental services are available?",
    answer:
      "We provide general dentistry, from routine dental checkups to tooth extractions, along with pediatric dentistry and family dental care.",
  },
  {
    question: "How else can I get in touch?",
    answer:
      "Call 701-663-7545 or email mandandentalassociates@gmail.com. You can also send us a message using the form on our contact page.",
  },
];

export const trustPoints = [
  "General dentistry",
  "Pediatric dentistry",
  "Family care",
  "All ages welcome",
  "Trusted dentists",
  "Caring staff",
] as const;

export const serviceMarquee = [
  "General Dentistry",
  "Routine Checkups",
  "Tooth Extractions",
  "Pediatric Dentistry",
  "Family Dentistry",
  "Smile Care",
] as const;
