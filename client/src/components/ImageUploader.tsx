import { useDropzone } from "react-dropzone";
import axios from 'axios';

export default function ImageUploader({ mini = false }) {
  
  const onDrop = (acceptedFiles: File[]) => {
    const data = new FormData();
    data.append('file', acceptedFiles[0]);
  
    const port = 8080; // Replace with your server's port
    axios.post(`http://localhost:${port}/api/users/newFile`, data)
      .then((res) => {
        console.log(res.data); // Use res.data to access the server response
      })
      .catch((error) => {
        console.error(error);
      });
  };
  

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'], // Specify the accepted file type(s)
    }
  });

  return (
    <div
      {...getRootProps({ className: "dropzone content-center p-10" })}
    >
      <div className="flex flex-col items-center cursor-pointer">
        <input {...getInputProps()} />
        {mini && <img src="/doc-icon.svg" />}
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
