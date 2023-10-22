import { useState } from "react";
import { PresetType } from "../../data/types";

const data = [
   {
      name: "Can you tell me the office hours?",
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

export default function Presets() {
   const [selected, setSelected] = useState<String>("");

   const handleSelect = (preset: PresetType) => {
      console.log("preset name is === ", preset.name);
      setSelected(preset.name);
   };

   return (
      <div className="flex flex-row flex-wrap w-1/3">
         {data.map((preset) => (
            <Preset
               name={preset.name}
               selected={selected}
               onClick={() => handleSelect(preset)}
            />
         ))}
      </div>
   );
}

type PresetProps = {
   name: String;
   selected: String;
   onClick: (name: String) => any;
};

function Preset({ name, selected, onClick }: PresetProps) {
   const baseCSS =
      "rounded-lg bg-white cursor-pointer w-full shadow-md font-normal text-start pl-6 hover:bg-primary-orange hover:text-white hover:font-semibold active:bg-white active:text-black transition duration-200 ease-in-out p-3 my-2";
   const selectedCSS =
      "rounded-lg bg-primary-orange text-white cursor-pointer w-full shadow-md font-normal text-start font-semibold pl-6 hover:bg-primary-orange hover:text-white hover:font-semibold transition duration-200 ease-in-out p-3 my-2";
   return (
      <button
         className={name == selected ? selectedCSS : baseCSS}
         onClick={() => onClick(name)}
      >
         {name}
      </button>
   );
}
