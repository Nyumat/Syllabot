import NavBar from "../components/NavBar";
import CourseBtn from "../components/buttons/CourseBtn";

export default function Manage() {
  return (
    <div className="text-center items-center justify-center content-center h-full font-body">
      <NavBar />
      <div className="text-center mt-10 flex flex-row justify-between pl-8 pr-8">
        <p className="text-5xl font-bold self-center">
          Manage Your Classes
        </p>
        <button className="text-lg pl-8 pr-8 btn btn-primary bg-primary-orange min-w-min cursor-pointer border-none shadow m-2 text-white hover:bg-white hover:text-primary-orange">
          Done!
        </button>
      </div>
      <section className="flex flex-col w-1/3">
        <div className="text-4xl font-bold">Courses</div>
        <div className="flex flex-col shadow rounded-lg m-4">
          <CourseBtn coursename={"Course name 1 "} />
          <CourseBtn coursename={"Course name 2"} />
          <CourseBtn coursename={"Course name 3"} />
          <CourseBtn coursename={"Course name 4"} />
          <button className=" pl-6 pr-6 text-start text-2xl font-medium bg-transparent border-solid hover:bg-primary-grey transition ease-linear p-2 border-b focus:bg-primary-grey focus:text-primary-orange">
            Add a Course
          </button>
        </div>
      </section>
    </div>
  );
}
