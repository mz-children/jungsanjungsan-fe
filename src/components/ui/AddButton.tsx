import type { ReactElement } from "react";
import PlusIcon from "../../assets/svg/plus.svg?react";

type AddButtonProps = {
  icon?: ReactElement;
};

export default function CircleButton({ icon = <PlusIcon /> }: AddButtonProps) {
  return (
    <div className="flex justify-center items-center w-[56px] h-[56px] bg-primary rounded-full shadow-[0_4px_8px_0_rgba(0,0,0,0.251)]">
      {icon}
    </div>
  );
}
