interface BudgetProgressBarProps {
  budget: number;
  used: number;
}

function getBarColor(percent: number): string {
  if (percent < 25) return "bg-budget-stage-1";
  if (percent < 50) return "bg-budget-stage-2";
  if (percent < 75) return "bg-budget-stage-3";
  if (percent < 100) return "bg-budget-stage-4";
  return "bg-budget-stage-5";
}

export default function BudgetProgressBar({ budget, used }: BudgetProgressBarProps) {
  const usedPercent = budget > 0 ? (used / budget) * 100 : 0;
  const barWidth = Math.min(usedPercent, 100);
  const isOver = usedPercent > 100;
  const overPercent = isOver ? usedPercent - 100 : 0;

  return (
    <div className="mb-6">
      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ease-out ${getBarColor(usedPercent)}`}
          style={{ width: `${barWidth}%` }}
        />
      </div>

      <div className="flex justify-between mt-2 text-sm text-gray-300">
        <span>예산의 {Math.round(usedPercent)}% 사용{isOver ? "" : " 중"}</span>
        {isOver ? (
          <span className="text-budget-stage-5 font-bold">예산 초과 {Math.round(overPercent)}%</span>
        ) : (
          <span>남은 예산 {Math.round(100 - usedPercent)}%</span>
        )}
      </div>
    </div>
  );
}

