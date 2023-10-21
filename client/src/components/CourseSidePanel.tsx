import CourseBtn from "../components/buttons/CourseBtn";
import { FaPlus } from "react-icons/fa";

export default function CourseSidePanel() {
    return (
      <div className="col-span-1">
        <div className="text-3xl font-semibold text-start pl-8 select-none">
          Courses
        </div>
        <div className="flex flex-col shadow-lg rounded-lg ml-8 mt-3">
          <CourseBtn coursename={"Course name 1 "} />
          <CourseBtn coursename={"Course name 2"} />
          <CourseBtn coursename={"Course name 3"} />
          <CourseBtn coursename={"Course name 4"} />
          <button
            className="flex flex-row items-center
           justify-between px-6 pt-3 pb-3 text-start text-xl font-medium bg-transparent border-solid hover:bg-primary-grey transition ease-linear border-b focus:bg-primary-grey focus:text-primary-orange"
          >
            Add a Course <FaPlus />
          </button>
        </div>
      </div>
    );
  }