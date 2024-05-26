export const generateUniqueId = () => {
  const timestamp = Date.now().toString(36); // Convert current timestamp to base-36
  const randomNum = Math.random().toString(36).substr(2, 9); // Generate a random string
  return `${timestamp}-${randomNum}`;
};

export const getAllTasks = () => {
  const tasksFromStorage = localStorage.getItem("tasks");
  const tasks =  tasksFromStorage ? JSON.parse(tasksFromStorage) : [];
  return tasks.reverse();
};

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
