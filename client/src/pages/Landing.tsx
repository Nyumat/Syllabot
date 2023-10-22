import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import ImageUploader from "../components/ImageUploader";
import NavBar from "../components/NavBar";
import { InTextSignIn } from "../components/modals/SignIn";
import Processing from "./Processing";

export default function Landing() {

  const [hasUploaded, setHasUploaded] = useState(false);

  const contribs = [
    {
      name: "Imgyeong Lee",
      link: "https://imgyeong-lee-portfolio-website.vercel.app/",
      pfp: "imgyeong.png",
    },
    {
      name: "Oliver Elliott",
      link: "https://oliverthis.com",
      pfp: "oliver.png",
    },
    {
      name: "Tom Nyuma",
      link: "https://www.tomnyuma.rocks/",
      pfp: "tom.png",
    },
    {
      name: "Sankalp Patil",
      link: "https://sankalpspatil.com/",
      pfp: "sandy.png",
    },
  ];


  console.log(hasUploaded);

  return (
    <>
      {hasUploaded ? (
        <Processing isUploaded={hasUploaded} />
      ) : (
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
                  <ImageUploader mini={true}
                  setHasUploaded={setHasUploaded}
                  isUploaded={hasUploaded}
                  />
                </div>
                <div className="mx-3 text-2xl font-normal">
                  or
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="flex justify-center items-center m-4 p-8 md:w-96 md:h-80 shadow-xl rounded-3xl">
                    <textarea
                      className="textarea w-full h-full border-0 text-lg focus:outline-none"
                      style={{ resize: "none" }}
                      placeholder="Copy and Paste Your Syllabus Text"
                    ></textarea>
                  </div>
                  <div className="flex justify-center items-center ">
                    <button className="btn btn-primary text-base rounded-2xl px-11 normal-case bg-primary-orange min-w-min cursor-pointer text-white hover:text-primary-orange border-none shadow">
                      Upload Text
                    </button>
                  </div>
                </div>
              </div>
                </div>

                <div className="bg-primary-orange  select-none p-12 flex-row flex flex-wrap justify-center">
                  <div className="flex flex-1 flex-col text-white w-full sm:w-2/3 lg:w-3/5 xl:w-1/2 mr-20 self-center">
                    <h3
                      className="text-6xl flex-wrap font-bold"
                      style={{ fontSize: "6vw" }}
                    >
                      Classes are Overwhelming
                    </h3>
                    <h6
                      className="text-4xl flex-wrap font-semibold mt-1"
                      style={{ fontSize: "2.5vw" }}
                    >
                      Let us do the work
                    </h6>
                    <p
                      className="text-2xl flex-wrap font-normal mt-12"
                      style={{
                        fontSize: "2vw",
                        lineHeight: "2.5vw",
                      }}
                    >
                      Syllabot imports syllabi from all your classes and puts
                      the important information up front
                    </p>
                  </div>
                  <div className="flex w-1/2">
                    <img src="overclass.png" className="object-cover p-7" />{" "}
                  </div>
                </div>

                <div className="flex flex-1 flex-col text-black w-full mr-20 self-center p-12">
                  <h3
                    className="text-6xl flex-wrap font-bold"
                    style={{ fontSize: "6vw" }}
                  >
                    You Have a Question?
                  </h3>
                  <h3
                    className="text-6xl flex-wrap font-bold mt-2"
                    style={{ fontSize: "6vw" }}
                  >
                    We Have the Answer
                  </h3>
                  <h6
                    className="text-4xl flex-wrap font-semibold mt-2 text-zinc-600"
                    style={{ fontSize: "2.5vw" }}
                  >
                    Ask Syllabot any question about your classes
                  </h6>
                </div>

                <img
                  src="computers-no-text.svg"
                  className="w-full"
                  style={{ marginTop: -200 }}
                />

                <div className="flex flex-1 flex-col text-black w-full mr-20 self-center p-12">
                  <h3
                    className="text-6xl flex-wrap font-bold text-center"
                    style={{ fontSize: "6vw" }}
                  >
                    Designed by Students
                  </h3>
                  <h3
                    className="text-6xl flex-wrap font-bold mt-2 text-center"
                    style={{ fontSize: "6vw" }}
                  >
                    For Students
                  </h3>
                </div>

                <div className="flex flex-row justify-evenly mx-40 mb-20">
                  {contribs.map((contrib) => (
                    <div className="flex flex-col align-middle transition ease-linear hover:scale-105">
                      <a href={contrib.link} className="text-center text-2xl">
                        <img src={contrib.pfp} />

                        {contrib.name}
                      </a>
                    </div>
                  ))}
                </div>
              </>
            </SignedOut>
            <SignedIn>
              <Navigate to="/chat" />
            </SignedIn>
          </ClerkLoaded>
          <ClerkLoading></ClerkLoading>
        </>
      )
    }
    </>
  )
}