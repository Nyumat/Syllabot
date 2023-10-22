import { BiSolidSend } from "react-icons/bi";
import Presets from "./Presets";

export default function QueryBox() {
   return (
      <>
         <Presets />
         <div className="flex flex-row px-6 w-2/3 my-3 z-10 absolute bottom-4">
            <div className="flex flex-fow justify-center items-center p-2 shadow-xl rounded-2xl w-full bg-white">
               <input
                  type="text"
                  className="textarea w-full border-0 text-base focus:outline-none z-10"
                  placeholder="Ask your question!"
               ></input>
               <button className="btn text-lg bg-primary-orange text-white hover:bg-primary-grey hover:text-primary-orange border-none shadow-md active:bg-primary-orange active:text-white px-8">
                  <BiSolidSend />
               </button>
            </div>
         </div>
      </>
   );
}
