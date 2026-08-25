import { useState } from "react";
import NumberInput from "../components/ui/NumberInput";

export default function TestSWPage() {
  const [input, setState] = useState({ money: 0 });

  const handleChangeInput = (name: string, value: number, e: any) => {
    console.log(name, value, e);
    setState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-[60px]">
      <NumberInput
        name="money"
        value={input.money}
        onChange={(name, value, e) => handleChangeInput(name, value, e)}
      />
    </div>
  );
}
