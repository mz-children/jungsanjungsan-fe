import Button from "../components/ui/Button";
import VectorIcon from "../assets/svg/Vector.svg?react";
import SearchInput from "../components/ui/SearchInput";
import ImageUploader from "../components/ui/ImageUploader";
import { useState } from "react";
import Drawer from "../components/ui/Drawer";
import sampleImage from "../assets/jeju.jpg";

import Hamburger from "../assets/svg/hamburger.svg?react";

function TestPage() {
  const [searchText, setSearchText] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState("");

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

  const handleEditRoom = () => {
    alert("정산방 수정");
  };

  const handleViewPayments = () => {
    alert("결제 내역");
  };

  const handleCopyInviteLink = () => {
    alert("초대 링크 복사");
  };

  const handleCompleteSettlement = () => {
    alert("정산 완료");
  };

  const drawerMenuItems = [
    {
      label: "정산방 수정",
      onClick: handleEditRoom,
    },
    {
      label: "결제 내역 리스트",
      onClick: handleViewPayments,
    },
    {
      label: "응 아니야 ~ ",
      onClick: handleViewPayments,
    },
  ];

  return (
    <div className="flex justify-center items-center flex-col gap-4 h-screen bg-surface-canvas">
      <div className="w-full max-w-[354px] flex flex-col gap-4">
        {/* <Button variant="primary" onClick={handleCheck}>
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
        </Button> */}
        <SearchInput
          name="search"
          placeholder="결제처, 금액 검색"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            // console.log(e.target.value);
          }}
          onSearch={handleSearch}
        />
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => setIsDrawerOpen(true)}
        >
          <Hamburger />
        </button>
        <Drawer
          isOpen={isDrawerOpen}
          roomName="제주도 여행"
          thumbnailUrl={sampleImage}
          onClose={() => setIsDrawerOpen(false)}
          onCopyInviteLink={handleCopyInviteLink}
          onCompleteSettlement={handleCompleteSettlement}
          menuItems={drawerMenuItems}
        />
      </div>
    </div>
  );
}

export default TestPage;
