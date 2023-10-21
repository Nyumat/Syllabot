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
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src="/lightMode.svg" alt="canvas logo" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-bold">Welcome back!</h2>
          <p className="mb-4 text-base-content">
            Sign in to your account to continue
          </p>
          <button className="btn btn-primary" onClick={(e) => handleClicked(e)}>
            Sign in
          </button>
        </div>
      </div>
    </>
  );
}
