// import reactLogo from "../assets/react.svg";
// import viteLogo from "../assets/vite.svg";
// import heroImg from "../assets/hero.png";
// import useLayoutStore from "../store/layoutStore";
// import PersonalLeagueCard from "../components/PersonalLeagueCard";

// import CircleButton from "../components/ui/AddButton";

import { useState } from "react";
import TextArea from "../components/ui/TextArea";
import CircleButton from "../components/ui/AddButton";
import GoBackHeader from "../components/ui/GoBackHeader";

function TestPage() {
  const [text, setText] = useState("");
  // const { data, toggleSNB } = useLayoutStore();
  // const [count, setCount] = useState(0);
  // const handleClickBtn = () => {
  //   toggleSNB();
  // };

  return (
    <>
      <div className="flex justify-center items-center flex-col h-screen bg-[lightgrey] p-[24px] ">
        <GoBackHeader title="정산방 상세" />
        <TextArea
          name="test"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="테스트 입력창"
        />
        <CircleButton />
        {/* <div className="font-normal font-[13px] border-danger border-1">test</div> */}
      </div>
    </>
  );
}

export default TestPage;
