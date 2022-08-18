export default function FeaturedItem({ src, alt, propertyName, properties }) {
  return (
    <div className="FeaturedItem relative h-56 rounded-md overflow-hidden cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <img src={src} alt={alt} className="FeaturedImg w-full object-cover" />
      <div className="FeaturedTitles absolute bottom-[20px] left-[20px] text-white">
        <h1 className="FeaturedTitle text-2xl font-bold">{propertyName}</h1>
        <h1 className="FeaturedTitle text-xl font-bold">{properties}</h1>
      </div>
    </div>
  );
}
