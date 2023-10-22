import { useState } from "react";
import { PresetType } from "../../data/types";

const numPresets = 4;

const data = [
   {
      name: "Show Office Hours",
      promptForGPT: "Can you tell me the office hours for my class?",
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
   {
      name: "Can you tell me any important information?",
   },
   {
      name: "Can you tell me any important information?",
   },
   {
      name: "Can you tell me any important information?",
   },
];

export default function Presets() {
   const sections = [];
   for (let i = 0; i < numPresets; i += 2) {
      const section = data.slice(i, i + 2);
      sections.push(section);
   }

   return (
      <div className="mt-6 justify-center self-center w-4/5">
         {sections.map((section, sectionIndex) => (
            <div
               key={sectionIndex}
               className="flex flex-row justify-start mb-4 w-full"
            >
               {" "}
               {/* Added mb-4 for spacing between rows */}
               {section.map((preset, docIndex) => (
                  <div key={docIndex} className="mr-4 w-4/5">
                     <Preset name={preset.name} />
                  </div>
               ))}
            </div>
         ))}
      </div>
   );
}

type PresetProps = {
   name: String;
};

function Preset({ name }: PresetProps) {
   return (
      <button className="rounded-lg bg-white cursor-pointer w-full shadow-md font-normal text-start pl-6 hover:bg-primary-orange hover:text-white hover:font-semibold active:bg-white active:text-black transition duration-200 ease-in-out p-3">
         {name}
      </button>
   );
}
