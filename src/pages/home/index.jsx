import Featured from '../../components/featured';
import Header from '../../components/header';
import Navbar from '../../components/navbar';
import PropertyList from '../../components/propertyList';
import FeaturedProperties from '../../components/featuredProperties';
import { imgData } from '../../components/propertyList/data';

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Header />
      <div className="HomeContainer container mx-auto mt-[50px] flex flex-col items-center gap-8 ">
        <Featured />
        <h1 className="text-2xl font-semibold max-w-7xl w-full ">
          Browse by property type
        </h1>

        <div className="max-w-7xl mx-auto">
          <div className="container mx-auto flex justify-between gap-5 overflow-x-scroll">
            {imgData.map(({ id, imgLink, alt }) => (
              <PropertyList key={id} imgLink={imgLink} alt={alt} />
            ))}
          </div>
        </div>

        <h1 className="text-2xl font-semibold max-w-7xl w-full">
          Homes guest love
        </h1>
        <FeaturedProperties />
      </div>
    </div>
  );
}
