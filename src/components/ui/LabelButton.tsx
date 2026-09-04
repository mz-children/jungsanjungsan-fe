type LabelButtonProps = {
  text: string;
  isSelected?: boolean;
  onClick?: () => void;
};

export default function LabelButton({
  text,
  isSelected,
  onClick,
}: LabelButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
              inline-flex items-center justify-center h-[28px] rounded-[8px] border transition-colors px-[14px] text-label-md whitespace-nowrap break-keep no-scrollbar
              ${
                isSelected
                  ? "border-brand-primary bg-brand-primary text-text-on-primary text-label-strong"
                  : "border-border-default bg-surface-sub text-text-muted"
              }
            `}
    >
      {text}
    </button>
  );
}
