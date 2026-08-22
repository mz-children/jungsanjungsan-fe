import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";
import "react-day-picker/dist/style.css";

type DatePickerProps = {
  value: Date | undefined;
  onChange: (date: Date | undefined) => void;
  className?: string;
};

export default function DatePicker({
  value,
  onChange,
  className = "",
}: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<"date" | "time">("date");

  const [selectedHour, setSelectedHour] = useState(false);
  const [selectedMinute, setSelectedMinute] = useState(false);

  const toggleOpen = () => {
    if (!isOpen) {
      setStep("date");
      setSelectedHour(false);
      setSelectedMinute(false);
    }
    setIsOpen(!isOpen);
  };

  const handleTimeChange = (type: "hours" | "minutes", timeValue: string) => {
    const newDate = value ? new Date(value.getTime()) : new Date();

    if (type === "hours") {
      newDate.setHours(parseInt(timeValue, 10));
      setSelectedHour(true);

      if (selectedMinute) setIsOpen(false);
    } else {
      newDate.setMinutes(parseInt(timeValue, 10));
      setSelectedMinute(true);

      if (selectedHour) setIsOpen(false);
    }

    if (onChange) onChange(newDate);
  };

  const handleSelect = (date: Date | undefined) => {
    if (!date) return;

    const updatedDate = new Date(date);
    if (value) {
      updatedDate.setHours(value.getHours());
      updatedDate.setMinutes(value.getMinutes());
    } else {
      const now = new Date();
      updatedDate.setHours(now.getHours());
      updatedDate.setMinutes(now.getMinutes());
    }

    if (onChange) onChange(updatedDate);

    setSelectedHour(false);
    setSelectedMinute(false);
    setStep("time");
  };

  return (
    <div className={`relative inline-block w-full max-w-[354px] ${className}`}>
      <button
        type="button"
        onClick={toggleOpen}
        aria-expanded={isOpen}
        className="w-full h-[48px] px-4 bg-surface-sub border border-border-default rounded-[8px] flex items-center justify-between text-text-primary hover:border-text-muted transition-colors"
      >
        <span className=" text-text-primary text-body-regular">
          {value ? format(value, "yyyy.MM.dd HH:mm") : "날짜를 선택하세요"}
        </span>
        <CalendarIcon className="w-5 h-5 text-text-muted cursor-pointer hover:scale-110 transition-transform" />
      </button>

      {isOpen && (
        <div className="absolute top-[54px] left-0 z-50 p-4 bg-surface-sub border border-border-default rounded-[8px] shadow text-text-primary w-[300px]">
          {step === "date" ? (
            <DayPicker
              mode="single"
              selected={value}
              onSelect={handleSelect}
              locale={ko}
            />
          ) : (
            <div className="flex flex-col items-center gap-3 py-2 w-full">
              <span className="text-caption-regular text-text-muted"></span>

              <div className="flex items-center justify-center gap-3 w-full my-2">
                <div className="flex flex-col items-center">
                  <span className="text-caption-strong text-text-dim mb-1">
                    시
                  </span>
                  <div className="h-32 w-16 overflow-y-auto snap-y snap-mandatory scrollbar-none bg-surface-canvas rounded-lg border border-border-default flex flex-col p-1">
                    {Array.from({ length: 24 }, (_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleTimeChange("hours", i.toString())}
                        className={`snap-center shrink-0 h-8 flex items-center justify-center text-body-plain rounded-md transition-colors ${
                          (value ? value.getHours() : 0) === i
                            ? "bg-brand-primary text-text-on-primary text-body-regular"
                            : "text-text-muted hover:bg-surface-card"
                        }`}
                      >
                        {i.toString().padStart(2, "0")}
                      </button>
                    ))}
                  </div>
                </div>

                <span className="text-heading-md self-center mt-3 text-text-dim">
                  :
                </span>

                <div className="flex flex-col items-center">
                  <span className="text-caption-strong text-text-dim mb-1">
                    분
                  </span>
                  <div className="h-32 w-16 overflow-y-auto snap-y snap-mandatory scrollbar-none bg-surface-canvas rounded-lg border border-border-default flex flex-col p-1">
                    {Array.from({ length: 60 }, (_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() =>
                          handleTimeChange("minutes", i.toString())
                        }
                        className={`snap-center shrink-0 h-8 flex items-center justify-center text-body-plain rounded-md transition-colors ${
                          (value ? value.getMinutes() : 0) === i
                            ? "bg-brand-primary text-text-on-primary text-body-regular"
                            : "text-text-muted hover:bg-surface-card"
                        }`}
                      >
                        {i.toString().padStart(2, "0")}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setStep("date")}
                className="text-caption-regular text-text-muted underline hover:text-text-primary mt-1"
              >
                날짜 다시 선택
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
