export default function MailList() {
  return (
    <div className="flex justify-center flex-col items-center text-white gap-5 p-[50px]">
      <h1 className="mailTitle text-2xl">Save time, save money!</h1>
      <span className="mailDesc">
        Sign up and we'll send the best deals to you
      </span>
      <div className="mailInputContainer">
        <input
          className="border-none text-black mr-[10px] rounded-sm"
          type="text"
          placeholder="Your Email"
        />
        <button className="bg-[#0a1524] font-bold text-white border-none px-3 py-2 rounded-sm">
          Subscribe
        </button>
      </div>
    </div>
  );
}
