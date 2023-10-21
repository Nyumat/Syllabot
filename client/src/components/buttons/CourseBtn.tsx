export default function CourseBtn({ coursename }) {
  return (
    <button className="pl-6 pr-6 text-start text-xl font-medium bg-transparent border-solid hover:bg-primary-grey transition ease-linear p-2 border-b focus:bg-primary-grey focus:text-primary-orange">
      {coursename}
    </button>
  );
}
