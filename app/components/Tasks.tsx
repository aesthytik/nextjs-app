"use client";

import React from "react";
import TaskItem from "./TaskItem";
import { Task } from "@/app/page";

const Tasks = ({ tasks }: { tasks: Task[] }) => {
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
            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
          >
            Title
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
        {tasks?.map((task, index) => (
          <TaskItem key={task._id} task={task} serialNumber={index + 1} />
        ))}
      </tbody>
    </table>
  );
};

export default Tasks;
