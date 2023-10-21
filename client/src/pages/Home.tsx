import ImageUploader from "../components/ImageUploader";
import NavBar from "../components/NavBar";
import { InTextSignIn } from "../components/modals/SignIn";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="container mx-auto pb-9">
        <h1 className="text-5xl font-bold text-center mt-10">
          Your Syllabus, Simplified
        </h1>
        <h3 className="text-2xl text-center font-light mt-2">
          Upload your first syllabus or <InTextSignIn/>
        </h3>

        <div className="flex flex-col md:flex-row items-center justify-center mt-0">
          <div className="flex justify-center items-center m-4 p-8 md:w-96 md:h-96 shadow-xl rounded-3xl">
            <ImageUploader />
          </div>
          <div className="mx-4 text-3xl font-normal">or</div>
          <div className="flex justify-center items-center m-4 p-8 md:w-96 md:h-96 shadow-xl rounded-3xl">
            <textarea
              className="textarea w-full h-full border-0 text-lg focus:outline-none"
              style={{ resize: "none" }}
              placeholder="Copy and Paste Your Syllabus Text"
            ></textarea>
          </div>
        </div>

        <div className="flex justify-center items-center ">
          <button className="btn btn-primary bg-primary-orange min-w-min cursor-pointer mt-6 text-white hover:text-primary-orange border-none shadow m-2">
            Analyze my Syllabus
          </button>
        </div>
      </div>
    </>
  );
}
