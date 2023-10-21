import NavBar from "../components/NavBar";
import CourseBtn from "../components/buttons/CourseBtn";
import FileManageBtn from "../components/buttons/FileManageBtn";

export default function Manage() {
  return (
    <div className="text-center items-center justify-center content-center h-full font-body">
      <NavBar />
      <div className="text-center mt-5 flex flex-row justify-between pl-8 pr-8">
        <p className="text-5xl font-bold self-center">
          Manage Your Classes
        </p>
        <button className="text-lg pl-8 pr-8 btn btn-primary bg-primary-orange min-w-min cursor-pointer border-none shadow m-2 text-white hover:bg-white hover:text-primary-orange">
          Done!
        </button>
      </div>
      <section className="flex flex-row">
        <div className="flex flex-col w-1/3 mt-3">
          <div className="text-4xl font-bold text-start pl-8">
            Courses
          </div>
          <div className="flex flex-col shadow-lg rounded-lg ml-8 mt-3">
            <CourseBtn coursename={"Course name 1 "} />
            <CourseBtn coursename={"Course name 2"} />
            <CourseBtn coursename={"Course name 3"} />
            <CourseBtn coursename={"Course name 4"} />
            <button className="pl-6 pr-6 text-start text-xl font-medium bg-transparent border-solid hover:bg-primary-grey transition ease-linear p-2 border-b focus:bg-primary-grey focus:text-primary-orange">
              Add a Course
            </button>
          </div>
        </div>
        <div className="flex flex-col w-2/3">
          <div className="text-3xl font-medium text-start pl-8 mt-3">
            Course Name
          </div>
          <div className="flex flex-row flex-wrap mt-6">
            <FileManageBtn filename={"File.pdf1"} />
            <FileManageBtn filename={"File.pdf2"} />
            <FileManageBtn filename={"File.pdf3"} />
            <FileManageBtn filename={"File.pdf4"} />
          </div>
        </div>
      </section>
    </div>
  );
}
