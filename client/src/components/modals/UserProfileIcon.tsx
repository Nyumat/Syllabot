import { useAuth, useClerk } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function UserProfileIcon() {

    const clerk = useClerk();
    const navigate = useNavigate();
    const { isSignedIn } = useAuth();

    useEffect(() => {
        if (!isSignedIn) {
            navigate("../");
            console.log(isSignedIn)
        }
    }, [isSignedIn, navigate]);

    const openPopup = async () => {
        await clerk.signOut()
        navigate("../");
        console.log(isSignedIn)
    }

    return (
        <img src="/user-icon.svg" width={40} onClick={openPopup} style={{ cursor: "pointer" }} />
    )
}