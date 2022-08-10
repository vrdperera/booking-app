export default function PropertyList({ imgLink, alt, name, num }) {
  return (
    <div className="pListItem rounded-lg cursor-pointer">
      <div className="pListImg min-w-[260px] min-h-[240px] hover:scale-105 transform transition duration-300 ease-out">
        <img
          src={imgLink}
          alt={alt}
          className="pListImg w-[260px] h-[240px] object-cover"
        />
      </div>
      <div className="pListTitles">
        <h1 className="text-xl font-bold">{name}</h1>
        <h2 className="text-lg font-bold">{num}</h2>
      </div>
    </div>
  );
}
