export default function SearchItem() {
  return (
    <div className="searchItem border border-gray-200 p-3 rounded-md flex justify-between gap-5 mb-5">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg w-[200px] h-[200px] object-cover"
      />
      <div className="siDesc flex flex-2 flex-col gap-3 ">
        <h1 className="siTitle text-[20px] font-semibold text-[#0071c2]">
          Tower Street Apartments
        </h1>
        <span className="siDistance text-sm">500m from center</span>
        <span className="siTaxiOp text-sm bg-green-600 w-max p-2 rounded-sm text-white font-semibold">
          Free airport taxi
        </span>
        <span className="siSubtitle text-sm font-bold">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures text-sm">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp text-sm font-bold text-green-700">
          Free cancellation{' '}
        </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails flex flex-col justify-between flex-1 ">
        <div className="siRating flex justify-between">
          <span className="font-semibold">Excellent</span>
          <button className="font-semibold bg-[#003580] text-white border-none px-2 py-1 rounded-sm">
            8.9
          </button>
        </div>
        <div className="siDetailTexts text-right">
          <h4 className="siPrice text-[24px] font-semibold">$112</h4>
          <h4 className="siTaxOp text-gray-600 text-sm">
            Includes taxes and fees
          </h4>
          <button className=" siCheckButton  bg-[#003580] hover:bg-[#1a2a42] w-full mt-5 font-bold text-white border-none px-3 py-2 rounded-sm">
            See availability
          </button>
        </div>
      </div>
    </div>
  );
}
