import BedIcon from '@mui/icons-material/Bed';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';

import { DateRange } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

export default function HeaderSearch() {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection',
    },
  ]);

  return (
    <div className="HeaderSearch h-[60px] w-full container bg-white flex items-center justify-around border-4 rounded-md border-yellow-500 absolute -bottom-[30px]">
      <div className="HeaderSearchItem flex justify-center items-center gap-2">
        <BedIcon className="text-gray-500" />
        <input
          type="text"
          placeholder="Where are you going?"
          className="border-gray-400 text-black border-transparent focus:border-transparent focus:ring-0"
        />
      </div>

      <div className="HeaderSearchItem flex justify-center items-center gap-2 cursor-pointer">
        <CalendarMonthIcon className="text-gray-500" />
        <span className="text-gray-500">Date to Date</span>
        <DateRange
          editableDateInputs={true}
          onChange={(item) => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
          className="DateRange absolute top-0"
        />
        ;
      </div>

      <div className="HeaderSearchItem flex justify-center items-center gap-2 cursor-pointer">
        <PersonIcon className="text-gray-500" />
        <span className="text-gray-500">2 adults · 0 children · 1 room</span>
      </div>

      <div className="HeaderSearchItem cursor-pointer">
        <button className="login  bg-[#0071c2] w-36  text-white  p-3  rounded-sm font-medium text-xs leading-tight uppercase  hover:shadow-md">
          Search
        </button>
      </div>
    </div>
  );
}
