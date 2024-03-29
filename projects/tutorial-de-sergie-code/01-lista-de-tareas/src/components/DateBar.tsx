console.log("DateBar");
const date = new Date();
const day = date.getDate();
const dayName = date.toLocaleString("en-EN", { weekday: "long" });
const monthName = date.toLocaleString("en-EN", { month: "long" });
const year = date.getFullYear();

function DateBar() {
  return (
    <header className="date-bg flex flex-row w-full justify-between p-5 font-[Montserrat] items-center uppercase bg-right-bottom rounded-md m-3 text-white">
      <div className="flex items-center">
        <span className="text-7xl pr-3">{day}</span>
        <div className="flex flex-col">
          <span>{monthName}</span>
          <span className="font-extralight">{year}</span>
        </div>
      </div>
      <span>{dayName}</span>
    </header>
  );
}

export default DateBar;
