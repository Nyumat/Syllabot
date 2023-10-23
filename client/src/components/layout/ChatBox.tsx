import QueryBox from "./QueryBox";
import BotChat from "../chatboxes/BotChat";
import UserChat from "../chatboxes/UserChat";
import Presets from "./Presets";
import { useState, useReducer } from "react";
import { ChatType } from "../../data/types";

const initialState: any = [];

function reducer(state: any, action: any) {
   switch (action.type) {
      case "UPDATE":
         return [...state, action.value];
      default:
         return state;
   }
}

export default function ChatBox() {
   const [state, dispatch] = useReducer(reducer, initialState);
   const [idx, setIdx] = useState(1);

   const addNewChat = (chatData: ChatType) => {
      if (!chatData) {
         return;
      }

      var newChat;
      if (chatData.isUser) {
         newChat = <UserChat content={chatData.content} />;
      } else {
         newChat = <BotChat content={chatData.content} />;
      }

      setIdx(idx + 1);
      dispatch({
         type: "UPDATE",
         value: newChat,
      });

      console.log("useReducer === ", state);
   };

   return (
      <div className="col-span-3 flex flex-col items-center h-55vh mr-4 p-6 border-l border-solid border-primary-orange overflow-y-auto">
         {state.map((chat: any) => {
            return chat;
         })}
         <Presets addChat={addNewChat} />
         <QueryBox addChat={addNewChat} />
      </div>
   );
}
