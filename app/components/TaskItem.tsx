import { Task } from "@/app/page";
import React from "react";

const TaskItem = ({
  task,
  serialNumber,
}: {
  task: Task;
  serialNumber: number;
}) => {
  return (
    <tr className="bg-white border-b">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {serialNumber}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {task.title}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {task.description}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {task.status}
      </td>
    </tr>
  );
};

export default TaskItem;
