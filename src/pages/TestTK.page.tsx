import CircleButton from "../components/ui/AddButton";
import Button from "../components/ui/Button";
import VectorIcon from "../assets/svg/Vector.svg?react";
import SearchInput from "../components/ui/SearchInput";
import ImageUploader from "../components/ui/ImageUploader";
import { useState } from "react";
import { useStore } from "zustand";

function TestPage() {
  const [searchText, setSearchText] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleCheck = () => {
    console.log("test!");
    alert("this is test");
  };

  const handleSearch = () => {
    console.log("Search start~!");
    console.log(searchText);
    alert(`검색 : ${searchText}`);
    setSearchText("");
  };

  return (
    <div className="flex justify-center items-center flex-col gap-4 h-screen bg-surface-canvas">
      <div className="w-full max-w-[354px] flex flex-col gap-4">
        <ImageUploader
          value={imageUrl}
          name="thumnail"
          // placeholder="영수증이나 결제 캡처 사진을 올려주세요"
          accept="image/jpg, image/png"
          onChange={setImageUrl}
        />
        <Button>
          <span>등록하기</span>
        </Button>
      </div>
    </div>
  );
}

export default TestPage;
