import { useAuth } from "@clerk/clerk-react";
import axios from "axios";
import { useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";
import Header from "../components/Header";
import TypwriterEffect from "../components/text/TypwriterEffect";

export default function Processing() {
  const { userId } = useAuth();

  useEffect(() => {
    const data = {
      name: userId,
    };

    const existingUser = localStorage.getItem("currUserId");

    if (!existingUser) {
      axios
        .patch("http://localhost:8080/api/index", data)
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("currUserId", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("already exists");
    }
  }, []);

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
