// import { useState } from "react";
// import reactLogo from "../assets/react.svg";
// import viteLogo from "../assets/vite.svg";
// import heroImg from "../assets/hero.png";
// import useLayoutStore from "../store/layoutStore";
// import PersonalLeagueCard from "../components/PersonalLeagueCard";

import CircleButton from "../components/ui/AddButton";
import RectangleButton from "../components/ui/RectangleButton";

function TestPage() {
  const handleCheck = () => {
    console.log("test!");
    alert("this is test");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[lightgrey]">
      <RectangleButton variant="primary" onClick={handleCheck}>
        버튼라벨
      </RectangleButton>
    </div>
  );
}

export default TestPage;
