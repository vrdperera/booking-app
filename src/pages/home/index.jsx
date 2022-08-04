import Featured from '../../components/featured';
import Header from '../../components/header';
import Navbar from '../../components/navbar';

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Header />
      <div className="HomeContainer container mx-auto mt-[50px] flex flex-col items-center gap-8 ">
        <Featured />
        <h1 className="text-[20px] max-w-7xl  w-full ">
          Browse by property type
        </h1>
      </div>
    </div>
  );
}
