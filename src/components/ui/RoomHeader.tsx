import MenuIcon from "../../assets/svg/hamburger.svg?react";

type RoomHeaderProps = {
  title: string;
  onMenuClick?: () => void;
};

export default function RoomHeader({ title, onMenuClick }: RoomHeaderProps) {
  return (
    <div className="flex h-[56px] w-full items-center justify-between bg-surface-canvas px-8 border-b border-border-default">
      <div className="flex items-center gap-4">
        {/* logo line */}
        <div className="flex flex-col gap-[2px]">
          <div className="h-[18px] w-[5px] bg-brand-primary" />
          <div className="h-[12px] w-[5px] bg-white" />
          <div className="h-[18px] w-[5px] bg-brand-primary" />
        </div>

        {/* room title */}
        <span className="text-heading-lg text-text-primary">{title}</span>
      </div>

      {onMenuClick && (
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="메뉴 열기"
          className="flex cursor-pointer h-8 w-8 items-center justify-center"
        >
          <MenuIcon className="h-4 w-4 text-white" />
        </button>
      )}
    </div>
  );
}
