interface ChatProp {
   content: String;
}

export default function BotChat({ content }: ChatProp) {
   return (
      <div className="mr-auto">
         <div className=" rounded-full bg-white text-primary-orange text-center align-middle font-semibold shadow-md h-6 w-6 justify-center self-center ml-auto relative z-10 mr-1nem mb-1nem select-none">
            B
         </div>
         <div className="flex p-3 bg-white text-black rounded-xl shadow-md ml-3 mb-1">
            {content}
         </div>
      </div>
   );
}
