import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalendarComponent = () => {
  // const [date, setDate] = useState(new Date());
  const [value, onChange] = useState<Value>(new Date());

  // const onChange = (value) => {
  //   setDate(value);
  // };

  return (
    <div className="bg-white rounded-lg shadow-md ">
      <div className="p-4 px-2 py-4 md:p-4">
        <Calendar onChange={onChange} value={value} className="h-60 text-xs bg-green-950" />
      </div>
    </div>
  );
};

export default CalendarComponent;

// tileClassName={({ date, view }) => {
//   if (view === "month") {
//     if (date.getDate() === 15) {
//       return "react-calendar__tile--custom w-10";
//     }
//   }
//   // return "react-calendar__tile--default";
// }}
