import { useNavigate } from "react-router-dom";

export const RedirectToHome = () => {
    const navigate = useNavigate();
    
    return (
        <>
            {() => {console.log("Hi"); navigate("/manage")}}
        </>
    )
}