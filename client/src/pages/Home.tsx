import NavBar from "../components/NavBar";
import CourseBtn from "../components/buttons/CourseBtn";
import FileManageBtn from "../components/buttons/FileManageBtn";
import ImageUploader from "../components/ImageUploader";
import { FaPlus } from "react-icons/fa";
import {
    SignedIn,
    SignedOut,
} from "@clerk/clerk-react";
import { Navigate } from 'react-router-dom';
import CourseSidePanel from "../components/CourseSidePanel";

export default function Home() {
    return (
        <>
            <SignedIn>
                <div className="text-center items-center justify-center content-center h-full font-body">
                    <NavBar />
                    <div className="grid grid-cols-3 gap-4">
                        <CourseSidePanel />
                    </div>
                </div>
            </SignedIn>
            <SignedOut>
                <Navigate to='../' />
            </SignedOut>
        </>
    );
}