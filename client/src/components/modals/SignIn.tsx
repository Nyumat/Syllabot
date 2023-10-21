import { useAuth, useClerk } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const clerk = useClerk();
  const navigate = useNavigate();
  const { isLoaded, isSignedIn } = useAuth();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      navigate("/manage");
    }
  }, [isLoaded, isSignedIn, navigate]);

  const handleClicked = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    clerk.openSignIn();
  };

  return (
    <>
        <button className="btn btn-primary bg-primary-orange min-w-min cursor-pointer text-white" onClick={(e) => handleClicked(e)}>
          Sign in
        </button>
    </>
  );
}
