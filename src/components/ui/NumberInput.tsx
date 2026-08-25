import type { ChangeEventHandler } from "react";
import WonIcon from "../../assets/svg/won.svg?react";

type NumberInputProps = {
  name: string;
  value: number;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  onChange?: (
    name: string,
    value: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void;
};

export default function NumberInput({
  name,
  value,
  placeholder,
  className,
  inputClassName,
  onChange,
}: NumberInputProps) {
  const customOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    const number = Number(value.replaceAll(",", ""));

    if (isNaN(number)) return;

    onChange?.(name, number, e);
  };

  return (
    <div className={`relative ${className}`}>
      <input
        className={`w-full min-w-[354px] h-[48px] pl-[16px] pr-[36px] bg-surface-sub border border-border-default rounded-[8px] text-text-primary text-body-regular ${inputClassName}`}
        name={name}
        value={value.toLocaleString()}
        maxLength={19}
        placeholder={placeholder}
        onChange={customOnChange}
      />
      <div className="absolute top-[50%] translate-y-[-50%] right-[16px] z-10">
        <WonIcon />
      </div>
    </div>
  );
}
