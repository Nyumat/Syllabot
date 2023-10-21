import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes: string[] = ["PDF"];

function DragDrop() {
  const [file, setFile] = useState<File | null>(null); // Specify the type of 'file'

  const handleChange = (file: File) => {
    setFile(file);
  };

  return <FileUploader 
          className="min-h-full w-full bg-slate-600 rounded-xl p-5"
          handleChange={handleChange} 
          name="file" 
          types={fileTypes} 
          multiple={false}
          label="Upload Syllabus or Drop a PDF here"
          />;
}

export default DragDrop;
