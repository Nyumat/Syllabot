import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes: string[] = ["JPG", "PNG", "GIF"];

function DragDrop() {
  const [file, setFile] = useState<File | null>(null); // Specify the type of 'file'

  const handleChange = (file: File) => {
    setFile(file);
  };

  return <FileUploader handleChange={handleChange} name="file" types={fileTypes} />;
}

export default DragDrop;
