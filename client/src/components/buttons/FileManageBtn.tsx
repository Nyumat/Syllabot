import { FaTrashAlt } from "react-icons/fa";

type FileButtonType = {
  filename: string;
  onClick?: (id: string) => any;
};

export default function FileManageBtn({ filename }: FileButtonType) {
  return (
    <>
      <div className="pl-6 pr-6 pt-2 pb-2 font-medium ml-8 w-36pc bg-white shadow-md text-lg rounded-xl select-none mt-3">
        {filename}
      </div>
      <button className="pl-5 pr-5 pt-2 pb-2 bg-primary-black shadow-md rounded-xl text-white ml-3 mt-3 hover:bg-primary-grey hover:text-black transition ease-linear active:bg-primary-black active:text-white">
        <FaTrashAlt />
      </button>
    </>
  );
}
