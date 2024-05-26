import {
  Edit,
  Trash2,
} from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../lib/store";
import { remove } from "../lib/features/todos/todoSlice";

type Props = {
  data: {
    id: string;
    title: string;
    description: string;
  };
  onSelect: (data: any) => void;
};

const Task = ({ data, onSelect }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="relative group min-h-[120px]  p-2 rounded-xl bg-amber-100 flex flex-col gap-y-1">
      <div className="h-6 flex items-center justify-between">
        <h2 className="text-xl">{data.title}</h2>
        <button
          onClick={() => onSelect(data)}
          className="transform duration-200 ease-out group-hover:flex items-center justify-center rounded-full hidden"
        >
          <Edit className="text-gray-500 h-4 w-4 mr-1" />
        </button>
      </div>
      <div className="pb-2">
        <p className="text-xs text-gray-500  break-words ">
          {data.description}
        </p>
      </div>
      <div className="ml-auto absolute bottom-2 right-2 ">
        <button
          onClick={() => dispatch(remove(data))}
          className="bg-rose-500 transform duration-200 ease-out  hover:bg-rose-600  h-6 w-6 rounded hidden  group-hover:flex items-center justify-center p-1"
        >
          <Trash2 className="text-white " />
        </button>
      </div>
    </div>
  );
};

export default Task;
