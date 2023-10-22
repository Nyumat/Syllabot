import ImageUploader from "../components/ImageUploader";
import NavBar from "../components/NavBar";
import { InTextSignIn } from "../components/modals/SignIn";
import { ClerkLoaded, ClerkLoading, SignedOut, SignedIn } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';

export default function Landing() {
  return (
    <>
      <NavBar />
      <ClerkLoaded>
        <SignedOut>
          <>
            <div className="container mx-auto pb-9 select-none">
              <h1 className="text-5xl font-bold text-center mt-10">
                Your Syllabus, Simplified
              </h1>
              <h3 className="text-xl text-center font-light mt-2">
                Upload your first syllabus or <InTextSignIn />
              </h3>

              <div className="flex flex-col md:flex-row items-center justify-center mt-1">
                <div className="flex justify-center items-center m-4 p-8 md:w-96 md:h-96 shadow-xl rounded-3xl">
                  <ImageUploader mini={true} />
                </div>
                <div className="mx-3 text-2xl font-normal">or</div>
                <div className="flex justify-center items-center m-4 p-8 md:w-96 md:h-96 shadow-xl rounded-3xl">
                  <textarea
                    className="textarea w-full h-full border-0 text-lg focus:outline-none"
                    style={{ resize: "none" }}
                    placeholder="Copy and Paste Your Syllabus Text"
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-center items-center ">
                <button className="btn btn-primary bg-primary-orange min-w-min cursor-pointer text-white hover:text-primary-orange border-none shadow m-10">
                  Analyze my Syllabus
                </button>
              </div>
            </div>

            <div className="bg-primary-orange mt-20 select-none">
              <div className="container mx-auto pb-9 select-none">
                <div className="flex flex-col-reverse sm:flex-row justify-between">
                  <div className="flex flex-1 flex-col text-white w-full sm:w-2/3 lg:w-3/5 xl:w-1/2 mr-20" style={{ backgroundColor: 'pink' }}>
                    <h3 className="text-8xl flex-wrap font-bold">
                      Classes are Overwhelming
                    </h3>
                    <h6 className="text-4xl flex-wrap font-semibold mt-8">
                      Let us do the work
                    </h6>
                    <p className="text-2xl flex-wrap font-normal mt-12">
                      Syllabot imports syllabi from all your classes and puts the important information up front
                    </p>
                  </div>
                  <div className="relative sm:mt-0 sm:w-1/3 lg:w-2/5 xl:w-1/2 mx-5 flex flex-col self-center" style={{ backgroundColor: 'blue'}}> 
                    <img src="overclass.png" className="absolute top-0 left-0 w-full h-auto object-cover" /> {/* This makes the image fill its container */}
                  </div>
                </div>
              </div>
            </div>



          </>
        </SignedOut>
        <SignedIn>
          <Navigate to='/chat' />
        </SignedIn>
      </ClerkLoaded>
      <ClerkLoading>
      </ClerkLoading>
    </>
  );
}
