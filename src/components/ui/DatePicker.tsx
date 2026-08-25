import { useState, useRef, useEffect } from "react";
import CalendarIcon from "../../assets/svg/calendar.svg?react";

type DatePickerProps = {
  value: Date | undefined;
  onChange?: (date: Date | undefined) => void;
  className?: string;
  name?: string;
};

const formatDate = (date: Date): string => {
  const yyyy = date.getFullYear();
  const MM = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const HH = String(date.getHours()).padStart(2, "0");
  const mm = String(date.getMinutes()).padStart(2, "0");
  return `${yyyy}.${MM}.${dd} ${HH}:${mm}`;
};

export default function DatePicker({
  value,
  onChange,
  className = "",
}: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const currentDate = value || new Date();
  const [tempYear, setTempYear] = useState(currentDate.getFullYear());
  const [tempMonth, setTempMonth] = useState(currentDate.getMonth() + 1);
  const [tempDay, setTempDay] = useState(currentDate.getDate());
  const [tempHour, setTempHour] = useState(currentDate.getHours());
  const [tempMinute, setTempMinute] = useState(currentDate.getMinutes());

  const daysInMonth = new Date(tempYear, tempMonth, 0).getDate();

  const yearRef = useRef<HTMLDivElement>(null);
  const monthRef = useRef<HTMLDivElement>(null);
  const dayRef = useRef<HTMLDivElement>(null);
  const hourRef = useRef<HTMLDivElement>(null);
  const minuteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      const activeDate = value || new Date();
      setTempYear(activeDate.getFullYear());
      setTempMonth(activeDate.getMonth() + 1);
      setTempDay(activeDate.getDate());
      setTempHour(activeDate.getHours());
      setTempMinute(activeDate.getMinutes());

      setTimeout(() => {
        scrollToItem(
          yearRef,
          activeDate.getFullYear() - (new Date().getFullYear() - 2),
        );
        scrollToItem(monthRef, activeDate.getMonth());
        scrollToItem(dayRef, activeDate.getDate() - 1);
        scrollToItem(hourRef, activeDate.getHours());
        scrollToItem(minuteRef, activeDate.getMinutes());
      }, 50);
    }
  }, [isOpen]);

  useEffect(() => {
    if (tempDay > daysInMonth) {
      setTempDay(daysInMonth);
    }
  }, [daysInMonth, tempDay]);

  const scrollToItem = (
    ref: React.RefObject<HTMLDivElement | null>,
    index: number,
  ) => {
    if (ref.current && ref.current.children[index]) {
      const item = ref.current.children[index] as HTMLElement;
      item.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  };

  const updateDate = (
    y: number,
    m: number,
    d: number,
    h: number,
    min: number,
  ) => {
    const updated = new Date(y, m - 1, d, h, min);
    if (onChange) onChange(updated);
  };

  const handleSelectConfirm = () => {
    updateDate(tempYear, tempMonth, tempDay, tempHour, tempMinute);
    setIsOpen(false);
  };

  const baseYear = new Date().getFullYear();
  const years = Array.from({ length: 8 }, (_, i) => baseYear - 2 + i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const minutes = Array.from({ length: 60 }, (_, i) => i);

  return (
    <div className={`w-full ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="w-full h-[52px] px-4 bg-surface-sub border border-border-default rounded-2xl flex items-center justify-between text-text-primary hover:border-text-muted transition-all active:scale-[0.99] cursor-pointer"
      >
        <span className="text-text-primary font-medium text-base">
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
              <span className="text-lg font-bold text-text-primary">
                일시 선택
              </span>
              <button
                type="button"
                onClick={() => {
                  const now = new Date();
                  setTempYear(now.getFullYear());
                  setTempMonth(now.getMonth() + 1);
                  setTempDay(now.getDate());
                  setTempHour(now.getHours());
                  setTempMinute(now.getMinutes());
                }}
                className="text-xs font-semibold text-brand-primary bg-brand-primary/10 px-2.5 py-1 rounded-md hover:opacity-80 transition-opacity cursor-pointer"
              >
                현재 시간
              </button>
            </div>

            <div className="relative w-full flex items-center justify-center my-4 h-[180px] overflow-hidden">
              <div className="absolute w-full h-11 bg-brand-primary/10 border-y border-brand-primary/30 pointer-events-none rounded-xl" />

              {/* flex-1 대신 justify-center와 gap을 이용해 간격을 좁히고 정렬 */}
              <div className="flex items-center justify-center gap-1.5 sm:gap-3 w-full z-10">
                {/* 년 (4자리 숫자라 약간 넉넉하게 w-14) */}
                <div className="w-14 shrink-0 flex flex-col items-center">
                  <span className="text-[10px] font-semibold text-text-dim mb-1">
                    년
                  </span>
                  <div
                    ref={yearRef}
                    className="h-[144px] w-full overflow-y-auto snap-y snap-mandatory scrollbar-none py-[52px] flex flex-col items-center"
                  >
                    {years.map((y) => (
                      <button
                        key={y}
                        type="button"
                        onClick={() => {
                          setTempYear(y);
                          updateDate(
                            y,
                            tempMonth,
                            tempDay,
                            tempHour,
                            tempMinute,
                          );
                        }}
                        className={`snap-center shrink-0 h-10 w-full flex items-center justify-center text-sm font-semibold transition-all cursor-pointer ${
                          tempYear === y
                            ? "text-brand-primary text-base font-bold scale-110"
                            : "text-text-muted/40"
                        }`}
                      >
                        {y}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 월 (2자리 숫자 w-11) */}
                <div className="w-11 shrink-0 flex flex-col items-center">
                  <span className="text-[10px] font-semibold text-text-dim mb-1">
                    월
                  </span>
                  <div
                    ref={monthRef}
                    className="h-[144px] w-full overflow-y-auto snap-y snap-mandatory scrollbar-none py-[52px] flex flex-col items-center"
                  >
                    {months.map((m) => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => {
                          setTempMonth(m);
                          updateDate(
                            tempYear,
                            m,
                            tempDay,
                            tempHour,
                            tempMinute,
                          );
                        }}
                        className={`snap-center shrink-0 h-10 w-full flex items-center justify-center text-sm font-semibold transition-all cursor-pointer ${
                          tempMonth === m
                            ? "text-brand-primary text-base font-bold scale-110"
                            : "text-text-muted/40"
                        }`}
                      >
                        {m.toString().padStart(2, "0")}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 일 (2자리 숫자 w-11) */}
                <div className="w-11 shrink-0 flex flex-col items-center">
                  <span className="text-[10px] font-semibold text-text-dim mb-1">
                    일
                  </span>
                  <div
                    ref={dayRef}
                    className="h-[144px] w-full overflow-y-auto snap-y snap-mandatory scrollbar-none py-[52px] flex flex-col items-center"
                  >
                    {days.map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => {
                          setTempDay(d);
                          updateDate(
                            tempYear,
                            tempMonth,
                            d,
                            tempHour,
                            tempMinute,
                          );
                        }}
                        className={`snap-center shrink-0 h-10 w-full flex items-center justify-center text-sm font-semibold transition-all cursor-pointer ${
                          tempDay === d
                            ? "text-brand-primary text-base font-bold scale-110"
                            : "text-text-muted/40"
                        }`}
                      >
                        {d.toString().padStart(2, "0")}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 날짜와 시간 구분선 */}
                <div className="w-[1px] h-8 bg-border-default/40 my-auto mx-0.5" />

                {/* 시 (2자리 숫자 w-11) */}
                <div className="w-11 shrink-0 flex flex-col items-center">
                  <span className="text-[10px] font-semibold text-text-dim mb-1">
                    시
                  </span>
                  <div
                    ref={hourRef}
                    className="h-[144px] w-full overflow-y-auto snap-y snap-mandatory scrollbar-none py-[52px] flex flex-col items-center"
                  >
                    {hours.map((h) => (
                      <button
                        key={h}
                        type="button"
                        onClick={() => {
                          setTempHour(h);
                          updateDate(
                            tempYear,
                            tempMonth,
                            tempDay,
                            h,
                            tempMinute,
                          );
                        }}
                        className={`snap-center shrink-0 h-10 w-full flex items-center justify-center text-sm font-semibold transition-all cursor-pointer ${
                          tempHour === h
                            ? "text-brand-primary text-base font-bold scale-110"
                            : "text-text-muted/40"
                        }`}
                      >
                        {h.toString().padStart(2, "0")}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 분 (2자리 숫자 w-11) */}
                <div className="w-11 shrink-0 flex flex-col items-center">
                  <span className="text-[10px] font-semibold text-text-dim mb-1">
                    분
                  </span>
                  <div
                    ref={minuteRef}
                    className="h-[144px] w-full overflow-y-auto snap-y snap-mandatory scrollbar-none py-[52px] flex flex-col items-center"
                  >
                    {minutes.map((min) => (
                      <button
                        key={min}
                        type="button"
                        onClick={() => {
                          setTempMinute(min);
                          updateDate(
                            tempYear,
                            tempMonth,
                            tempDay,
                            tempHour,
                            min,
                          );
                        }}
                        className={`snap-center shrink-0 h-10 w-full flex items-center justify-center text-sm font-semibold transition-all cursor-pointer ${
                          tempMinute === min
                            ? "text-brand-primary text-base font-bold scale-110"
                            : "text-text-muted/40"
                        }`}
                      >
                        {min.toString().padStart(2, "0")}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleSelectConfirm}
              className="w-full h-12 mt-2 bg-brand-primary text-text-on-primary rounded-xl font-bold text-base hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer shadow-md"
            >
              선택 완료
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
