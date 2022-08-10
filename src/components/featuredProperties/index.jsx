export default function FeaturedProperties() {
  return (
    <div className="FeaturedProperties max-w-7xl mx-auto ">
      <div className="fp w-full container flex justify-between gap-5">
        <div className="fpItem flex-1 gap-[10px] flex flex-col">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
            alt=""
            className="fpImg object-cover w-full"
          />
          <span className="fpName font-bold">Aparthotel Stare Miasto</span>
          <span className="fpCity font-medium">Madrid</span>
          <span className="fpPrice font-medium">Starting from $120</span>
          <div className="fpRating flex items-center gap-3 ">
            <button className="bg-[#003580] font-bold text-white border-none px-2 py-1 rounded-sm">
              8.9
            </button>
            <span className="text-sm">Excellent</span>
          </div>
        </div>
        <div className="fpItem flex-1 gap-[10px] flex flex-col">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
            alt=""
            className="fpImg object-cover w-full"
          />
          <span className="fpName font-bold">Comfort Suites Airport</span>
          <span className="fpCity font-medium">Austin</span>
          <span className="fpPrice font-medium">Starting from $140</span>
          <div className="fpRating flex items-center gap-3 ">
            <button className="bg-[#003580] font-bold text-white border-none px-2 py-1 rounded-sm">
              9.3
            </button>
            <span className="text-sm">Exceptional</span>
          </div>
        </div>
        <div className="fpItem flex-1 gap-[10px] flex flex-col">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
            alt=""
            className="fpImg object-cover w-full"
          />
          <span className="fpName font-bold">Four Seasons Hotel</span>
          <span className="fpCity font-medium">Lisbon</span>
          <span className="fpPrice font-medium">Starting from $99</span>
          <div className="fpRating flex items-center gap-3 ">
            <button className="bg-[#003580] font-bold text-white border-none px-2 py-1 rounded-sm">
              8.8
            </button>
            <span className="text-sm">Excellent</span>
          </div>
        </div>
        <div className="fpItem flex-1 gap-[10px] flex flex-col">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
            alt=""
            className="fpImg object-cover w-full"
          />
          <span className="fpName font-bold">Hilton Garden Inn</span>
          <span className="fpCity font-medium">Berlin</span>
          <span className="fpPrice font-medium">Starting from $105</span>
          <div className="fpRating flex items-center gap-3 ">
            <button className="bg-[#003580] font-bold text-white border-none px-2 py-1 rounded-sm">
              8.9
            </button>
            <span className="text-sm">Excellent</span>
          </div>
        </div>
      </div>
    </div>
  );
}
