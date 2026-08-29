import ReceiptItem from "../components/ui/ReceiptItem";
import { useState } from "react";
import type { ReceiptItemData } from "../types/receiptItem.types";
import { testData } from "../data/receiptItem.testData";

function TestES() {
  const [items] = useState<ReceiptItemData[]>(testData);
  // const [receipt, setReceipt] = useState({
  //   merchantName: "제주도올레시장맛집투어전통시장골목상권",
  //   amount: 150000,
  //   payerName: "시원",
  //   currency: "KRW" as const,
  // });

  return (
    <div className="flex flex-col gap-[12px] min-h-screen bg-surface-canvas p-[16px]">
      {/* <ReceiptItem
        merchantName={receipt.merchantName}
        amount={receipt.amount}
        payerName={receipt.payerName}
        currency={receipt.currency}
        onClick={() =>
          setReceipt((prev) => ({ ...prev, amount: prev.amount + 10000 }))
        }
      /> */}
      {items.map((item) => (
        <ReceiptItem key={item.id} {...item} onClick={() => {}} />
      ))}
    </div>
  );
}

export default TestES;
