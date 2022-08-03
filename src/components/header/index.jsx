import { iconsForHeader } from './atoms/data';
import Icon from './atoms/header-icon';
import HeaderSearch from './atoms/header-search';

export default function Header() {
  return (
    <div className="Header-Wrapper  bg-navbar-darkBlue text-white flex justify-center relative">
      <div className="headerContainer container mx-auto mt-5 mb-28 ">
        <div className="headerList flex gap-8 mb-[50px] ">
          {iconsForHeader.map(({ icon, name, active, id }) => (
            <Icon key={id} Icon={icon} name={name} active={active} />
          ))}
        </div>
        <h1 className="headerTitle font-semibold text-4xl">
          A lifetime of discounts? It's Genius.
        </h1>
        <p className="headerDesc my-5 mx-0">
          Get rewarded for your travels – unlock instant savings of 10% or more
          with a free Lamabooking account
        </p>
        <button className="login  bg-white w-36  text-black  p-3  rounded-sm font-medium text-xs leading-tight uppercase  hover:shadow-md">
          Sign in / Register
        </button>
        <HeaderSearch />
      </div>
    </div>
  );
}
