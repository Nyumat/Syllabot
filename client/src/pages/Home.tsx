import NavBar from "../components/NavBar";
import {
    SignedIn,
    SignedOut,
} from "@clerk/clerk-react";
import { Navigate } from 'react-router-dom';
import CourseSidePanel from "../components/CourseSidePanel";

export default function Home() {
    return (
        <>
            <div className="text-center items-center justify-center content-center h-full font-body">
                <NavBar />
                <div className="grid grid-cols-3 gap-4">
                    <CourseSidePanel />
                </div>
            </div>
        </>
    );
}