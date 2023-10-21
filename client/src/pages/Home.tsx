import NavBar from "../components/NavBar";
import FileUpload from "../components/FileUpload";

export default function Home() {
  return (
    <>
      <NavBar/>
      <div className="container mx-auto">
        <h1 className="text-6xl font-bold text-center mt-10">Your Syllabus, Simplified</h1>
        <h3 className="text-3xl text-center font-light mt-5">Upload your first syllabus or <a href="#">sign in</a></h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex justify-center items-center">
            <FileUpload />
          </div>
        </div>
      </div>
    </>
  );
}
