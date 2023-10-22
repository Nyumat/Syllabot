import { BiSolidChevronRight } from "react-icons/bi";

type CourseButtonType = {
   id: string;
   coursename: string;
   selectedId: string;
   onClick: (id: string) => any;
};

export default function CourseBtn({
   id,
   coursename,
   selectedId,
   onClick,
}: CourseButtonType) {
   const baseCSS =
      "flex flex-row items-center justify-between px-6 pt-3 pb-3 text-start text-xl font-medium bg-transparent border-solid hover:bg-primary-grey transition ease-linear border-b";
   const selectedCSS =
      "flex flex-row items-center justify-between px-6 pt-3 pb-3 text-start text-xl font-medium bg-primary-grey text-primary-orange border-solid hover:bg-primary-grey transition ease-linear border-b";
   return (
      <button
         className={id == selectedId ? selectedCSS : baseCSS}
         onClick={() => onClick(id)}
      >
         {coursename} <BiSolidChevronRight />
      </button>
   );
}
