//src/components/ui/ReceiptItem.tsx

import ReceiptIcon from "../../assets/svg/receipt-icon.svg?react";
import type { Currency } from "../../types/receiptItem.types";

const CURRENCY_MAP: Record<Currency, { symbol: string; locale: string }> = {
  KRW: { symbol: "₩", locale: "ko-KR" },
  JPY: { symbol: "¥", locale: "ja-JP" },
  USD: { symbol: "$", locale: "en-US" },
};

// 가게명, 가격, 돈 쓴 사람 props
export type ReceiptItemProps = {
  merchantName: string;
  amount: number;
  payerName: string;
  currency: Currency;

  onClick: () => void;
};

export default function ReceiptItem({
  merchantName,
  amount,
  payerName,
  currency,
  onClick,
}: ReceiptItemProps) {
  return (
    <div
      className="flex items-center justify-between px-[16px] py-[12px] bg-surface-card border border-border-default rounded-[8px]"
      onClick={onClick}
    >
      <div className="flex items-center gap-[12px] flex-1 min-w-0">
        <ReceiptIcon className="w-[40px] h-[40px]" />
        <div className="flex flex-col min-w-0">
          <span className="text-body-emphasis text-text-primary truncate">
            {merchantName}
          </span>
          <span className="text-body-strong text-text-primary">
            {CURRENCY_MAP[currency].symbol}
            {amount.toLocaleString(CURRENCY_MAP[currency].locale)}
          </span>
        </div>
      </div>
      <span className="px-[12px] py-[6px] text-caption-regular text-text-muted bg-surface-sub border border-border-default rounded-[8px] whitespace-nowrap flex-shrink-0">
        {payerName.trim() || "이름 없음"}
      </span>
    </div>
  );
}
