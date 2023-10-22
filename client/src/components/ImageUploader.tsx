import { useAuth } from "@clerk/clerk-react";
import axios from "axios";
import { useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

type Response = {
  data: {
    lc: number;
    type: string;
    id: string[];
  };
};

interface ImageUploaderProps {
  mini?: boolean;
  isUploaded: boolean;
  setHasUploaded: (hasUploaded: boolean) => void;
}

export default function ImageUploader(props: ImageUploaderProps) {
  const navigate = useNavigate();
  const { userId } = useAuth();
  const onDrop = (acceptedFiles: File[]) => {
    const data = new FormData();
    data.append("file", acceptedFiles[0]);
    data.append("userId", userId as string);

    props.setHasUploaded(true);

    const port = 8080; // Replace with your server's port
    navigate("/processing");
    axios
      .post(`http://localhost:${port}/api/index`, data)
      .then((res: Response) => {
        const { lc, type, id } = res.data; // We can get other things if we want, eh.
        console.log({ lc, type, id });
        navigate("/chat");
      })
      .catch((error) => {
        alert("Error uploading file");
        console.error(error);
        navigate("/");
        props.setHasUploaded(false);
      });
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"], // Specify the accepted file type(s)
    },
  });

  useEffect(() => {
    if (props.isUploaded) {
      navigate("/");
    }
  }, [props.isUploaded, navigate]);

  return (
    <div {...getRootProps({ className: "dropzone content-center p-10" })}>
      <div className="flex flex-col items-center cursor-pointer">
        <input {...getInputProps()} />
        {props.mini && <img src="/doc-icon.svg" />}
        <button
          className="btn btn-primary normal-case bg-primary-orange cursor-pointer text-white hover:bg-white hover:text-primary-orange shadow border-none mt-8 rounded-2xl pr-7 pl-7 text-la"
          type="button"
        >
          Upload Syllabus
        </button>
        <p className="mt-4 text-xl">or drop a .pdf here</p>
      </div>
    </div>
  );
}
