import ReceiptItem from "../components/ui/ReceiptItem";
import { useState } from "react";
import type { ReceiptItemData } from "../types/receiptItem.types";
import { testData } from "../data/receiptItem.testData";

function TestES() {
  // 미리 만들어둔 영수증 10개짜리 배열을 그대로 상태값으로 넣음
  const [items] = useState<ReceiptItemData[]>(testData);

  return (
    <div className="flex flex-col gap-[12px] min-h-screen bg-surface-canvas p-[16px]">
      {/* 배열 안의 영수증(결제처, 금액, 결제한 사람) 10개를 하나씩 순서대로 꺼내서, 각각 <ReceiptItem> 카드로 반복 생성 */}
      {items.map((item) => (
        // onClick : 클릭해도 아무 동작 안 하는 빈 함수 (아직 실제 기능 연결 전)
        <ReceiptItem key={item.id} {...item} onClick={() => {}} />
      ))}
    </div>
  );
}

export default TestES;
