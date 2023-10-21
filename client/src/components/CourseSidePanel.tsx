import CourseBtn from "../components/buttons/CourseBtn";
import { FaPlus, FaList } from "react-icons/fa";
import {
  SignedIn,
  SignedOut,
  RedirectToSignIn
} from "@clerk/clerk-react";
import { Course } from "../data/types";

type CourseSidePanelType = {
  addCourseButton?: boolean
  userClicked: (id: string) => any
  userClickedManageOrAdd: () => any
}

export default function CourseSidePanel({ addCourseButton, userClicked, userClickedManageOrAdd }: CourseSidePanelType) {

  const courses: Course[] = [
    {
      id: "1",
      courseTitle: "Course name 1"
    },
    {
      id: "93932",
      courseTitle: "Course name 2"
    },
    {
      id: "irg8324",
      courseTitle: "Course name 3"
    },
    {
      id: "fiefgi",
      courseTitle: "Course name 4"
    },
  ]

  return (
    <div className="col-span-1">
      <div className="text-3xl font-semibold text-start pl-8 select-none">
        Courses
      </div>
      <div className="flex flex-col shadow-lg rounded-lg ml-8 mt-3">
        {courses.map(course => <CourseBtn id={course.id} coursename={course.courseTitle} onClick={userClicked} />)}

        {addCourseButton ?
          <button
            className="flex flex-row items-center
           justify-between px-6 pt-3 pb-3 text-start text-xl font-medium bg-transparent border-solid hover:bg-primary-grey transition ease-linear border-b focus:bg-primary-grey focus:text-primary-orange"
            onClick={userClickedManageOrAdd}
          >

            Add a Course <FaPlus />
          </button> :
          <button
            className="flex flex-row items-center
           justify-between px-6 pt-3 pb-3 text-start text-xl font-medium bg-transparent border-solid hover:bg-primary-grey transition ease-linear border-b focus:bg-primary-grey focus:text-primary-orange"
            onClick={userClickedManageOrAdd}
          >

            Manage Courses <FaList />
          </button>
        }
      </div>
    </div>
  );
}