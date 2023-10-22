import { PDFLoader } from "langchain/document_loaders/fs/pdf";

/*
 * @param file (either string, Buffer, or Blob)
 * @return string
 */
async function processPdf(file) {
  let loader;

  if (typeof file === "string") {
    loader = new PDFLoader(file, {
      splitPages: false,
    });
  } else if (Buffer.isBuffer(file)) {
    const blob = new Blob([file]);
    loader = new PDFLoader(blob, {
      splitPages: false,
    });
  } else if (isBlob(file)) {
    loader = new PDFLoader(file, {
      splitPages: false,
    });
  } else {
    throw new Error("Unsupported input type");
  }

  const docs = await loader.load();
  const processedString = docs[0].pageContent.replace(/\n/g, " ");

  return processedString;
}

function isBlob(obj) {
  return obj instanceof Blob;
}

async function readBlobAsArrayBuffer(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      resolve(event.target.result);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsArrayBuffer(blob);
  });
}

export { isBlob, readBlobAsArrayBuffer, processPdf };