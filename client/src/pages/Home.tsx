import NavBar from "../components/NavBar";
import {
    useAuth,
    useClerk,
    SignIn
} from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import CourseSidePanel from "../components/CourseSidePanel";
import { Course } from "../data/types";

export default function Home() {
    const { isSignedIn } = useAuth();
    const clerk = useClerk();
    const navigate = useNavigate();

    const userClickedManage = () => {
        if (isSignedIn) {
            navigate("/manage");
        } else {
            clerk.openSignUp();
        }
    }

    return (
        <>
            <div className="text-center items-center justify-center content-center h-full font-body">
                <NavBar />
                <div className="grid grid-cols-3 gap-4">
                    <CourseSidePanel userClicked={(course: Course) => console.log(course.courseTitle)} userClickedManageOrAdd={userClickedManage}/>
                </div>
            </div>
        </>
    );
}