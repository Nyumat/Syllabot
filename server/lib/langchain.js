import { PDFLoader } from "langchain/document_loaders/fs/pdf";

/*
 * @param file (either string or blob)
 * @return string
 */
export default async function processPdf(file) {
  const loader = new PDFLoader(file, {
    splitPages: false,
  });

  const docs = await loader.load();
  const processedString = docs[0].pageContent.replace(/\n/g, " ");

  return processedString;
}
