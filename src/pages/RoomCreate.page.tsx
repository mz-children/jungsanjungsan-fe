import GoBackHeader from "../components/ui/GoBackHeader";
import ImageUploader from "../components/ui/ImageUploader";
import NumberInput from "../components/ui/NumberInput";
import TextInput from "../components/ui/TextInput";
import Button from "../components/ui/Button";
import RoomHeader from "../components/ui/RoomHeader";
import MemberChip from "../components/ui/MemberChip";
import PerPersonBudget from "../components/ui/PerPersonBudget";
import AddMemberButton from "../components/ui/AddMemberButton";
import AddMemberModal from "../components/ui/AddMemberModal";

import { useState } from "react";
import { useNavigate } from "react-router";
import type { RoomCreatePayload } from "../types/room.types";

type MemberData = {
  id: string;
  name: string;
};

export default function RoomCreate() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [totalBudget, setTotalBudget] = useState(0);
  const [members, setMembers] = useState<MemberData[]>([]);
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [isAddMemberOpen, setIsAddMemberOpen] = useState(false);

  const handleConfirm = () => {
    if (!title.trim()) {
      alert("정산방 이름을 입력해주세요.");
      return;
    }

    if (totalBudget <= 0) {
      alert("총예산을 입력해주세요.");
      return;
    }

    if (members.length === 0) {
      alert("여행 멤버를 한 명 이상 추가해주세요.");
      return;
    }

    const payload: RoomCreatePayload = {
      title: title,
      totalBudget,
      thumbnailFileId: null,
      members: members.map(({ name }) => ({ name })),
    };

    navigate("/room/confirm", { state: payload });
  };

  const handleClickAddMemberBtn = () => {
    setIsAddMemberOpen(true);
  };

  const handleAddMember = (name: string) => {
    if (!name.trim()) return;

    setMembers((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name: name.trim(),
      },
    ]);

    // setNewMemberName("");
    setIsAddMemberOpen(false);
  };

  const handleClickMemberChip = (id: string) => {
    setMembers((prev) => prev.filter((member) => member.id !== id));
  };

  return (
    <div className="flex min-h-screen flex-col bg-surface-canvas">
      {/* top */}
      <RoomHeader title="정산정산" />
      <div className="flex text-heading-xl py-2 px-4">
        <GoBackHeader title="정산방 만들기" />
      </div>
      {/* form */}
      <div className="flex flex-1 flex-col px-6 py-2 gap-[20px]">
        <div className="flex flex-col gap-2">
          <span className="text-lebel-md text-text-muted">정산방 이름 </span>
          <TextInput value={title} name="title" onChange={setTitle} />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-lebel-md text-text-muted">총예산</span>
          <NumberInput
            value={totalBudget}
            name="totalBudget"
            placeholder="총 예산을 입력하세요"
            onChange={(_name, value) => {
              setTotalBudget(value);
            }}
          />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-lebel-md text-text-muted">여행 멤버</span>
          <div className="flex gap-[8px] overflow-x-auto no-scrollbar">
            <AddMemberButton onClick={handleClickAddMemberBtn} />
            {isAddMemberOpen && (
              <AddMemberModal
                onAdd={handleAddMember}
                onClose={() => setIsAddMemberOpen(false)}
              />
            )}

            {members.map((member) => {
              return (
                <MemberChip
                  key={member.id}
                  name={member.name}
                  onRemove={() => handleClickMemberChip(member.id)}
                />
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-lebel-md text-text-muted">1인당 예상 금액</span>
          <PerPersonBudget
            totalBudget={totalBudget}
            memberCount={members.length}
          />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-lebel-md text-text-muted">
            정산방 대표 이미지(선택)
          </span>
          <ImageUploader
            value={thumbnailUrl}
            name="thumbnail"
            onChange={(url) => setThumbnailUrl(url ?? "")}
          />
        </div>
      </div>
      {/* bottom */}
      <div className="flex px-6 pb-2">
        <Button onClick={handleConfirm}>정산방 생성 정보 확인하기</Button>
      </div>
    </div>
  );
}
