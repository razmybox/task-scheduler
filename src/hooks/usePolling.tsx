// src/hooks/usePolling.ts
import { getNewTasks } from '@/services/tasks';
import moment from 'moment';
import { useEffect, useState } from 'react';

const usePolling = ( interval: number) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
     
       let data =  await getNewTasks({lastCheck:moment().toISOString(true)})
       setData(data);
    };
    fetchData();
    const id = setInterval(fetchData, interval);

    return () => clearInterval(id);
  }, [ interval]);

  return { data, error };
};

export default usePolling;
