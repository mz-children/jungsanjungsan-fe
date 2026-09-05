import Button from "./Button";
import VectorIcon from "../../assets/svg/Vector.svg?react";
import ImageIcon from "../../assets/svg/image.svg?react";
import XCircle from "../../assets/svg/x-circle.svg?react";

type DrawerMenuItem = {
  label: string;
  onClick: () => void;
};

type DrawerProps = {
  isOpen: boolean;
  roomName?: string;
  thumbnailUrl?: string;
  menuItems: DrawerMenuItem[];
  onClose: () => void;
  onCopyInviteLink: () => void;
  onCompleteSettlement: () => void;
};

export default function Drawer({
  isOpen,
  roomName,
  thumbnailUrl,
  menuItems,
  onClose,
  onCopyInviteLink,
  onCompleteSettlement,
}: DrawerProps) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 flex justify-between h-screen w-full max-w-[312px] flex-col border-l border-border-default bg-surface-sub transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer top */}
        <div className="pt-14 px-5 flex flex-1 flex-col gap-5">
          {/* header */}
          <div className="flex justify-between">
            <div className="text-body-emphasis text-text-primary">
              {roomName}
            </div>

            <button className="cursor-pointer" type="button" onClick={onClose}>
              <XCircle />
            </button>
          </div>

          {/* 2. Room name */}

          {/* 3. Room thumbnail */}
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

          {/* 4. Copy link */}
          <div>
            <Button
              variant="secondary"
              icon={<VectorIcon />}
              onClick={onCopyInviteLink}
            >
              초대 링크 복사
            </Button>
          </div>

          {/* 5. Divider */}
          <div className="h-px w-full bg-border-default" />

          {/* 6. Menu */}
          <div className="-mx-5 flex flex-col gap-1">
            {menuItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={item.onClick}
                className="flex h-[48px] items-center p-5 text-left text-body-emphasis text-text-primary cursor-pointer transition-colors duration-150 hover:bg-white/5"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Drawer bottom */}
        <div className="p-5">
          <Button onClick={onCompleteSettlement}>정산 완료하기</Button>
        </div>
      </aside>
    </>
  );
}
