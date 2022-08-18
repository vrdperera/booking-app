import BedIcon from '@mui/icons-material/Bed';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import { format } from 'date-fns';

import { DateRange } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import SearchItemOpt from './search-item-opt';
import { useNavigate } from 'react-router-dom';

export default function HeaderSearch() {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({ Adults: 1, Children: 0, Room: 1 });
  const [destination, setDestination] = useState('');

  const handleOption = (name, operation) => {
    setOptions((prev) => ({
      ...prev,
      [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
    }));
  };

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/hotels', { state: { destination, date, options } });
  };

  return (
    <div className="HeaderSearch h-[60px] w-full container  max-w-7xl mx-auto bg-white flex items-center justify-around border-4 rounded-md border-yellow-500 absolute -bottom-[30px] z-20">
      <div className="HeaderSearchItem flex justify-center items-center gap-2">
        <BedIcon className="text-gray-500" />
        <input
          type="text"
          placeholder="Where are you going?"
          className="border-gray-400 text-black border-transparent focus:border-transparent focus:ring-0"
          onChange={({ target: { value } }) => setDestination(value)}
        />
      </div>

      <div className="HeaderSearchItem flex justify-center items-center gap-2 cursor-pointer">
        <CalendarMonthIcon className="text-gray-500" />
        <span
          onClick={() => setOpenDate((prev) => !prev)}
          className="text-gray-500"
        >{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
          date[0].endDate,
          'MM/dd/yyyy'
        )} `}</span>
        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            minDate={new Date()}
            className="DateRange absolute top-[50px]"
          />
        )}
        ;
      </div>

      <div className="HeaderSearchItem flex justify-center items-center gap-2 cursor-pointer">
        <PersonIcon className="text-gray-500" />
        <span
          className="text-gray-500"
          onClick={() => setOpenOptions((prev) => !prev)}
        >
          {`${options.Adults} adults · ${options.Children} children · ${options.Room} room`}
        </span>

        {openOptions && (
          <div className="Options text-gray-500 p-3 absolute top-[58px] bg-white rounded-sm shadow-lg">
            <SearchItemOpt
              name={'Adults'}
              eventHndl={handleOption}
              countState={options}
            />
            <SearchItemOpt
              name={'Children'}
              eventHndl={handleOption}
              countState={options}
            />
            <SearchItemOpt
              name={'Room'}
              eventHndl={handleOption}
              countState={options}
            />
          </div>
        )}
      </div>

      <div className="HeaderSearchItem cursor-pointer">
        <button
          onClick={handleSearch}
          className="login  bg-[#0071c2] w-36  text-white  p-3  rounded-sm font-medium text-xs leading-tight uppercase  hover:shadow-md"
        >
          Search
        </button>
      </div>
    </div>
  );
}
