import Header from '../../components/header';
import Navbar from '../../components/navbar';
import MailList from '../../components/mailList';
import Footer from '../../components/footer';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import { useState } from 'react';

export default function Hotel() {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1',
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === 'l') {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />

      <div className="hContainer container mx-auto mt-[20px] ">
        {open && (
          <div className="slider sticky z-[999] top-0 left-0  h-[100vh] flex items-center w-full mx-auto  bg-gray-100/80">
            <DisabledByDefaultIcon
              className="close absolute top-5 right-5 !text-[40px]  cursor-pointer"
              onClick={() => setOpen(false)}
            />
            <ArrowBackIosIcon
              className="arrow !text-[40px]"
              onClick={() => handleMove('l')}
            />
            <div className="sliderWrapper w-full h-full flex justify-center items-center">
              <img
                src={photos[slideNumber].src}
                alt=""
                className="sliderImg  w-[80%] h-[80vh] object-cover rounded-md border-[2px] border-black"
              />
            </div>
            <ArrowForwardIosIcon
              className="arrow !text-[40px]"
              onClick={() => handleMove('r')}
            />
          </div>
        )}

        <div className="hWrapper max-w-7xl mx-auto w-full flex flex-col gap-3 relative">
          <button className="siCheckButton absolute top-[-24px] right-0 max-w-max bg-[#003580] hover:bg-[#1a2a42] w-full mt-5 font-bold text-white border-none px-3 py-2 rounded-sm">
            Reserve or Book Now!
          </button>
          <h1 className="hTitle text-2xl text-black font-bold">Grand Hotel</h1>
          <div className="hAddress flex items-center gap-3">
            <LocationOnIcon />
            <span className="text-[16px] text-gray-600 font-medium">
              Elton St 125 New york
            </span>
          </div>
          <span className="hotelDistance font-medium text-[#0071c2]">
            Excellent location – 500m from center
          </span>
          <span className="hotelPriceHighlight text-green-700 font-medium">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages flex flex-wrap justify-between">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper w-[33%] my-1" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg w-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails flex justify-between gap-5 mt-5">
            <div className="hotelDetailsTexts flex-3">
              <h1 className="hotelTitle text-3xl font-bold">
                Stay in the heart of City
              </h1>
              <p className="hotelDesc text-base mt-5">
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
            </div>
            <div className="hotelDetailsPrice flex-1 bg-blue-200 p-5 rounded-md flex flex-col gap-5 ">
              <h1 className="text-2xl font-bold text-gray-700">
                Perfect for a 9-night stay!
              </h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2 className="text-xl font-bold font-normal">
                <b>$945</b> (9 nights)
              </h2>
              <button className="siCheckButton max-w-max bg-[#003580] hover:bg-[#1a2a42] w-full mt-5 font-bold text-white border-none px-3 py-2 rounded-sm">
                Reserve or Book Now!
              </button>
            </div>
          </div>

          <div className="bg-black mt-[24px]">
            <MailList />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
