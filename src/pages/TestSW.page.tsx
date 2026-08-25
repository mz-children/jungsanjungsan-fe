import { useState } from "react";
import NumberInput from "../components/ui/NumberInput";
import GoBackHeader from "../components/ui/GoBackHeader";
import DiscriptionCard from "../components/ui/DiscriptionCard";
import CalculatorIcon from "../assets/svg/calculator.svg?react";

export default function TestSWPage() {
  const [input, setState] = useState({ money: 0 });

  const handleChangeInput = (name: string, value: number, e: any) => {
    console.log(name, value, e);
    setState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center p-[60px] bg-[yellowgreen]">
      <GoBackHeader
        title="정산방 상세"
        onClickBack={() => console.log("test")}
      />
      <DiscriptionCard
        icon={<CalculatorIcon />}
        title="간편한 영수증 정산"
        description="카메라로 찍거나 이미지를 올려 복잡한 영수증 내역을 즉시 분할할 수 있습니다."
        onClick={() => console.log("hello")}
      />
      <NumberInput
        name="money"
        value={input.money}
        onChange={(name, value, e) => handleChangeInput(name, value, e)}
      />
    </div>
  );
}
