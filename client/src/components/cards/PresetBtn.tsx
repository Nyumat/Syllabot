export default function PresetBtn({ preset }) {
  return (
    <button className="btn w-1/3 h-auto bg-white text-black hover:bg-primary-orange hover:text-white border-none shadow focus:bg-primary-orange focus:text-white">
      <div className="pl-7 pr-7 text-base font-normal">{preset}</div>
    </button>
  );
}
