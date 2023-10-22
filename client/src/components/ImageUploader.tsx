import { useDropzone } from "react-dropzone";

export default function ImageUploader({ mini = false }) {
  const { getRootProps, open, getInputProps } = useDropzone();

  return (
    <div
      {...getRootProps({ className: "dropzone content-center p-10" })}
    >
      <div className="flex flex-col items-center cursor-pointer">
        <input {...getInputProps()} />
        {mini && <img src="/doc-icon.svg" />}
        <button
          className="btn btn-primary normal-case bg-primary-orange min-w-min cursor-pointer text-white hover:bg-white hover:text-primary-orange shadow border-none mt-8 rounded-2xl pr-7 pl-7 text-xl"
          type="button"
          style={{fontSize: '1.4vw'}}
          onClick={open}
        >
          Upload Syllabus
        </button>
        <p className="mt-4 text-xl">or drop a .pdf here</p>
      </div>
    </div>
  );
}
