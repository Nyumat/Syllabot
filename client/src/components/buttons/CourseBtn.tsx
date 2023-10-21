import { BiSolidChevronRight } from "react-icons/bi";

type CourseButtonType = {
  id: string
  coursename: string
  onClick: (id: string) => any
}

export default function CourseBtn({ id, coursename, onClick }: CourseButtonType) {
  return (
    <button className="flex flex-row items-center justify-between px-6 pt-3 pb-3 text-start text-xl font-medium bg-transparent border-solid hover:bg-primary-grey transition ease-linear border-b focus:bg-primary-grey focus:text-primary-orange" onClick={() => onClick(id)}>
      {coursename} <BiSolidChevronRight />
    </button>
  );
}
