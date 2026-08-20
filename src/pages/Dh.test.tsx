import { useState } from "react";
import DatePicker from "../components/ui/DatePicker";

function DhTest() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return <DatePicker value={date} onChange={setDate} />;
}

export default DhTest;
