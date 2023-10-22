const data = [
  {
    name: "List All My Assignments",
    query: "Can you tell me all of my assignments for my course {course}?",
    description:
      "This will list all of your assignments for a specific course.",
  },
  {
    name: "List all my assignments due tonight",
    query: "Can you tell me all of my assignments for my course {course}?",
    description:
      "This will list all of your assignments for a specific course.",
  },
  {
    name: "Show the selected course’s grading info",
    query: "Can you tell me all of my assignments for my course {course}?",
    description:
      "This will list all of your assignments for a specific course.",
  },
  {
    name: "Show the selected course’s office hours",
    query: "Can you tell me all of my assignments for my course {course}?",
    description:
      "This will list all of your assignments for a specific course.",
  },
  {
    name: "List All My Assignments",
    query: "Can you tell me all of my assignments for my course {course}?",
    description:
      "This will list all of your assignments for a specific course.",
  },
  {
    name: "List All My Assignments",
    query: "Can you tell me all of my assignments for my course {course}?",
    description:
      "This will list all of your assignments for a specific course.",
  },
];

export default function Presets() {
  return (
    <div className="flex flex-col justify-center items-left text-start">
      <h2 className="text-3xl font-body text-start pl-2 select-none py-8">
        Presets
      </h2>
      <div className="col-span-1">
        {data.map((preset) => (
          <Preset
            name={preset.name}
            query={preset.query}
            description={preset.description}
          />
        ))}
      </div>
    </div>
  );
}

interface PresetProps {
  name: string;
  query: string;
  description: string;
}

function Preset(props: PresetProps) {
  return (
    <div className="rounded-lg bg-white shadow-md hover:rounded-lg hover:bg-orange-600 hover:shadow-md hover:text-white transition duration-200 ease-in-out p-3 my-3">
      <p className="text-black text-start font-roboto text-lg font-medium pl-2">
        {props.name}
      </p>
    </div>
  );
}
