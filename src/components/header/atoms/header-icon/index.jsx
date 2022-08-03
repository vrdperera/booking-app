export default function Icon({ Icon, name, active }) {
  return (
    <div
      className={`headerListItem flex justify-center items-center gap-2 cursor-pointer ${
        active ? 'border-2 p-3 rounded-xl' : ''
      }`}
    >
      <Icon />
      <span>{name}</span>
    </div>
  );
}
