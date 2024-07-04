import React from 'react';
interface ProjectHeaderProps {
  onClick?: () => void;
  title: string;
  subTitle: string;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ onClick, title, subTitle }) => {
  return (
    <div>
      <div className="px-4 py-2 bg-gray-100 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-sm">{subTitle}</p>
        </div>
        {onClick && <div className="flex items-center">
          <button onClick={onClick} className="bg-blue-500 text-white px-4 py-2 rounded">Create Task</button>
        </div>}
      </div>
      <div className="flex justify-end bg-gray-200 p-3">
        <button className=" px-1 mx-2 text-sm rounded text-blue-600 bg-blue-200">
           Board
        </button>
        <button className=" px-1 mx-2 text-sm rounded bg-gray-200 ">
           Table
        </button>
      </div>
    </div>
  );
};

export default ProjectHeader;
