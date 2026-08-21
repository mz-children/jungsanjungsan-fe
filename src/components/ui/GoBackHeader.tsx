import ChevronLeft from "../../assets/svg/chevron-left.svg?react";

type GoBackHeaderProps = {
  title: string;
};

export default function GoBackHeader({ title }: GoBackHeaderProps) {
  return (
    <div className="flex gap-[8px] items-center justify-start w-full h-[58px] text-text-primary ">
      <div>
        <ChevronLeft />
      </div>
      <div>{title}</div>
    </div>
  );
}
