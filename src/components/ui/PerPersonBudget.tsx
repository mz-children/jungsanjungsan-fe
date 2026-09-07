type PerPersonBudgetProps = {
  totalBudget: number;
  memberCount: number;
};

export default function PerPersonBudget({
  totalBudget,
  memberCount,
}: PerPersonBudgetProps) {
  const perPersonBudget =
    memberCount > 0 ? Math.floor(totalBudget / memberCount) : 0;

  return (
    <div
      className="
        flex h-[54px] w-full items-center justify-between
        rounded-[8px]
        border border-brand-primary
        bg-surface-sub px-4
      "
    >
      <span className="text-body-default text-text-muted whitespace-nowrap">
        1인당 예산 ({memberCount}인 기준)
      </span>

      <span className="text-heading-lg text-brand-primary whitespace-nowrap">
        ₩ {perPersonBudget.toLocaleString()}
      </span>
    </div>
  );
}
