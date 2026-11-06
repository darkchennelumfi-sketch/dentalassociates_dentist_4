import {
  Baby,
  HeartHandshake,
  ShieldCheck,
  Smile,
  Sparkles,
  Stethoscope,
  Users,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export type IconName =
  | "tooth"
  | "sparkle"
  | "smile"
  | "child"
  | "family"
  | "shield"
  | "heart";

const iconMap: Record<IconName, LucideIcon> = {
  tooth: Stethoscope,
  sparkle: Sparkles,
  smile: Smile,
  child: Baby,
  family: Users,
  shield: ShieldCheck,
  heart: HeartHandshake,
};

type ServiceIconProps = {
  name: IconName;
  className?: string;
};

export function ServiceIcon({ name, className }: ServiceIconProps) {
  const Icon = iconMap[name];
  return <Icon aria-hidden="true" className={cn("size-5", className)} />;
}
