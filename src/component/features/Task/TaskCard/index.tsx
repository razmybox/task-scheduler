import React from 'react';
import IconDate from '@/component/appui/Icons/IconDate';
import IconEdit from '@/component/appui/Icons/IconEdit';
import IconDelete from '@/component/appui/Icons/IconDelete';
import { formatDateTime, taskTimeDue } from '@/utils';
import Ping from '@/component/appui/Ping';
import moment from 'moment';
interface TaskCardnProps {
  data?: any;
  onClickEdit?: () => void;
  onClickDelete?: () => void;
  onClickTreat?: () => void;
}

const TaskCard: React.FC<TaskCardnProps> = ({ data, onClickEdit, onClickDelete, onClickTreat }) => {
  return (
    <div className="bg-white rounded shadow p-4 mb-4 relative">

      <div className="flex justify-between items-center">
        <h3 className="font-bold text-md">{data?.title}</h3>
        <small className="px-1 border text-xs rounded-lg whitespace-nowrap">{data?.type}</small>
      </div>
      <p className="text-sm text-gray-600 py-1">{data?.description}</p>

      <div className="text-gray-600 flex items-center border rounded px-1 whitespace-nowrap my-3 py-1">
        <IconDate className="size-4 stroke-grey-600" /> <span className="text-xs ms-1">  Due: </span>
        <span className="text-xs ms-1">{formatDateTime(data?.startTime)}</span>
      </div>

      {data?.status !=="new" && <div className="text-gray-600 flex items-center border rounded px-1 whitespace-nowrap my-3 py-1">
        <IconDate className="size-4 stroke-grey-600" /> <span className="text-xs ms-1">  Executed: </span>
        <span className="text-xs ms-1">{formatDateTime(data?.updated_at)}</span>
      </div>}

      <div className="flex justify-between">
        <button className=" px-1 text-sm rounded bg-blue-200">
          batch: <span className="bg-blue-600 text-white rounded text-sm px-1">{data.batch}</span>
        </button>
        <div>

          {onClickEdit &&
            <button onClick={() => onClickEdit()} className=" border border-gray-400 px-1 py-1 rounded mx-1 hover:bg-gray-100">
              <IconEdit className="size-3 stroke-gray-600" />
            </button>}

          {onClickDelete &&
            <button onClick={() => onClickDelete()} className=" border border-red-400 px-1 py-1 rounded mx-1 hover:bg-red-100">
              <IconDelete className="size-3 stroke-red-600" />
            </button>}

          {taskTimeDue(data?.startTime) && onClickTreat &&
            <button onClick={() => onClickTreat()} className=" border border-blue-200 px-1 text-sm rounded mx-1 hover:bg-blue-200">
              Treat now
            </button>}

          {taskTimeDue(data?.startTime) && onClickTreat && <Ping />}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
