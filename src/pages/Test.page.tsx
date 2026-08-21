// import reactLogo from "../assets/react.svg";
// import viteLogo from "../assets/vite.svg";
// import heroImg from "../assets/hero.png";
// import useLayoutStore from "../store/layoutStore";
// import PersonalLeagueCard from "../components/PersonalLeagueCard";

// import CircleButton from "../components/ui/AddButton";

import { useState } from "react";
import TextArea from "../components/ui/TextArea";
import CircleButton from "../components/ui/AddButton";
import DiscriptionCard from "../components/ui/DiscriptionCard";
import CalculatorIcon from "../assets/svg/calculator.svg?react";

function TestPage() {
  const [text, setText] = useState("");
  // const { data, toggleSNB } = useLayoutStore();
  // const [count, setCount] = useState(0);
  // const handleClickBtn = () => {
  //   toggleSNB();
  // };

  return (
    <>
      <div className="flex flex-col gap-[10px] p-[24px] justify-center items-center h-screen bg-[lightgrey]">
        <DiscriptionCard
          icon={<CalculatorIcon />}
          title="간편한 영수증 정산"
          description="카메라로 찍거나 이미지를 올려 복잡한 영수증 내역을 즉시 분할할 수 있습니다."
        />
        <TextArea
          name="test"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="테스트 입력창"
        />
        <CircleButton />
      </div>
    </>
  );
}

export default TestPage;
