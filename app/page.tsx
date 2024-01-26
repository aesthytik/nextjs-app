import { gql } from "@apollo/client";
import apolloClient from "@/utils/apolloClient";
import Tasks from "@/app/components/Tasks";
import Filter from "@/app/components/Filter";

export interface Task {
  _id: string;
  status: string;
  description: string;
  title: string;
  distance: number;
  is_active: boolean;
  type: string;
}

const getTasks = gql`
  query getTasks {
    taskList {
      _id
      status
      description
      title
      distance
      is_active
      type
    }
  }
`;

async function getTasksFromServer() {
  const data = await apolloClient.query({
    query: getTasks,
  });

  return data.data.taskList;
}

export default async function Home() {
  const tasks: Task[] = await getTasksFromServer();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 m:p-24">
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden w-full">
              <Filter />
              <Tasks tasks={tasks} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
