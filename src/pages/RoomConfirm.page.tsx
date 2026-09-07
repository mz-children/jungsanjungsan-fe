import { useRef } from "react";
import { Navigate, useLocation } from "react-router";
import Button from "../components/ui/Button";
import GoBackHeader from "../components/ui/GoBackHeader";
import PerPersonBudget from "../components/ui/PerPersonBudget";
import RoomHeader from "../components/ui/RoomHeader";
import type { RoomCreatePayload } from "../types/room.types";

export default function RoomConfirm() {
  const { state } = useLocation();
  const submitted = useRef(false);
  const payload = state as RoomCreatePayload | null;

  if (!payload) {
    return <Navigate to="/room/create" replace />;
  }

  const handleCreate = () => {
    //post 2연속 방지. 왜 state안썻냐? 그것이 약속
    if (submitted.current) return;
    submitted.current = true;

    alert(`[테스트] ${payload.title} 정산방 생성 정보를 post로 보내보아요`);
  };

  return (
    <div className="flex min-h-screen flex-col bg-surface-canvas">
      <RoomHeader title="정산정산" onMenuClick={() => {}} />
      <div className="flex text-heading-xl py-2 px-4">
        <GoBackHeader title="정산방 정보 확인" />
      </div>
      <div className="flex flex-1 flex-col px-6 py-2 gap-[20px]">
        <p className="text-body-default text-text-muted">
          아래 정보로 새로운 정산방이 생성됩니다.
        </p>
        <div className="flex flex-col gap-5 rounded-[12px] border border-border-default bg-surface-card p-5">
          <div className="flex items-center justify-between border-b border-border-default pb-5">
            <span className="text-body-regular text-text-muted">
              정산방 이름
            </span>
            <span className="text-heading-md text-text-primary">
              {payload.title}
            </span>
          </div>
          <div className="flex items-center justify-between border-b border-border-default pb-5">
            <span className="text-body-plain text-text-muted">총 예산</span>
            <span className="text-heading-lg text-text-primary">
              ₩{payload.totalBudget.toLocaleString("ko-KR")}
            </span>
          </div>
          <div className="flex flex-col gap-2 border-b border-border-default pb-5">
            <span className="text-body-plain text-text-muted">
              참여 멤버 ({payload.members.length}명)
            </span>
            <div className="flex flex-wrap gap-2">
              {payload.members.map((member, index) => (
                <span
                  key={index}
                  className="rounded-[8px] border border-border-default bg-surface-sub px-3 py-1 text-body-default text-text-primary"
                >
                  {member.name}
                </span>
              ))}
            </div>
          </div>
          <PerPersonBudget
            totalBudget={payload.totalBudget}
            memberCount={payload.members.length}
          />
        </div>
      </div>
      <div className="flex px-6 pb-2">
        <Button onClick={handleCreate}>정산방 생성하기</Button>
      </div>
    </div>
  );
}
