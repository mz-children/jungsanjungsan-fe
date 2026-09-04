import { useParams } from "react-router";
import GoBackHeader from "../components/ui/GoBackHeader";
import SearchInput from "../components/ui/SearchInput";
import LabelButton from "../components/ui/LabelButton";
import { useEffect, useMemo, useState } from "react";
import { MEMBER_LIST } from "../data/memberListTestData";
import { RECEIPT_LIST } from "../data/receiptListTestData";
import ReceiptItem from "../components/ui/ReceiptItem";

type LabelData = {
  id: string;
  text: string;
  isSelected: boolean;
};

type ReceiptData = {
  id: string;
  merchant: string;
  amount: number;
  paidAt: string;
  payer: {
    id: string;
    name: string;
  };
};

export default function ReceitListPage() {
  const { id } = useParams();

  const [labelList, setLabelList] = useState<LabelData[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [receiptList, setReceitList] = useState<ReceiptData[]>([]);

  // labelList 데이터 조회
  useEffect(() => {
    // TODO:서버에서 데이터를 가져온다

    const newLabelData: LabelData[] = [
      { id: "ALL", text: "전체", isSelected: true },

      ...MEMBER_LIST.map((member) => ({
        id: member.id,
        text: member.name,
        isSelected: false,
      })),
    ];

    setLabelList(newLabelData);
  }, []);

  // 검색 데이터 최초조회
  useEffect(() => {
    // 데이터 서버에서 가져오기

    setReceitList(RECEIPT_LIST);
  }, []);

  const handleClickMemberLabel = (labelData: LabelData) => {
    const newLabelList: LabelData[] = labelList.map((data) => ({
      ...data,
      isSelected: labelData.id === data.id,
    }));

    setLabelList(newLabelList);
  };

  const selectedPayer = labelList.find((data) => data.isSelected);

  // const filteredReciepts = receiptList.filter((receiptData) =>
  //   selectedPayer?.id === "ALL"
  //     ? receiptData
  //     : receiptData.payer.id === selectedPayer?.id,
  // );

  const filteredReciepts = useMemo(() => {
    return receiptList.filter((receiptData) =>
      selectedPayer?.id === "ALL"
        ? receiptData
        : receiptData.payer.id === selectedPayer?.id,
    );
  }, [receiptList, selectedPayer?.id]);

  return (
    <div className="px-[24px] h-dvh overflow-hidden">
      <div>{/* Header Comp */}</div>

      <div className="">
        <GoBackHeader title="결제 내역" />

        <div className="flex flex-col gap-[16px] py-[12px]">
          <SearchInput
            name="search"
            value={searchInput}
            placeholder="결제처, 금액 검색"
            onChange={(e) => setSearchInput(e.target.value)}
          />

          <div className="flex items-center gap-[8px] overflow-x-auto">
            {labelList.map((labelData) => {
              return (
                <LabelButton
                  key={id}
                  {...labelData}
                  onClick={() => handleClickMemberLabel(labelData)}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-col h-[calc(100vh-180px)] gap-[8px] overflow-y-scroll no-scrollbar">
        {filteredReciepts.map((receiptData) => {
          return (
            <ReceiptItem
              key={receiptData.id}
              amount={receiptData.amount}
              merchantName={receiptData.merchant}
              payerName={receiptData.payer.name}
              currency="KRW"
            />
          );
        })}
      </div>
    </div>
  );
}
