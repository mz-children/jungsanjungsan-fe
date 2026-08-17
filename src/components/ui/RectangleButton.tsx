type RectangleButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
  onClick?: () => void;
};

const variants = {
  primary: "bg-brand-primary text-on-primary",
  secondary: "bg-surface-sub text-text-primary",
  danger: "bg-accent-danger text-text-primary",
};

export default function RectangleButton({
  children,
  variant = "primary",
  onClick,
}: RectangleButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex justify-center items-center cursor-pointer w-[354px] h-[52px] rounded-[8px] ${variants[variant]} `}
    >
      <span className="text-heading-md ">{children}</span>
    </button>
  );
}
