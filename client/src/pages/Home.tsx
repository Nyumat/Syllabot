import { useAuth, useClerk, useUser } from "@clerk/clerk-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseSidePanel from "../components/CourseSidePanel";
import NavBar from "../components/NavBar";
import ChatBox from "../components/layout/ChatBox";
import { Course } from "../data/types";
// import { getToken } from "@chakra-ui/react";

export default function Home() {
  const { isSignedIn, userId } = useAuth();
  const clerk = useClerk();
  const { user } = useUser();
  const navigate = useNavigate();
  const { getToken } = useAuth();

  const [coursesData, setCourses] = useState<any>([]);
  const [detailsData, setDetails] = useState<any>([]);

  const fetchCourses = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/users/getCourses",
        { userId }
      );
      setCourses(data.courses);
      setDetails(data.details);
    } catch (error) {
      console.error(error);
      setCourses([]);
      setDetails([]);
    }
  };

  useEffect(() => {
    if (userId) fetchCourses();
  }, [userId]);

  //   useEffect(() => {
  //     const requestData = async () => {
  //       try {
  //         const token = await getToken();
  //         const uid = await user?.id;
  //         const response = await fetch(`api/users/getCourses`, {
  //           method: "POST",
  //           body: JSON.stringify({ userId: uid }),
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization: `Bearer ${token}`,
  //             mode: "cors",
  //           },
  //         });

  //         const result = await response.json();
  //         setCourses(result.data.courses);
  //       } catch (error) {
  //         console.error("Error fetching course data:", error);
  //       }
  //     };
  //     requestData();
  //   }, []);

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
            userClicked={(course: Course) => navigate(`/chat/${course._id}`)}
            userClickedManageOrAdd={userClickedManage}
            courses={coursesData}
            details={detailsData}
          />
          <ChatBox />
        </div>
      </div>
    </>
  );
}
