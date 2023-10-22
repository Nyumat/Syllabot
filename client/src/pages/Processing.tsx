import HashLoader from "react-spinners/HashLoader";
import Header from "../components/Header";
import TypwriterEffect from "../components/text/TypwriterEffect";

export default function Processing() {
   return (
      <>
         <Header />
         <div className="text-center text-5xl font-bold mb-6 mt-10">
            Analyzing your syllabus...
            <TypwriterEffect />
         </div>
         <div className="flex flex-col place-content-center text-2xl justify-center">
            <HashLoader
               color="#DC4405"
               size={180}
               cssOverride={{ placeSelf: "center" }}
            />
         </div>
      </>
   );
}
