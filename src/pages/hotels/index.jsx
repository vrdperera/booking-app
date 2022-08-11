import { format } from 'date-fns';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import { useLocation } from 'react-router-dom';
import Header from '../../components/header';
import Navbar from '../../components/navbar';
import SearchItem from '../../components/searchItem';

export default function Hotels() {
  const { state } = useLocation();

  const [destination, setDestination] = useState(state.destination);
  const [date, setDate] = useState(state.date);
  const [openDate, setOpenDate] = useState('');
  const [options, setOptions] = useState(state.options);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hListContainer container mx-auto flex justify-center mt-[20px]">
        <div className="hListWrapper w-full max-w-7xl mx-auto flex gap-[20px]">
          <div className="hListSearch flex-1  bg-[#febb02] p-[10px] rounded-sm sticky top-3 h-max">
            <h1 className="hlTitle text-2xl text-gray-700 mb-[10px]">Search</h1>

            <div className="hlitem ">
              <label htmlFor="text">Destination</label>
              <input
                type="text"
                placeholder={destination}
                className="my-2 rounded-md border-none min-w-[332px]"
              />
            </div>

            <div className="hlitem flex flex-col gap-1 mb-3">
              <label htmlFor="date">Check-in Date </label>
              <span
                onClick={() => setOpenDate((prev) => !prev)}
                className="h-8 flex items-center py-5 pl-3 bg-white cursor-pointer rounded-md"
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
                />
              )}
            </div>

            <div className="hlItem flex flex-col gap-2 text-gray-700">
              <label htmlFor="" className="text-gray-900">
                Options
              </label>
              <div className="flex flex-col gap-4 p-3">
                <div className="flex justify-between items-center">
                  <span className="hlOptionText">
                    Min Price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    className="w-[100px] p-0 rounded-sm border-none h-[30px]"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span className="hlOptionText">
                    Max Price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    className="w-[100px]  p-0 rounded-sm border-none h-[30px]"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span className="hlOptionText">Adults</span>
                  <input
                    min="1"
                    type="number"
                    className="w-[100px]  p-0 rounded-sm border-none h-[30px]"
                    placeholder={options.Adults}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span className="hlOptionText">Children</span>
                  <input
                    min="0"
                    type="number"
                    className="w-[100px]  p-0 rounded-sm border-none h-[30px]"
                    placeholder={options.Children}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span className="hlOptionText">Room</span>
                  <input
                    min="1"
                    type="number"
                    className="w-[100px]  p-0 rounded-sm border-none h-[30px]"
                    placeholder={options.Room}
                  />
                </div>
              </div>
            </div>

            <button className="bg-[#0a1524] hover:bg-[#1a2a42] w-full mt-5 font-bold text-white border-none px-3 py-2 rounded-sm">
              Search
            </button>
          </div>

          <div className="hListResult flex-3">
            <h1 className="hlTitle">
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
