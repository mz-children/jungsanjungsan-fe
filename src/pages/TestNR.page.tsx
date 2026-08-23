import { useState } from "react";

interface BudgetProgressBarProps {
  budget: number;
  used: number;
}

function getBarColor(percent: number): string {
  if (percent < 25) return "bg-green-400";
  if (percent < 50) return "bg-green-600";
  if (percent < 75) return "bg-yellow-400";
  if (percent < 100) return "bg-orange-500";
  return "bg-red-500";
}

function BudgetProgressBar({ budget, used }: BudgetProgressBarProps) {
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
          <span className="text-red-500 font-bold">예산 초과 {Math.round(overPercent)}%</span>
        ) : (
          <span>남은 예산 {Math.round(100 - usedPercent)}%</span>
        )}
      </div>
    </div>
  );
}

function TestNR() {
  const [used, setUsed] = useState(150);
  const testValues = [150, 450, 620, 880, 1180];

  return (
    <div className="bg-black min-h-screen p-8">
      <BudgetProgressBar budget={1000} used={used} />

      <div className="flex gap-2 mt-6">
        {testValues.map((value) => (
          <button
            key={value}
            onClick={() => setUsed(value)}
            className="px-3 py-1 bg-gray-700 text-white rounded"
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TestNR;