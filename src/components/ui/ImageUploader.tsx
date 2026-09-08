import ImageIcon from "../../assets/svg/image.svg?react";
import { useEffect, useId, useState } from "react";

type ImageUploaderProps = {
  value: string | null;
  name: string;
  placeholder?: string;
  // name 예시 : 대표 이표지를 등록해주세요~ , 영수증이나 결제사진을 등록해주세요 등
  className?: string;
  accept?: string;
  onChange: (url: string | null) => void;
};

export default function ImageUploader({
  value,
  name,
  placeholder = "대표 이미지를 등록해 주세요",
  className = "",
  accept = "image/*",
  onChange,
}: ImageUploaderProps) {
  const inputId = useId();
  const [isDragging, setIsDragging] = useState(false);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const url = URL.createObjectURL(file);

    onChange(url);
  };

  const handleDragEnter = () => {
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);

    const file = event.dataTransfer.files?.[0];

    if (!file) return;

    const url = URL.createObjectURL(file);
    onChange(url);
  };

  return (
    <div
      className={`relative w-full ${className}`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <label
        htmlFor={inputId}
        className={`flex items-center justify-center w-full bg-surface-sub border rounded-[12px] overflow-hidden cursor-pointer transition-colors
          ${isDragging ? "border-white bg-white/10" : "border-border-default hover:border-white/50"}
          ${value ? "border-solid" : "border-dashed"}`}
      >
        {value ?
          <img
            src={value}
            alt="이미지 미리보기"
            className="w-full h-[204px] object-cover"
          />
        : <div className="flex h-[100px] w-full flex-col items-center justify-center gap-2 text-text-dim">
            <ImageIcon />
            <span className="text-label-regular">{placeholder}</span>
          </div>
        }
      </label>

      <input
        id={inputId}
        name={name}
        type="file"
        accept={accept}
        onChange={handleImageChange}
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
