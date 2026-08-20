import type { ReactElement } from "react";
import PlusIcon from "../../assets/svg/plus.svg?react";

type AddButtonProps = {
  icon?: ReactElement;
};

export default function CircleButton({ icon = <PlusIcon /> }: AddButtonProps) {
  return (
    <div className="flex justify-center items-center w-[56px] h-[56px] bg-brand-primary rounded-full shadow">
      {icon}
    </div>
  );
}
