import { Task } from "./interfaces/Task.interface";

export const TASKS: Array<Task> = [
  {
    id: 1,
    text: "Doctor",
    day: "May 5th at 2:30pm",
    reminder: true,
  },
  {
    id: 2,
    text: "Meeting",
    day: "May 6th at 1:30pm",
    reminder: true,
  },
  {
    id: 3,
    text: "Food Shopping",
    day: "May 7th at 12:30pm",
    reminder: false
  }
]