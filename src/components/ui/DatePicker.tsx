import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { Calender as CalenderIcon } from "lucide-react";
import "react-day-picker/dist/style.css";

type DatePickerProps = {
  value: Date | undefined;
  onChange: (date: Date | undefined) => void;
};

export default function DatePicker({ value, onChange }: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  if (onChange) onChange(selectedDate);
  setIsOpen(false);};


  return (
    <div className="relative inline-block w-full max-w-[354px] px-4 bg-surface-sub ">
      <DayPicker mode="single" selected={value} onSelect={onChange} />
    </div>
  );
}
