"use client"

import { useContext, useEffect, useState } from "react";
import TaskBoard from "@/component/features/Task/TaskBoard";
import TaskColumn from "@/component/features/Task/TaskColumn";
import TaskCard from "@/component/features/Task/TaskCard";
import Header from "@/component/appui/Header";
import IconBulb from "@/component/appui/Icons/IconBulb";
import Modal from "@/component/appui/Modal";
import ProjectHeader from "@/component/appui/ProjectHeader";
import { getCompletedTasks,  getTasks, getTasksByID, treatTask } from "@/services/tasks";
import { GlobalContext } from "@/context/Provider";
import PlaceHolder from "@/component/appui/PlaceHolder";
import TaskTreatForm from "@/component/features/Task/TaskTreatForm";

export default function Page() {
  const [modal, setModal] = useState({ openCreate: false, openEdit: false });
  const [pageState, setPageState] = useState({treatTask: false});
  const { contextState: { 
    tasks, 
    task, 
    taskloading, 
    completedTask,
    completedTaskLoading,
  }, contextDispatch } = useContext(GlobalContext);

  useEffect(() => {
    ( () => {
       getTasks({ status: "new" })(contextDispatch)
       getCompletedTasks({ status: "completed" })(contextDispatch)
    })();
  }, [pageState.treatTask])


  const toggleModal = (trigger: any) => {
    setModal({ ...modal, ...trigger });
  }

  const showEdit = async (item: any) => {
    await getTasksByID({ id: item.id })(contextDispatch)
    toggleModal({ openEdit: true });
  }


  const handleUpdateTask = async (formData: any) => {
    try {
      await treatTask(formData)(contextDispatch);
      toggleModal({ openEdit: false })
      setPageState({...pageState, treatTask:!pageState.treatTask})
    } catch (error) {
      console.log(error);
    }

  }


  return (
    <div className="flex-1 flex flex-col">
      <Header />
      <ProjectHeader title="Treat Task" subTitle="Task to execute" />
      <TaskBoard >
        
        <TaskColumn title="New Tasks" icon={<IconBulb className="size-5 stroke-red-600 border rounded p-1" />} count={tasks?.length}>
          <PlaceHolder loading={taskloading} >
            {tasks?.length > 0 ? tasks.map((item: any, index: any) => (
              <TaskCard key={index} onClickTreat={() => { showEdit(item) }} data={item} />
            )) : <></>}
          </PlaceHolder>
        </TaskColumn>


        <TaskColumn title="Completed" icon={<IconBulb className="size-5 stroke-green-600 border rounded p-1" />} count={completedTask?.length}>
          <PlaceHolder loading={completedTaskLoading} >
            {completedTask?.length > 0 ? completedTask.map((item: any, index: any) => (
              <TaskCard key={index} data={item} />
            )) : <></>}
          </PlaceHolder>
        </TaskColumn>
      </TaskBoard>

      <Modal isOpen={modal.openEdit} onClose={() => { toggleModal({ openEdit: false }) }} title="Treat Task">
        <TaskTreatForm onSubmit={handleUpdateTask} initialData={task} />
      </Modal>
    </div>
  );
}
