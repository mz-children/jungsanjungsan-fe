// import { useState } from "react";
// import reactLogo from "../assets/react.svg";
// import viteLogo from "../assets/vite.svg";
// import heroImg from "../assets/hero.png";
// import useLayoutStore from "../store/layoutStore";
// import PersonalLeagueCard from "../components/PersonalLeagueCard";

// import CircleButton from "../components/ui/AddButton";
import TextArea from "../components/ui/TextArea";

function TestPage() {
  // const { data, toggleSNB } = useLayoutStore();
  // const [count, setCount] = useState(0);

  // const handleClickBtn = () => {
  //   toggleSNB();
  // };

  return (
    <div className="flex justify-center items-center h-screen bg-[lightgrey]">
      {/* <CircleButton /> */}

      <TextArea />
      {/* <div className="font-normal font-[13px] border-danger border-1">test</div> */}
    </div>
  );
}

export default TestPage;
