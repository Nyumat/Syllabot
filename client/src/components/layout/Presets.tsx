import axios from "axios";
import { ChatType } from "../../data/types";

const numPresets = 4;

const data = [
   {
      name: "Can you tell me the office hours for my class?",
   },
   {
      name: "Can you tell me the grading info?",
   },
   {
      name: "Can you explain the course briefly?",
   },
   {
      name: "Can you tell me any important information?",
   },
];

interface QueryBoxProps {
   addChat: (chatData: ChatType) => void;
}

type Response = {
   data: {
      message: String;
   };
};

export default function Presets({ addChat }: QueryBoxProps) {
   const sections = [];
   for (let i = 0; i < numPresets; i += 2) {
      const section = data.slice(i, i + 2);
      sections.push(section);
   }

   return (
      <div className="mt-6 justify-center self-center w-1/2 absolute bottom-20">
         {sections.map((section, sectionIndex) => (
            <div
               key={sectionIndex}
               className="flex flex-row justify-start mb-4 w-full"
            >
               {" "}
               {/* Added mb-4 for spacing between rows */}
               {section.map((preset, docIndex) => (
                  <div key={docIndex} className="mr-4 w-4/5">
                     <Preset name={preset.name} addChat={addChat} />
                  </div>
               ))}
            </div>
         ))}
      </div>
   );
}

type PresetProps = {
   name: String;
   addChat: (chatData: ChatType) => void;
};

function Preset({ name, addChat }: PresetProps) {
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

   const handleClick = (name: String) => {
      const chatData: ChatType = {
         content: name,
         isUser: true,
      };
      addChat(chatData);
      sendQuery(name);
   };
   return (
      <button
         className="rounded-lg bg-white cursor-pointer w-full shadow-md font-normal text-start pl-6 hover:bg-primary-orange hover:text-white hover:font-semibold active:bg-white active:text-black transition duration-200 ease-in-out p-3"
         onClick={() => {
            handleClick(name);
         }}
      >
         {name}
      </button>
   );
}
