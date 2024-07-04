import React from 'react';
interface TaskBoardProps {
    children: React.ReactNode;
  }
  
const TaskBoard: React.FC<TaskBoardProps> = ({children}) => {

  return (
        <div className="flex flex-nowrap p-4 gap-4 h-screen">
        {children}
        </div>
  );
};

export default TaskBoard;
