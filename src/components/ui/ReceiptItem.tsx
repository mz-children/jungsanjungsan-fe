import ReceiptIcon from "../../assets/svg/receipt-icon.svg?react";
// import type { Currency } from "../../types/receiptItem.types";
import type { MouseEventHandler } from "react";

export type Currency = "KRW" | "JPY" | "USD";

export type ReceiptItemData = {
  id: string; // testData 배열에서 React가 리스트를 렌더링할 때 각 항목을 구분할 고유 값(key)이 필요
  merchantName: string;
  amount: number;
  currency: Currency;
  payerName: string;
};

const CURRENCY_MAP: Record<Currency, { symbol: string; locale: string }> = {
  KRW: { symbol: "₩", locale: "ko-KR" },
  JPY: { symbol: "¥", locale: "ja-JP" },
  USD: { symbol: "$", locale: "en-US" },
};

export type ReceiptItemProps = {
  merchantName: string; //결제처
  amount: number; //가격
  payerName: string; //돈을 낸 사람
  currency: Currency; // 원-엔-달러

  // "마우스 이벤트(클릭 등)가 발생했을 때, 그 이벤트 정보를 받아서 처리하는 함수"의 타입
  onClick?: MouseEventHandler<HTMLDivElement>;
};

export default function ReceiptItem({
  merchantName,
  amount,
  payerName,
  currency,
  onClick,
}: ReceiptItemProps) {
  if (!merchantName.trim() || !payerName.trim() || !amount) {
    return null;
  }

  return (
    <div
      className={`flex items-center justify-between px-[16px] py-[12px] bg-surface-card border border-border-default rounded-[8px] ${onClick ? "cursor-pointer" : ""}`}
      onClick={onClick}
    >
      <div className="flex items-center gap-[12px] flex-1 min-w-0">
        <ReceiptIcon className="w-[40px] h-[40px]" />
        <div className="flex flex-col min-w-0">
          <span className="text-body-emphasis text-text-primary truncate">
            {/* 결제처 */}
            {merchantName.trim()}
          </span>
          <span className="text-body-strong text-text-primary">
            {/* 가격 + 원/엔/달러 */}
            {CURRENCY_MAP[currency].symbol}
            {amount.toLocaleString(CURRENCY_MAP[currency].locale)}
          </span>
        </div>
      </div>
      <span className="px-[12px] py-[6px] text-caption-regular text-text-muted bg-surface-sub border border-border-default rounded-[8px] whitespace-nowrap flex-shrink-0">
        {/* 돈을 낸 사람 */}
        {payerName.trim()}
      </span>
    </div>
  );
}
