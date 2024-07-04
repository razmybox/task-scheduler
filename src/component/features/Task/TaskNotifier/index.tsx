'use client'
import usePolling from '@/hooks/usePolling';
import { showNotification } from '@/utils';
import React, { useEffect } from 'react';

const TaskNotifier: React.FC = () => {
  const {data} = usePolling( 10000);
  
  useEffect(() => {
    if (data && data.length > 0) {
      showNotification( {
        title:'New Task Due for Action',
        options: {url:"/home/demo", body: `Task: ${data[0].title}`,} 
      });
    }
  }, [data]);

  return null;
};

export default TaskNotifier;
