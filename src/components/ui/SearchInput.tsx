import SearchIcon from "../../assets/svg/search.svg?react";

type SearchInputProps = {
  value?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchInput({
  value,
  placeholder,
  onChange,
}: SearchInputProps) {
  return (
    <div className=" flex items-center gap-2.5 w-full h-[44px] bg-surface-sub border-1 border-border-default rounded-[8px]">
      <SearchIcon className="ml-4" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="text-text-dim text-body-plain"
      />
    </div>
  );
}
