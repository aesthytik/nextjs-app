"use client";

import React from "react";
import { FaArrowDown } from "react-icons/fa";

import TaskItem from "./TaskItem";
import { Task } from "@/app/page";

const Tasks = ({ tasks }: { tasks: Task[] }) => {
  const [sort, setSort] = React.useState("asc");

  const sortByAlphabets = () => {
    if (sort === "asc") {
      setSort("desc");
    } else {
      setSort("asc");
    }
  };

  const sortedTasks = tasks.sort((a, b) => {
    if (sort === "asc") {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  return (
    <table className="min-w-full">
      <thead className="border-b border-[1px] border-gray-500">
        <tr>
          <th
            scope="col"
            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
          >
            #
          </th>
          <th
            scope="col"
            className="text-sm font-medium text-gray-900 px-6 py-4 text-left flex gap-2 items-center"
          >
            Titles
            <button onClick={sortByAlphabets}>
              {sort === "asc" ? (
                <FaArrowDown />
              ) : (
                <FaArrowDown className="transform rotate-180" />
              )}
            </button>
          </th>
          <th
            scope="col"
            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
          >
            Description
          </th>
          <th
            scope="col"
            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
          >
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedTasks?.map((task, index) => (
          <TaskItem key={task._id} task={task} serialNumber={index + 1} />
        ))}
      </tbody>
    </table>
  );
};

export default Tasks;
