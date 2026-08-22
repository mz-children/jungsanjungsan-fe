//src/components/ui/ReceiptItem.tsx

// 아이콘 연결
import ReceiptIcon from "../../assets/svg/receipt-icon.svg?react";

// 가게명, 가격, 돈 쓴 사람 props
type ReceiptItemProps = {
  merchantName: string;
  amount: number;
  payerName: string;
};

export default function ReceiptItem({
  merchantName,
  amount,
  payerName,
}: ReceiptItemProps) {
  return (
    <div
      className="flex items-center justify-between px-4 py-3
                    bg-surface-card border border-border-default rounded-[8px]
    "
    >
      <div className="flex items-center gap-3">
        <ReceiptIcon className="w-10 h-10" />
        <div className="flex flex-col">
          <span className="text-body-highlight text-text-primary">
            {merchantName}
          </span>
          <span className="text-body-highlight text-text-primary">
            ₩{amount.toLocaleString("ko-KR")}
          </span>
        </div>
      </div>
      <span className="px-3 py-1 text-caption-regular text-text-muted bg-surface-sub border border-border-default rounded-md whitespace-nowrap">
        {payerName}
      </span>
    </div>
  );
}
