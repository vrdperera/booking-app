import Featured from '../../components/featured';
import Header from '../../components/header';
import Navbar from '../../components/navbar';
import PropertyList from '../../components/propertyList';
import FeaturedProperties from '../../components/featuredProperties';
import { imgData } from '../../components/propertyList/data';
import { propertiesimgDataPro } from '../../components/featuredProperties/data';
import MailList from '../../components/mailList';
import Footer from '../../components/footer';

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Header />
      <div className="HomeContainer container mx-auto mt-[50px] flex flex-col items-center gap-8 overflow-x-scroll">
        <Featured />
        <h1 className="text-2xl font-semibold max-w-7xl w-full ">
          Browse by property type
        </h1>

        <div className="max-w-7xl mx-auto overflow-x-scroll">
          <div className="container mx-auto flex justify-between gap-5 overflow-x-scroll">
            {imgData.map(({ id, imgLink, alt }) => (
              <PropertyList key={id} imgLink={imgLink} alt={alt} />
            ))}
          </div>
        </div>

        <h1 className="text-2xl font-semibold max-w-7xl w-full">
          Homes guest love
        </h1>

        <div className="FeaturedProperties container mx-auto ">
          <div className=" max-w-7xl mx-auto flex justify-between gap-5 overflow-x-scroll">
            {propertiesimgDataPro.map((prop) => (
              <FeaturedProperties
                key={prop.id}
                img={prop.imgLink}
                alt={prop.alt}
                propName={prop.propertyName}
                city={prop.city}
                price={prop.price}
                rate={prop.rate}
                comment={prop.comment}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full bg-[#003580] ">
        <div className="container mx-auto">
          <div className="w-full max-w-7xl mx-auto">
            <MailList />
          </div>
        </div>
      </div>

      <div className="w-full bg-[#ffffff] ">
        <div className="container mx-auto">
          <div className="w-full max-w-7xl mx-auto">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
