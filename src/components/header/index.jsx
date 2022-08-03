import { iconsForHeader } from './atoms/data';
import Icon from './atoms/header-icon';

export default function Header() {
  return (
    <div className="Header-Wrapper  bg-navbar-darkBlue text-white flex justify-center">
      <div className="headerList container mx-auto flex gap-8 mt-5 mb-28">
        {iconsForHeader.map(({ icon, name, active }) => (
          <Icon Icon={icon} name={name} active={active} />
        ))}
      </div>
    </div>
  );
}
