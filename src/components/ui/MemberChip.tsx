import XCircleIcon from "../../assets/svg/x-circle.svg?react";

type MemberChipProps = {
  name: string;
  onRemove: () => void;
};

export default function MemberChip({ name, onRemove }: MemberChipProps) {
  return (
    <div className="inline-flex shrink-0 justify-center px-2 min-w-[72px] h-[29px] items-center gap-[6px] rounded-[8px] border border-border-default bg-surface-sub text-body-plain text-text-primary">
      <span>{name}</span>

      <button
        className="cursor-pointer"
        type="button"
        onClick={onRemove}
        aria-label={`${name} 삭제`}
      >
        <XCircleIcon className="h-[10px] w-[10px]" />
      </button>
    </div>
  );
}
