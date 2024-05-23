import React, { useState } from "react";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const handleDateClick = (day) => {
    setSelectedDate(day);
    //  lógica para abrir un modal o formulario para agregar una cita para el día seleccionado
  };

  const renderCalendarDays = () => {
    const firstDayOfMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1
    );
    const startingDayOfWeek = firstDayOfMonth.getDay();
    const daysInMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0
    ).getDate();

    const daysArray = [];

    for (let i = 0; i < startingDayOfWeek; i++) {
      daysArray.push(<div key={`empty-${i}`} className="p-2" />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      daysArray.push(
        <div
          key={day}
          onClick={() => handleDateClick(day)}
          className={`p-2 cursor-pointer ${
            selectedDate === day ? "bg-blue-500 text-white" : ""
          }`}
        >
          {day}
        </div>
      );
    }

    return daysArray;
  };

  const handlePrevMonth = () => {
    setCurrentMonth((prevMonth) =>
      new Date(prevMonth.getFullYear(), prevMonth.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) =>
      new Date(prevMonth.getFullYear(), prevMonth.getMonth() + 1)
    );
  };

  return (
    <div className="ml-40 max-w-md mb-10 bg-white">
      <div className="flex justify-between mb-4">
        <button
          onClick={handlePrevMonth}
          className="bg-secondary p-2 rounded-full"
        >
          {"<"}
        </button>
        <h2 className="text-lg font-bold">
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </h2>
        <button
          onClick={handleNextMonth}
          className="bg-secondary p-2 rounded-full"
        >
          {">"}
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((day) => (
          <div key={day} className="bg-secondary p-2 text-center">
            {day}
          </div>
        ))}
      </div>
      <div className="mt-2 grid grid-cols-7 gap-1">{renderCalendarDays()}</div>
    </div>
  );
};

export default Calendar;
