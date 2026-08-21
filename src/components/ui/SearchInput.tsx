import SearchIcon from "../../assets/svg/search.svg?react";

type SearchInputProps = {
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch?: () => void;
};

export default function SearchInput({
  name,
  value,
  placeholder,
  onChange,
  onSearch,
}: SearchInputProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch?.();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2.5 w-full h-[44px] px-4 bg-surface-sub border border-border-default rounded-[8px] focus-within:border-text-muted"
    >
      <button type="submit" className="cursor-pointer">
        <SearchIcon />
      </button>

      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="flex-1 bg-transparent text-body-plain text-text-primary placeholder:text-text-dim outline-none"
      />
    </form>
  );
}
