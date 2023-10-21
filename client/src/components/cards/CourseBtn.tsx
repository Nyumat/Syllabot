export default function CourseBtn({ coursename }) {
  return (
    <button className="btn bg-white text-black hover:bg-primary-orange hover:text-white border-none shadow m-2 focus:bg-primary-orange focus:text-white">
      <div className="pl-7 pr-7 pb-3 pt-3 text-xl">{coursename}</div>
    </button>
  );
}
