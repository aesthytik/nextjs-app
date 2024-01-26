"use client";

import { useRouter } from "next/navigation";
import React from "react";
const statuses = [
  { id: 1, name: "NEW" },
  { id: 2, name: "OFFER_ACCEPTED" },
  { id: 3, name: "COMPLETED" },
];

const Filter = () => {
  const router = useRouter();
  return (
    <div className="w-full md:w-64 mb-3">
      <label
        htmlFor="HeadlineAct"
        className="block text-sm font-medium text-gray-900"
      >
        Status
      </label>

      <select
        name="status"
        className="mt-1.5 p-4 w-full border-gray-500 text-gray-700 sm:text-sm"
        onChange={(e) => {
          console.log(e.target.value);
          router.push(`/status/${e.target.value}`);
        }}
      >
        {statuses.map((status) => (
          <option key={status.id} value={status.name} className="px-4">
            {status.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
