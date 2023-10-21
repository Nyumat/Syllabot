export default function CourseBtn({ coursename }) {
  return (
    <button className="px-6 pt-3 pb-3 text-start text-xl font-medium bg-transparent border-solid hover:bg-primary-grey transition ease-linear border-b focus:bg-primary-grey focus:text-primary-orange">
      {coursename}
    </button>
  );
}
