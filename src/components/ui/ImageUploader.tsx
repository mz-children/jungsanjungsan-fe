import ImageIcon from "../../assets/svg/image.svg?react";
import { useEffect, useId, useState } from "react";

type ImageUploaderProps = {
  value: File | null;
  placeholder?: string;
  className?: string;
  accept?: string;
  onChange: (file: File | null) => void;
};

export default function ImageUploader({
  value,
  placeholder = "대표 이미지를 등록해 주세요",
  className = "",
  accept = "image/*",
  onChange,
}: ImageUploaderProps) {
  const inputId = useId();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!value) {
      setPreviewUrl(null);
      return;
    }
    const objectUrl = URL.createObjectURL(value);

    setPreviewUrl(objectUrl);
    console.log("url", objectUrl);

    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    onChange(file);
  };

  return (
    <div className={`relative w-full ${className}`}>
      <label
        htmlFor={inputId}
        className={`flex items-center justify-center w-full bg-surface-sub border border-border-default rounded-[12px] hover:border-white/50 overflow-hidden cursor-pointer ${previewUrl ? "border-solid" : "border-dashed"}`}
      >
        {previewUrl ?
          <img
            src={previewUrl}
            alt="이미지 미리보기"
            className="w-full h-auto object-contain"
          />
        : <div className="flex h-[100px] w-full flex-col items-center justify-center gap-2 text-text-dim">
            <ImageIcon />
            <span className="text-label-regular">{placeholder}</span>
          </div>
        }
      </label>

      <input
        id={inputId}
        type="file"
        accept={accept}
        onChange={handleChange}
        className="hidden"
      />

      {value && (
        <button
          type="button"
          onClick={() => onChange(null)}
          className="absolute top-3 right-3 px-3 py-1.5 bg-surface-sub text-label-md text-text-muted rounded-[8px] cursor-pointer"
        >
          선택 취소
        </button>
      )}
    </div>
  );
}
