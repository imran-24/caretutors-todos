"use client";

import { useState } from "react";
import TaskForm from "./components/task-form";
import TaskList from "./components/task-list";
import { useSelector } from "react-redux";
import { RootState } from "./lib/store";

export type Params = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  },
}

export default function Home({searchParams}: Params) {
  const tasks = useSelector((state: RootState) => state.todos.todos);
  const [edit, setEdit] = useState(null);

  console.log(searchParams)
  return (
    <div className="flex h-full max-w-5xl w-full mx-auto">
      <TaskForm onCancel={() => setEdit(null)} data={edit} />
      <div className="h-full border-l w-1" />
      <TaskList searchParams={searchParams} data={tasks} onClick={(data: any) => setEdit(data)} />
    </div>
  );
}
