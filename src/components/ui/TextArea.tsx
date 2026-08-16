type TextAreaProps = {
  placeholder?: string;
};

export default function TextArea({
  placeholder = "내용을 입력하세요",
}: TextAreaProps) {
  return (
    <textarea
      placeholder={placeholder}
      className="
        box-border
        w-[354px]
        h-[80px]
        p-[16px]
        bg-surface-sub
        border
        border-border-default
        rounded-[8px]
        font-inter
        font-normal
        text-text-primary
        text-body-regular
        leading-none
        placeholder:text-text-dim
        resize-none
      "
    />
  );
}