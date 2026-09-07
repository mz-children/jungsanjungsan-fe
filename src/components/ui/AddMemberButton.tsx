type AddMemberButtonProps = {
  onClick: () => void;
};

export default function AddMemberButton({ onClick }: AddMemberButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex shrink-0 cursor-pointer h-[29px] w-[68px] bg-surface-card items-center justify-center rounded-[8px] border border-brand-primary text-body-default text-brand-primary"
    >
      + 추가
    </button>
  );
}
