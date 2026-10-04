import { dietPlanKicker, dietPlanLine } from "@/lib/programs";

type DietPlanBadgeProps = {
  onPhoto?: boolean;
};

export function DietPlanBadge({ onPhoto }: DietPlanBadgeProps) {
  return (
    <p className={onPhoto ? "diet-stamp" : "diet-badge"}>
      <em>{dietPlanKicker}</em>
      <span>{dietPlanLine}</span>
    </p>
  );
}
