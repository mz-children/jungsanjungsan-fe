import { useNavigate } from "react-router";
import ChevronLeft from "../../assets/svg/chevron-left.svg?react";

type GoBackHeaderProps = {
  title: string;
  onClickBack?: () => void;
};

export default function GoBackHeader({
  title,
  onClickBack,
}: GoBackHeaderProps) {
  const navigate = useNavigate();

  const handleClickBack = () => {
    onClickBack?.();
    navigate(-1);
  };

  return (
    <div className="flex items-center justify-start w-full h-[58px] text-text-primary ">
      <div
        className="flex justify-center items-center w-[32px] h-[32px] cursor-pointer"
        onClick={handleClickBack}
      >
        <ChevronLeft />
      </div>
      <div>{title}</div>
    </div>
  );
}
