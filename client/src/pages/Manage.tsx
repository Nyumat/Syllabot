import NavBar from "../components/NavBar";
import CourseBtn from "../components/buttons/CourseBtn";
import FileManageBtn from "../components/buttons/FileManageBtn";
import ImageUploader from "../components/ImageUploader";
import { FaPlus } from "react-icons/fa";

export default function Manage() {
  return (
    <div className="text-center items-center justify-center content-center h-full font-body">
      <NavBar />
      <div className="grid grid-cols-3 gap-4">
        <div
          className="text-4xl font-bold select-none col-span-1 mt-5 px-8"
          style={{ justifySelf: "left" }}
        >
          Manage Your Classes
        </div>
        <button
          className="normal-case text-lg pl-8 pr-8 w-10pc btn btn-primary mt-5 mx-8 bg-primary-orange min-w-min cursor-pointer border-none shadow text-white hover:bg-white hover:text-primary-orange col-span-2"
          style={{ justifySelf: "right" }}
        >
          Done!
        </button>
      </div>
      {/* <div className="text-center mt-4 flex flex-row justify-between px-8">
        <p className="text-5xl font-bold self-center select-none">
          Manage Your Classes
        </p>
        <button className="normal-case text-lg pl-8 pr-8 btn btn-primary bg-primary-orange min-w-min cursor-pointer border-none shadow m-2 text-white hover:bg-white hover:text-primary-orange">
          Done!
        </button>
      </div> */}
      <div className="grid grid-cols-3 gap-4">
        <CourseSidePanel />
        <CourseInfo />
      </div>
    </div>
  );
}

function CourseSidePanel() {
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

function CourseInfo() {
  return (
    <div className="col-span-2">
      <div className="text-3xl font-semibold text-start pl-8 mt-3 select-none">
        Course Name
      </div>
      <div className="flex flex-row flex-wrap mt-6 justify-center self-center">
        <FileManageBtn filename={"File.pdf1"} />
        <FileManageBtn filename={"File.pdf2"} />
        <FileManageBtn filename={"File.pdf3"} />
        <FileManageBtn filename={"File.pdf4"} />
      </div>
      <div className="text-3xl font-semibold text-start pl-8 mt-8 select-none">
        Add New
      </div>
      <div className="flex flex-row flex-wrap mt-3 justify-center">
        <div className="flex justify-center items-center  md:w-1/3 md:h-60 shadow-xl rounded-2xl">
          <ImageUploader />
        </div>
        <div className="mx-4 text-xl font-normal select-none self-center">
          or
        </div>
        <div className="flex justify-center items-center md:w-1/2  p-7 md:h-60 shadow-xl rounded-2xl">
          <textarea
            className="textarea w-full h-full border-0 text-lg focus:outline-none resize-none"
            placeholder="Copy and Paste Your Syllabus Text"
          ></textarea>
        </div>
      </div>
    </div>
  );
}
