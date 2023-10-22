import NavBar from "../components/NavBar";
import FileManageBtn from "../components/buttons/FileManageBtn";
import ImageUploader from "../components/ImageUploader";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CourseSidePanel from "../components/CourseSidePanel";
import { Course } from "../data/types";
import { useState } from "react";

export default function Manage() {
   const navigate = useNavigate();
   const [selectedCourse, setSelectedCourse] = useState<Course>();

   return (
      <>
         <SignedIn>
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
                     onClick={() => navigate("/chat")}
                  >
                     Done!
                  </button>
               </div>
               <div className="grid grid-cols-3 gap-4">
                  <CourseSidePanel
                     addCourseButton
                     userClicked={setSelectedCourse}
                     userClickedManageOrAdd={() => null}
                  />
                  {selectedCourse ? (
                     <CourseInfo course={selectedCourse} />
                  ) : null}
               </div>
            </div>
         </SignedIn>
         <SignedOut>
            <Navigate to="../" />
         </SignedOut>
      </>
   );
}

function CourseInfo({ course }: { course: Course }) {
   const sections = [];
   for (let i = 0; i < course.documents.length; i += 2) {
      const section = course.documents.slice(i, i + 2);
      sections.push(section);
   }

   return (
      <div className="col-span-2">
         <div className="text-4xl font-semibold text-start pl-8 mt-3 select-none">
            {course.courseTitle}
         </div>
         {sections.length > 0 && (
            <div className="mt-6 justify-center self-center">
               {sections.map((section, sectionIndex) => (
                  <div
                     key={sectionIndex}
                     className="flex flex-row flex-wrap"
                  >
                     {section.map((doc, docIndex) => (
                        <FileManageBtn
                           filename={doc.name}
                           key={docIndex}
                        />
                     ))}
                  </div>
               ))}
            </div>
         )}
         <div className="text-3xl font-semibold text-start pl-8 mt-8 select-none">
            Add New File
         </div>
         <div className="flex flex-row flex-wrap mt-3 justify-center">
            <div className="flex justify-center items-center md:w-1/3 md:h-60 shadow-xl rounded-2xl">
               <ImageUploader />
            </div>
            <div className="mx-4 text-xl font-normal select-none self-center">
               or
            </div>
            <div className="flex justify-center items-center md:w-1/2 p-7 md:h-60 shadow-xl rounded-2xl">
               <textarea
                  className="textarea w-full h-full border-0 text-lg focus:outline-none resize-none"
                  placeholder="Copy and Paste Your Syllabus Text"
               ></textarea>
            </div>
         </div>
      </div>
   );
}
