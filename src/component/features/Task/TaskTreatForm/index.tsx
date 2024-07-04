import { taskStatus } from '@/constants/data';
import { GlobalContext } from '@/context/Provider';
import React, { useContext, useState } from 'react';

interface TaskTreatFormProps {
  onSubmit: (data: TaskData) => void;
  initialData?: { [key: string]: string|any };
}

interface TaskData {
  id?: string;
  title: string;
  description: string;
  status: 'new' | 'in-progress' | 'completed';
}

const TaskTreatForm: React.FC<TaskTreatFormProps>= ({onSubmit, initialData}) => {
  const { contextState: { loading } } = useContext(GlobalContext);
  const [formData, setFormData] = useState<TaskData>({
    id: initialData?.id ||'',
    title: initialData?.title ||'',
    description: initialData?.description ||'',
    status: initialData?.status || 'new',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="mb-4">
        <label className="block text-gray-700  mb-2" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
          disabled
        />
      </div>

      <div className="grid grid-cols-1 gap-4 mb-4">
        
        <div>
        <label className="block text-gray-700  mb-2" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
          disabled
        />
        </div>
      </div>
      <div className="text-right">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex">
          Treat task
        </button>
      </div>
    </form>
  );
};

export default TaskTreatForm;
