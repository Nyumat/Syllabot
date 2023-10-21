import LoadingSpinner from "../components/spinners/LoadingSpinner";

export default function Processing() {
  return (
    <>
      <div className="text-center text-5xl font-bold mb-12 mt-10">
        Analyzing your syllabus...
      </div>
      <div className="flex place-content-center text-2xl mb-14">
        Something something something
      </div>
      <LoadingSpinner />
    </>
  );
}
