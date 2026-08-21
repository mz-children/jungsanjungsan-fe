type DiscriptionCardProps = {
  icon: React.ReactNode;
  title: string;
  description?: string;
  onClick?: () => void;
};

export default function DiscriptionCard({
  icon,
  title,
  description,
  onClick,
}: DiscriptionCardProps) {
  return (
    <div
      className="flex items-center gap-[16px] w-full min-w-[354px] p-[16px] bg-surface-sub rounded-[12px] text-text-primary text-body-regular"
      onClick={onClick}
    >
      <div className="flex justify-center items-center min-w-[40px] min-h-[40px] bg-surface-canvas border border-border-default rounded-[8px]">
        <div>{icon}</div>
      </div>
      <div>
        <div className="text-text-primary text-body-emphasis">{title}</div>
        <div className="text-text-muted text-label-regular">{description}</div>
      </div>
    </div>
  );
}
