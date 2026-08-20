import CircleButton from "../components/ui/AddButton";
import Button from "../components/ui/Button";
import VectorIcon from "../assets/svg/Vector.svg?react";
import SearchInput from "../components/ui/SearchInput";
import { useState } from "react";

function TestPage() {
  const [searchText, setSearchText] = useState("");

  const handleCheck = () => {
    console.log("test!");
    alert("this is test");
  };

  return (
    <div className="flex justify-center items-center flex-col gap-4 h-screen bg-[lightgrey]">
      <div className="w-[354px] flex flex-col gap-4">
        <Button variant="primary" onClick={handleCheck}>
          정산방 생성하기
        </Button>
        <Button variant="secondary" onClick={handleCheck}>
          취 소
        </Button>
        <Button variant="danger" onClick={handleCheck}>
          삭 제
        </Button>
        <Button variant="dangerSecondary" onClick={handleCheck}>
          삭제하기
        </Button>
        <Button variant="ghost" onClick={handleCheck} icon={<VectorIcon />}>
          초대링크 복사하기
        </Button>
        <SearchInput
          placeholder="결제처, 금액 검색"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            // console.log(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default TestPage;
