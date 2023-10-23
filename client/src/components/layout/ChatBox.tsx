import { useEffect, useReducer, useRef, useState } from "react";
import { ChatType } from "../../data/types";
import BotChat from "../chatboxes/BotChat";
import UserChat from "../chatboxes/UserChat";
import Presets from "./Presets";
import QueryBox from "./QueryBox";

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
  const endOfMessages = useRef<HTMLDivElement>(null);

  const addNewChat = (chatData: ChatType) => {
    if (!chatData) {
      return;
    }

    let newChat;
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

   const scrollToBottom = () => {
     if (endOfMessages.current === null) {
       return;
     }
    endOfMessages.current.scrollIntoView({ behavior: "smooth" });
  };
   
   useEffect(() => {
      scrollToBottom();
   }, [state]);

  return (
     <>
      <div
        className="col-span-3 flex flex-col items-center h-55vh mr-4 p-6 border-l border-solid border-primary-orange overflow-y-auto"
        >
        {state.map((chat: any) => {
          return chat;
        })}
         <div ref={endOfMessages} />
        <Presets addChat={addNewChat} />
        <QueryBox addChat={addNewChat} />
      </div>
    </>
  );
}
