"use client";

import { PlusCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../lib/store";
import { add, edit } from "../lib/features/todos/todoSlice";

type Props = {
  data: {
    id: string;
    title: string;
    description: string;
  } | null;
  onCancel: () => void;
};

const TaskForm = ({ data, onCancel }: Props) => {
  const [title, setTitle] = useState(data?.title);
  const [description, setDescription] = useState(data?.description);
  const dispatch = useDispatch<AppDispatch>();
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setTitle(data?.title);
    setDescription(data?.description);
  }, [data]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    event.stopPropagation();

    const task = {
      id: data?.id,
      title,
      description,
    };

    if(data == null){
      dispatch(add())
    }else{
      dispatch(edit(task));
    }

    setTitle("");
    setDescription("");
    onCancel();

  };

  
  const handleCancel = () => {
    setTitle("");
    setDescription("");
    setShowForm(false)
    onCancel();
  };

  if (data == null && !showForm) {
    return (
      <div className=" pt-1 min-w-40 px-2 transform duration-200 ease-out">
        <div
          onClick={() => setShowForm(true)}
          className="flex items-center justify-between  gap-x-2 rounded-md hover:bg-neutral-100 cursor-pointer p-2 text-neutral-600 "
        >
          <span className="text-sm font-medium">Add task</span>
          <PlusCircle className="h-5 w-5" />
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 pt-4 w-80 transform duration-200 ease-out">
      <div className="flex flex-col gap-y-4">
        <div>{data?.id ? "Edit task" : "Create Task"}</div>
        <form onSubmit={handleSubmit} method="post">
          <div className="flex flex-col gap-y-2">
            <div>
              <label htmlFor="">Title:</label>
              <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className="border block px-2 py-1"
              />
            </div>
            <div>
              <label htmlFor="">Description:</label>
              <textarea
                rows={5}
                cols={30}
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className="border block px-2 py-1"
              ></textarea>
            </div>
            <div className="flex items-center gap-x-1">
              
                <button
                  onClick={handleCancel}
                  type="button"
                  className="bg-transparent border-2 w-fit px-2 py-1 text-sm rounded-md "
                >
                  Cancel
                </button>
              
              <button
                type="submit"
                className="bg-black text-white w-fit px-2 py-1 text-sm rounded-md border-2"
              >
                {data?.id ? "Continue" : "Create"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
