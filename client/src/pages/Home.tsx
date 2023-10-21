import NavBar from "../components/NavBar";
import {
    useAuth,
    useClerk
} from "@clerk/clerk-react";
import { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import CourseSidePanel from "../components/CourseSidePanel";

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
                    <CourseSidePanel userClicked={(id: string) => console.log(id)} userClickedManageOrAdd={userClickedManage}/>
                </div>
            </div>
        </>
    );
}