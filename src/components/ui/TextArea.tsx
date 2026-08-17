type TextAreaProps = {
  name: string;
  value: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
};
export default function TextArea({
  name,
  value,
  placeholder = "",
  onChange,
  className = "",
}: TextAreaProps) {
  return (
    <textarea
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={`w-full min-w-[354px] h-[80px] p-[16px] bg-surface-sub border border-border-default rounded-[8px] text-text-primary text-body-regular leading-[1.15] no-scrollbar placeholder:text-text-dim resize-none ${className}`}
    />
  );
}
