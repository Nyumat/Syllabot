interface ChatProp {
   content: String;
}

export default function UserChat({ content }: ChatProp) {
   return (
      <div className="ml-auto">
         <div className="flex p-3 bg-primary-orange text-white rounded-xl shadow-md mr-3 mb-1">
            {content}
         </div>
      </div>
   );
}
