// import reactLogo from "../assets/react.svg";
// import viteLogo from "../assets/vite.svg";
// import heroImg from "../assets/hero.png";
// import useLayoutStore from "../store/layoutStore";
// import PersonalLeagueCard from "../components/PersonalLeagueCard";

// import CircleButton from "../components/ui/AddButton";

import { useState } from "react";
import TextArea from "../components/ui/TextArea";

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
        <TextArea
          name="test"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="테스트 입력창"
        />
      </div>
    </>
  );
}

export default TestPage;
