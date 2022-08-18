export default function FeaturedProperties({
  img,
  alt,
  propName,
  city,
  price,
  rate,
  comment,
}) {
  return (
    <div className="min-w-[200px] h-[300] mb-[50px]">
      <img src={img} alt={alt} className="w-[200px] h-[200] object-cover" />
      <h4 className="fpName font-bold mt-2">{propName}</h4>
      <h4 className="fpCity font-normal my-2">{city}</h4>
      <h4 className="fpPrice font-medium">Starting from ${price}</h4>
      <div className="fpRating flex items-center mt-2 gap-3 ">
        <button className="bg-[#003580] font-bold text-white border-none px-2 py-1 rounded-sm">
          {rate}
        </button>
        <span className="text-sm">{comment}</span>
      </div>
    </div>
  );
}
