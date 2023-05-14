import { useState } from "react";
import DatePicker from "react-widgets-tailwind";


function Calendar() {
  const [date, setDate] = useState(new Date());

  function handleDateChange(newDate) {
    setDate(newDate);
  }

  return (
    <div className="flex flex-col justify-center items-center h-full p-10">
      <DatePicker
        value={date}
        onChange={handleDateChange}
        max={new Date(new Date().getFullYear() + 5, 11, 31)}
        min={new Date(new Date().getFullYear() - 5, 0, 1)}
        dayClassName={(date) => {
          if (date.getDay() === 0 || date.getDay() === 6) {
            return "text-red-500";
          }
        }}
        inputClassName="w-60 h-10 rounded-full bg-blue-200 text-blue-700 text-center font-bold outline-none"
        calendarClassName="rounded-t-lg bg-white border border-gray-300 shadow-lg w-64 sm:w-80"
        dayTodayClassName="bg-blue-200 rounded-full"
        daySelectedClassName="bg-blue-500 text-white rounded-full"
        nextIcon={<svg className="w-6 h-6 " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 17l6-6-6-6"/></svg>}
        prevIcon={<svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 17l-6-6 6-6"/></svg>}
      />
    </div>
  );
}

export default Calendar;
