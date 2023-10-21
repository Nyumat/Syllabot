import NavBar from "../components/NavBar";
import CourseBtn from "../components/buttons/CourseBtn";
import FileManageBtn from "../components/buttons/FileManageBtn";
import ImageUploader from "../components/ImageUploader";

export default function Manage() {
  return (
    <div className="text-center items-center justify-center content-center h-full font-body">
      <NavBar />
      <div className="flex flex-col"></div>
      <div className="text-center mt-4 flex flex-row justify-between px-8">
        <p className="text-5xl font-bold self-center select-none">
          Manage Your Classes
        </p>
        <button className="normal-case text-lg pl-8 pr-8 btn btn-primary bg-primary-orange min-w-min cursor-pointer border-none shadow m-2 text-white hover:bg-white hover:text-primary-orange">
          Done!
        </button>
      </div>
      <div className="flex flex-row justify-evenly">
        <div className="flex flex-col w-25pc mt-3">
          <div className="text-4xl font-bold text-start pl-8 select-none">
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
        <div className="flex flex-col">
          <div className="text-3xl font-semibold text-start pl-8 mt-3 select-none">
            Course Name
          </div>
          <div className="flex flex-row flex-wrap mt-6 justify-center">
            <FileManageBtn filename={"File.pdf1"} />
            <FileManageBtn filename={"File.pdf2"} />
            <FileManageBtn filename={"File.pdf3"} />
            <FileManageBtn filename={"File.pdf4"} />
          </div>
          <div>
            <div className="text-3xl font-semibold text-start pl-8 mt-12 select-none">
              Add New
            </div>
            <div className="flex flex-row flex-wrap mt-3">
              <div className="flex justify-center items-center ml-7 md:w-96 md:h-60 shadow-xl rounded-2xl">
                <ImageUploader />
              </div>
              <div className="mx-4 text-xl font-normal select-none self-center">
                or
              </div>
              <div className="flex justify-center items-center md:w-96 p-7 md:h-60 shadow-xl rounded-2xl">
                <textarea
                  className="textarea w-full h-full border-0 text-lg focus:outline-none resize-none"
                  placeholder="Copy and Paste Your Syllabus Text"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
