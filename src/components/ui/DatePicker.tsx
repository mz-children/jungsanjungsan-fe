import { useState, useRef, useEffect } from "react";
import CalendarIcon from "../../assets/svg/calendar.svg?react";

type DatePickerProps = {
  name?: string;
  value: Date;
  onChange?: (date: Date) => void;
  className?: string;
};

const formatDate = (date: Date): string => {
  const yyyy = date.getFullYear();
  const MM = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const HH = String(date.getHours()).padStart(2, "0");
  const mm = String(date.getMinutes()).padStart(2, "0");
  return `${yyyy}.${MM}.${dd} ${HH}:${mm}`;
};

function WheelColumn({
  label,
  items,
  value,
  onChange,
  isInfinite = true,
  format = (v) => String(v).padStart(2, "0"),
}: {
  label: string;
  items: number[];
  value: number;
  onChange: (val: number) => void;
  isInfinite?: boolean;
  format?: (val: number) => string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const itemHeight = 40;

  const displayItems = isInfinite ? [...items, ...items, ...items] : items;
  const count = items.length;

  useEffect(() => {
    if (!ref.current || count === 0) return;
    const targetIndex = items.indexOf(value);
    if (targetIndex === -1) return;

    const actualIndex = isInfinite ? targetIndex + count : targetIndex;
    ref.current.scrollTop = actualIndex * itemHeight;
  }, [value, count, isInfinite]);

  const handleScroll = () => {
    if (!ref.current || count === 0) return;
    const rawIndex = Math.round(ref.current.scrollTop / itemHeight);

    const normalizedIndex = isInfinite
      ? ((rawIndex % count) + count) % count
      : rawIndex;

    if (
      items[normalizedIndex] !== undefined &&
      items[normalizedIndex] !== value
    ) {
      onChange(items[normalizedIndex]);
    }
  };

  return (
    <div className="flex-1 h-full relative flex flex-col items-center">
      <div className="w-full text-center py-1 text-[10px] font-semibold bg-surface-sub z-30 text-text-dim absolute top-0">
        {label}
      </div>
      <div
        ref={ref}
        onScroll={handleScroll}
        className="absolute inset-0 overflow-y-auto snap-y snap-mandatory scrollbar-none flex flex-col items-center"
      >
        <div className="shrink-0 h-[60px] w-full" />

        {displayItems.map((item, idx) => (
          <button
            key={`${item}-${idx}`}
            type="button"
            onClick={() => onChange(item)}
            className={`snap-center shrink-0 h-[40px] w-full flex items-center justify-center text-sm font-semibold transition-all cursor-pointer ${
              value === item
                ? "text-brand-primary text-base font-bold scale-110"
                : "text-text-muted/40"
            }`}
          >
            {format(item)}
          </button>
        ))}

        <div className="shrink-0 h-[60px] w-full" />
      </div>
    </div>
  );
}

export default function DatePicker({
  value,
  onChange,
  className = "",
}: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const baseYear = new Date().getFullYear();

  const currentDate = value || new Date();
  const [tempYear, setTempYear] = useState(currentDate.getFullYear());
  const [tempMonth, setTempMonth] = useState(currentDate.getMonth() + 1);
  const [tempDay, setTempDay] = useState(currentDate.getDate());
  const [tempHour, setTempHour] = useState(currentDate.getHours());
  const [tempMinute, setTempMinute] = useState(currentDate.getMinutes());

  const daysInMonth = new Date(tempYear, tempMonth, 0).getDate();

  useEffect(() => {
    if (isOpen) {
      const active = value || new Date();
      setTempYear(active.getFullYear());
      setTempMonth(active.getMonth() + 1);
      setTempDay(active.getDate());
      setTempHour(active.getHours());
      setTempMinute(active.getMinutes());
    }
  }, [isOpen, value]);

  useEffect(() => {
    if (tempDay > daysInMonth) setTempDay(daysInMonth);
  }, [daysInMonth, tempDay]);

  const setNow = () => {
    const now = new Date();
    setTempYear(now.getFullYear());
    setTempMonth(now.getMonth() + 1);
    setTempDay(now.getDate());
    setTempHour(now.getHours());
    setTempMinute(now.getMinutes());
  };

  const handleConfirm = () => {
    onChange?.(
      new Date(tempYear, tempMonth - 1, tempDay, tempHour, tempMinute),
    );
    setIsOpen(false);
  };

  return (
    <div className={`w-full ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="w-full h-[52px] px-4 bg-surface-sub border border-border-default rounded-2xl flex items-center justify-between text-text-primary hover:border-text-muted transition-all active:scale-[0.99] cursor-pointer"
      >
        <span className="text-text-primary text-body-regular font-inter">
          {value ? formatDate(value) : "일시를 선택하세요"}
        </span>
        <CalendarIcon className="w-5 h-5 text-text-muted cursor-pointer hover:scale-110 transition-transform" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-xs transition-opacity">
          <div className="absolute inset-0" onClick={() => setIsOpen(false)} />

          <div className="relative z-10 w-full max-w-md bg-surface-sub rounded-t-3xl p-6 shadow-2xl flex flex-col items-center">
            <div
              className="w-12 h-1.5 bg-border-default rounded-full mb-4 cursor-pointer"
              onClick={() => setIsOpen(false)}
            />

            <div className="w-full flex items-center justify-between mb-2 px-1">
              <span className="text-body-regular font-inter text-text-primary">
                일시 선택
              </span>
              <button
                type="button"
                onClick={setNow}
                className="text-body-regular font-inter text-brand-primary bg-brand-primary/10 px-2.5 py-1 rounded-md hover:opacity-80 transition-opacity cursor-pointer"
              >
                현재 시간
              </button>
            </div>

            <div className="relative w-full flex items-center justify-center my-4 h-[160px] overflow-hidden">
              <div className="absolute top-1/2 -translate-y-1/2 w-full h-10 bg-brand-primary/10 border-y border-brand-primary/30 pointer-events-none rounded-xl z-20" />

              <div className="flex items-center justify-center gap-1 w-full z-10 h-full">
                <WheelColumn
                  label="년"
                  items={Array.from({ length: 77 }, (_, i) => baseYear - 3 + i)}
                  value={tempYear}
                  onChange={setTempYear}
                  format={(v) => String(v)}
                />
                <WheelColumn
                  label="월"
                  items={Array.from({ length: 12 }, (_, i) => i + 1)}
                  value={tempMonth}
                  onChange={setTempMonth}
                />
                <WheelColumn
                  label="일"
                  items={Array.from({ length: daysInMonth }, (_, i) => i + 1)}
                  value={tempDay}
                  onChange={setTempDay}
                />
                <div className="w-[1px] h-8 bg-border-default/40 my-auto mx-0.5 z-20" />
                <WheelColumn
                  label="시"
                  items={Array.from({ length: 24 }, (_, i) => i)}
                  value={tempHour}
                  onChange={setTempHour}
                />
                <WheelColumn
                  label="분"
                  items={Array.from({ length: 60 }, (_, i) => i)}
                  value={tempMinute}
                  onChange={setTempMinute}
                />
              </div>
            </div>

            <button
              type="button"
              onClick={handleConfirm}
              className="w-full h-12 mt-2  bg-brand-primary text-text-on-primary rounded-xl font-bold text-base hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer shadow-md"
            >
              선택 완료
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
