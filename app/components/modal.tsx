import React from "react";

type Props = {};

const Modal = (props: Props) => {
  return (
    <div className="inset-0 fixed bg-black/25 flex items-center justify-center px-4">
      <div className="bg-white rounded-md drop-shadow-lg sm:max-w-md w-full ">
        <div className="p-4 border-b text-sm font-medium">
            Add Task
        </div>
        <div className="flex flex-col gap-y-2 my-4 ">
            <input type="text" placeholder="title"  className="w-full border-2 py-1 px-2 rounded" />
            <input type="text" placeholder="description" className="w-full border-2 py-1 px-2 rounded" />
            <button 
            // onClick={() => setShowModal(!showModal)}
            className="rounded-md p-2 drop-shadow text-xs bg-black hover:bg-black/80 text-white inline-flex border-2">
                Create
            </button>
        </div>
        <div>
            
        </div>
      </div>
    </div>
  );
};

export default Modal;
