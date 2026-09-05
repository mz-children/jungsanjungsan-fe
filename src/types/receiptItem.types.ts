export type Currency = "KRW" | "JPY" | "USD";

export type ReceiptItemData = {
  id: string; // testData 배열에서 React가 리스트를 렌더링할 때 각 항목을 구분할 고유 값(key)이 필요
  merchantName: string;
  amount: number;
  currency: Currency;
  payerName: string;
};
