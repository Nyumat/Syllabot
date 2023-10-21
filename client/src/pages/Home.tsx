import ImageUploader from "../components/ImageUploader";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="container mx-auto">
        <h1 className="text-6xl font-bold text-center mt-10">
          Your Syllabus, Simplified
        </h1>
        <h3 className="text-3xl text-center font-light mt-5">
          Upload your first syllabus or <a href="#">sign in</a>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-12">
          <div className="flex justify-center items-center m-8 shadow-2xl rounded-3xl">
            <ImageUploader />
          </div>
          <div className="flex justify-center items-center m-8 shadow-2xl rounded-3xl p-5">
            <textarea
              className="textarea w-full h-96 bg-white border-0 text-lg"
              placeholder="Copy and Paste Your Syllabus Text"
            ></textarea>
          </div>
        </div>

        <div className="flex justify-center items-center ">
          <button className="btn btn-primary bg-primary-orange min-w-min cursor-pointer text-white hover:text-primary-orange border-none shadow m-2">
            Analyze my Syllabus
          </button>
        </div>
      </div>
    </>
  );
}
