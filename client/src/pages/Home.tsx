import NavBar from "../components/NavBar";
import axios from "axios";
import { useEffect, useState} from "react";
import { useAuth, useClerk, SignIn, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import CourseSidePanel from "../components/CourseSidePanel";
import ChatBox from "../components/layout/ChatBox";
import { Course } from "../data/types";
// import { getToken } from "@chakra-ui/react";


export default function Home() {
   const { isSignedIn } = useAuth();
   const clerk = useClerk();
   const { user } = useUser()
   const navigate = useNavigate();
   const { getToken } = useAuth();

   // State to store the list of courses
   const [courses, setCourses] = useState<Course[]>([]);

   useEffect(() => {
      const requestData = async () =>{
         try{
            const token = await getToken();
            const uid = await user?.id
            const response = await fetch(
               `api/users/getCourses`,
               {
                  method: "POST",
                  body: JSON.stringify({userId: uid}),
                  headers: {
                     "Content-Type": "application/json",
                     Authorization: `Bearer ${token}`,
                     mode: "cors"
                  },
               }
            )

            const result = await response.json();
            setCourses(result.data.courses);
   
         } catch (error) {
            console.error("Error fetching course data:", error); 
         }
      }
      requestData()
   }, []);


   const userClickedManage = () => {
      if (isSignedIn) {
         navigate("/manage");
      } else {
         clerk.openSignUp();
      }
   };


   return (
      <>
         <div className="text-center items-center justify-center content-center h-full font-body">
            <NavBar />
            <div className="grid grid-cols-4 gap-4 mt-6">
               <CourseSidePanel
                  userClicked={(course: Course) =>
                     console.log(course.courseDetails?.courseTitle ?? course.id)
                     //Eventually this will change the chats to the chat history of the selected course
                  }
                  userClickedManageOrAdd={userClickedManage}
                  courses={courses}
               />
               <ChatBox />
            </div>
         </div>
      </>
   );
}
