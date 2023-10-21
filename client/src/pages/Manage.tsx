import CourseBtn from "../components/cards/CourseBtn";
import PresetBtn from "../components/cards/PresetBtn";

export default function Manage() {
  return (
    <div className="text-center items-center justify-center content-center h-full font-body">
      <div className="font-bold text-3xl">
        Courses
        <div className="">
          <CourseBtn coursename={"CS 123 CS 123CS 123CS 123"} />
          <CourseBtn coursename={"CS 123"} />
          <CourseBtn coursename={"CS 123"} />
          <CourseBtn coursename={"CS 123"} />
        </div>
      </div>
      <div className="text-center font-bold font-body text-3xl flex">
        Presets
      </div>
    </div>
  );
}
