export default function SearchItemOpt({ name, eventHndl, countState }) {
  return (
    <div className="OptionItem w-[235px] flex justify-between items-center m-[10px] font-medium ">
      <span className="Optiontext">{name}</span>
      <div className="OptionCounter flex items-center gap-2">
        <button
          disabled={countState[name] <= 1}
          className="OptionCounterBtn w-[30px] border-[#0071c2] border-2  rounded-sm text-black cursor-pointer"
          onClick={() => eventHndl(name, 'd')}
        >
          -
        </button>
        <span className="Counter">{countState[name]}</span>
        <button
          className="OptionCounterBtn w-[30px] border-[#0071c2] border-2  rounded-sm text-black cursor-pointer"
          onClick={() => eventHndl(name, 'i')}
        >
          +
        </button>
      </div>
    </div>
  );
}
