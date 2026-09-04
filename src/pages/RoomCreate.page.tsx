import GoBackHeader from "../components/ui/GoBackHeader";
import ImageUploader from "../components/ui/ImageUploader";
import TextArea from "../components/ui/TextArea";
import NumberInput from "../components/ui/NumberInput";
import TextInput from "../components/ui/TextInput";
import Button from "../components/ui/Button";

import { useState, useEffect } from "react";

export default function RoomCreate() {
  const [roomName, setRoomName] = useState("");
  const [budget, setBudget] = useState(0);
  return (
    <div className="flex min-h-screen flex-col bg-surface-canvas">
      {/* top */}
      <div className="flex justify-between bg-surface-canvas px-6 py-[16px]">
        <span className="text-text-primary text-heading-lg">정산정산</span>
        <div className="text-text-primary text-heading-lg">햄버거</div>
      </div>
      ¡
      <div className="flex text-heading-xl px-4">
        <GoBackHeader title="정산방 만들기" />
      </div>
      {/* form */}
      <div className="flex flex-1 flex-col px-6 py-2 gap-[20px]">
        <div className="flex flex-col gap-2">
          <span className="text-lebel-md text-text-muted">정산방 이름 </span>
          <TextInput value={roomName} name="roomName" onChange={setRoomName} />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-lebel-md text-text-muted">총예산</span>
          <NumberInput
            value={budget}
            name="budget"
            placeholder="총 예산을 입력하세요"
            onChange={(name, value) => {
              setBudget;
            }}
          />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-lebel-md text-text-muted">여행 멤버</span>
        </div>

        <div>
          <span className="text-lebel-md text-text-muted">1인당 예상 금액</span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-lebel-md text-text-muted">
            정산방 대표이미지
          </span>
          <ImageUploader />
        </div>
      </div>
      {/* bottom */}
      <div className="flex px-6 pb-2">
        <Button>dsdf</Button>
      </div>
    </div>
  );
}
