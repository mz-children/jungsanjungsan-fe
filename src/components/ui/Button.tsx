type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger" | "dangerSecondary" | "ghost";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  icon?: React.ReactNode;
};

const variants = {
  primary: "bg-brand-primary text-on-primary",
  secondary: "bg-surface-sub border-1 border-border-default text-text-primary",
  danger: "bg-accent-danger text-text-primary",
  dangerSecondary:
    "bg-surface-sub border-1 border-border-default text-accent-danger",
  ghost: "bg-transparent border-1 border-text-muted text-text-muted",
};

export default function Button({
  children,
  variant = "primary",
  onClick,
  icon,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex justify-center items-center gap-2.5 hover:opacity-80 cursor-pointer w-full h-[52px] rounded-[8px] ${variants[variant]} `}
    >
      {icon}
      <span className="text-heading-md ">{children}</span>
    </button>
  );
}
