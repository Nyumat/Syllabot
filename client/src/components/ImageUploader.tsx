import { useDropzone } from "react-dropzone";

export default function ImageUploader() {
  const { getRootProps, open, getInputProps } = useDropzone();

  return (
    <div
      {...getRootProps({ className: "dropzone content-center p-10" })}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input {...getInputProps()} />
        <img src="/doc-icon.svg" />
        <button
          className="btn btn-primary normal-case bg-primary-orange min-w-min cursor-pointer text-white hover:bg-white hover:text-primary-orange shadow border-none mt-8 rounded-2xl pr-7 pl-7 text-xl"
          type="button"
          onClick={open}
        >
          Upload Syllabus
        </button>
        <p className="mt-4 text-xl">or drop a .pdf here</p>
      </div>
    </div>
  );
}
