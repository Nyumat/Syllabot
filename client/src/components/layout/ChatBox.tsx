import QueryBox from "./QueryBox";

export default function ChatBox() {
   return (
      <div className="col-span-3 flex flex-col items-center h-70vh mr-4 bg-white border-l border-solid border-primary-orange">
         <div className="ml-auto">
            <div className="flex p-3 bg-primary-orange text-white rounded-xl shadow-md mr-3">
               Hie
            </div>
         </div>

         <div className="mr-auto">
            <div className=" rounded-full bg-white shadow-md h-8 w-8 justify-center self-center ml-auto relative z-10 mr-1nem mb-1nem">
               df
            </div>
            <div className="flex p-3 bg-white text-black rounded-xl shadow-md ml-3">
               I don't know what you are saying
            </div>
         </div>

         <QueryBox />
      </div>
   );
}
