import Button from "./Button";
import VectorIcon from "../../assets/svg/Vector.svg?react";
import ImageIcon from "../../assets/svg/image.svg?react";
import XCircle from "../../assets/svg/x-circle.svg?react";

// on
type DrawerProps = {
  isOpen: boolean;
  roomName?: string;
  thumbnailUrl?: string;
  onClose: () => void;
};

export default function Drawer({
  isOpen,
  roomName,
  thumbnailUrl,
  onClose,
}: DrawerProps) {
  const handleEditRoom = () => {
    alert("정산방 수정합니다~");
  };

  const handleViewPayments = () => {
    alert("결제 내역 리스트 페이지 이동");
  };

  const handleCopyInviteLink = async () => {
    alert("copy 링크");
  };

  const handleCompleteSettlement = async () => {
    alert("정산완료하기 성공!");
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 flex justify-between h-screen w-full max-w-[312px] flex-col border-l border-border-default bg-surface-sub transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"} `}
      >
        {/* Drawer top */}
        <div className="pt-14 px-5 flex flex-1 flex-col gap-5">
          {/* 1. Close */}
          <div className="flex justify-end">
            <button className="cursor-pointer" type="button" onClick={onClose}>
              <XCircle />
            </button>
          </div>

          {/* 2. Room thumbnail */}
          <div className="flex h-[132px] flex-col items-center justify-center gap-2 rounded-[12px] border border-border-default">
            {thumbnailUrl ?
              <img
                src={thumbnailUrl}
                alt={`${roomName} 대표 이미지`}
                className="h-full w-full object-cover rounded-[12px] border border-border-default"
              />
            : <div className="flex flex-col justify-center items-center gap-2">
                <ImageIcon className="text-text-dim" />
                <span className="text-body-emphasis text-text-primary">
                  {roomName} 대표이미지
                </span>
              </div>
            }
          </div>

          {/* 3. Copy link */}
          <div>
            <Button
              variant="secondary"
              icon={<VectorIcon />}
              onClick={handleCopyInviteLink}
            >
              초대 링크 복사
            </Button>
          </div>

          {/* 4. Divider */}
          <div className="h-px w-full bg-border-default" />

          {/* 5. Menu */}
          <div className="-mx-5 flex flex-col gap-1">
            <button
              type="button"
              onClick={handleEditRoom}
              className="flex h-[48px] items-center p-5 text-left text-body-emphasis text-text-primary cursor-pointer transition-colors duration-150 hover:bg-white/5"
            >
              정산방 수정
            </button>

            <button
              type="button"
              onClick={handleViewPayments}
              className="flex h-[48px] items-center p-5 text-left text-body-emphasis text-text-primary cursor-pointer transition-colors duration-150 hover:bg-white/5"
            >
              결제 내역 리스트
            </button>
          </div>
        </div>

        {/* Drawer bottom */}
        <div className="p-5">
          <Button onClick={handleCompleteSettlement}>정산 완료하기</Button>
        </div>
      </aside>
    </>
  );
}
