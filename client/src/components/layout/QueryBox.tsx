import { useRef } from "react";
import { BiSolidSend } from "react-icons/bi";
import axios from "axios";
import { ChatType } from "../../data/types";

interface QueryBoxProps {
   addChat: (chatData: ChatType) => void;
}

type Response = {
   data: {
      message: String;
   };
};

export default function QueryBox({ addChat }: QueryBoxProps) {
   const queryRef = useRef<HTMLInputElement | null>(null);

   const sendQuery = (query: String) => {
      const reqBody = { query: query };
      axios
         .request({
            method: "get",
            url: "http://localhost:8080/api/users/test", // Using test API right now
            params: reqBody,
         })
         .then((response: Response) => {
            console.log(response.data.message);
            if (response.data.message.length != 0) {
               const chatData: ChatType = {
                  content: response.data.message,
                  isUser: false,
               };

               addChat(chatData);
            }
         })
         .catch((err: ErrorEvent) => {
            console.log(err);
            const chatData: ChatType = {
               content:
                  "Sorry, there was an issue. I don't know what you are saying.",
               isUser: false,
            };

            return chatData;
         });
   };

   const handleSubmit = () => {
      if (queryRef.current) {
         if (queryRef.current.value == "") {
            return;
         }
         const chatData: ChatType = {
            content: queryRef.current.value,
            isUser: true,
         };
         addChat(chatData);
         sendQuery(queryRef.current.value);
         queryRef.current.value = "";
      }
   };

   const handleKeyPress = (event: any) => {
      if (event.key === "Enter") {
         handleSubmit();
      }
   };

   return (
      <div className="w-full flex flex-col mt-auto">
         <div className="flex flex-row px-6 w-2/3 my-3 z-10 absolute bottom-4">
            <div className="flex flex-fow justify-center items-center p-2 shadow-xl rounded-2xl w-full bg-white">
               <input
                  ref={queryRef}
                  type="text"
                  className="textarea w-full border-0 text-base focus:outline-none z-10"
                  placeholder="Ask your question!"
                  onKeyDown={handleKeyPress}
               ></input>
               <button
                  className="btn text-lg bg-primary-orange text-white hover:bg-primary-grey hover:text-primary-orange border-none shadow-md active:bg-primary-orange active:text-white px-8"
                  onClick={handleSubmit}
               >
                  <BiSolidSend />
               </button>
            </div>
         </div>
      </div>
   );
}
