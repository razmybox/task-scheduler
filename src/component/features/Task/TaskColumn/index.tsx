import React from 'react';

interface TaskColumnProps {
  title: string;
  count: string | number;
  children: React.ReactNode;
  icon: React.ReactNode;
}

const TaskColumn: React.FC<TaskColumnProps> = ({ title, children, icon, count }) => {
  return (
    <div className="border border-gray-300 rounded p-4 flex-1 min-w-80">
      <div className="flex content-center items-center mb-4">
        {icon}
        <h5 className="font-bold text-sm"> {title} </h5>
        <small className="px-2 text-xs bg-white rounded-lg ms-3">{count}</small>
      </div>
      <div className=" overflow-auto max-h-[500px]">
        {children}
      </div>
    </div>
  );
};

export default TaskColumn;
