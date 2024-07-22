import Image from "next/image";
import React from "react";

const OnboardingTable: React.FC = () => {
  const tasks = [
    {
      id: 1,
      task: "Prepare welcome kit",
      assignedTo: "Jim Jones",
      dueDate: "07/22/2020",
      attachments: "welcome.zip",
      completed: true,
    },
    {
      id: 2,
      task: "Prepare workspace, software access",
      assignedTo: "Jim Jones",
      dueDate: "07/25/2020",
      attachments: "",
      completed: false,
    },
    {
      id: 3,
      task: "Meeting with HR manager",
      assignedTo: "Jim Jones",
      dueDate: "07/26/2020",
      attachments: "meeting.zip",
      completed: false,
    },
    {
      id: 4,
      task: "Office tour for employee",
      assignedTo: "Sara Smith",
      dueDate: "07/26/2020",
      attachments: "",
      completed: false,
    },
    {
      id: 5,
      task: "Company vision",
      assignedTo: "Sara Smith",
      dueDate: "07/29/2020",
      attachments: "company.zip",
      completed: false,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-2 w-[44vh] md:w-full">
      <div className="w-[100%] overflow-x-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Onboarding</h2>
          <div className="flex items-center">
            <span className="text-sm text-gray-600 mr-2">1/5 completed</span>
            <svg
              className="w-4 h-4 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-500">
              <th className="pb-2">Task</th>
              <th className="pb-2">Assigned to</th>
              <th className="pb-2">Due Date</th>
              <th className="pb-2">Attachments</th>
              <th className="pb-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id} className="border-t border-gray-200">
                <td className="py-3 flex items-center">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    className="mr-3 form-checkbox h-4 w-4 text-blue-600"
                    readOnly
                  />
                  <span
                    className={
                      task.completed ? "line-through text-gray-500" : ""
                    }
                  >
                    {task.task}
                  </span>
                </td>
                <td className="py-3">
                  <div className="flex items-center">
                    <Image
                      width={100}
                      height={100}
                      src={`https://i.pravatar.cc/24?u=${task.assignedTo}`}
                      alt={task.assignedTo}
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    <span>{task.assignedTo}</span>
                  </div>
                </td>
                <td className="py-3">{task.dueDate}</td>
                <td className="py-3">
                  {task.attachments && (
                    <span className="text-blue-500 hover:underline cursor-pointer">
                      {task.attachments}
                    </span>
                  )}
                </td>
                <td className="py-3">
                  <div className="flex space-x-2">
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 flex justify-end">
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300">
            Add New Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingTable;
