type TextInputProps = {
  value: string;
  name?: string;
  placeholder?: string;
  className?: string;
  onChange: (value: string) => void;
};

export default function TextInput({
  value,
  name,
  placeholder = "",
  className = "",
  onChange,
}: TextInputProps) {
  return (
    <input
      type="text"
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={(event) => onChange(event.target.value)}
      className={`
        h-[48px] w-full rounded-[8px]
        border border-border-default
        bg-surface-sub px-4
        text-body-regular text-text-primary
        outline-none
        placeholder:text-text-dim
        focus:border-text-dim
        ${className}
      `}
    />
  );
}
