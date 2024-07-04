"use client"

import { useContext, useEffect, useState } from "react";
import TaskBoard from "@/component/features/Task/TaskBoard";
import TaskColumn from "@/component/features/Task/TaskColumn";
import TaskCard from "@/component/features/Task/TaskCard";
import TaskSchedulingForm from "@/component/features/Task/TaskSchedulingForm";
import Header from "@/component/appui/Header";
import IconBulb from "@/component/appui/Icons/IconBulb";
import Modal from "@/component/appui/Modal";
import ProjectHeader from "@/component/appui/ProjectHeader";
import { creatTask, deletTask, getCompletedTasks, getFailedTasks, getInprograssTask, getTasks, getTasksByID, updateTask } from "@/services/tasks";
import { GlobalContext } from "@/context/Provider";
import PlaceHolder from "@/component/appui/PlaceHolder";

export default function Page() {
  const [modal, setModal] = useState({ openCreate: false, openEdit: false });
  const { contextState: { 
    tasks, 
    task, 
    taskloading, 
    inprogressTaskLoading, 
    inprogressTask,
    failedTask,
    failedTaskLoading,
    completedTask,
    completedTaskLoading,
  }, contextDispatch } = useContext(GlobalContext);

  useEffect(() => {
    ( () => {
       getTasks({ status: "new" })(contextDispatch)
       getInprograssTask({ status: "in-progress" })(contextDispatch)
       getFailedTasks({ status: "failed" })(contextDispatch)
       getCompletedTasks({ status: "completed" })(contextDispatch)
    })();
  }, [])



  const toggleModal = (trigger: any) => {
    setModal({ ...modal, ...trigger });
  }


  const showEdit = async (item: any) => {
    await getTasksByID({ id: item.id })(contextDispatch)
    toggleModal({ openEdit: true });
  }

  const handleDelete = async (item: any) => {
    await deletTask({ id: item.id })(contextDispatch)
    await getTasks({status:"new"})(contextDispatch);
  }

  const handleSubmit = async (formData: any) => {
    try {
      await creatTask(formData)(contextDispatch);
      toggleModal({ openCreate: false })
      await getTasks({status:"new"})(contextDispatch);
    } catch (error) {
      console.log(error);
    }

  }

  const handleUpdateTask = async (formData: any) => {
    try {
      await updateTask(formData)(contextDispatch);
      toggleModal({ openEdit: false })
      await getTasks({status:"new"})(contextDispatch);
    } catch (error) {
      console.log(error);
    }

  }


  return (
    <div className="flex-1 flex flex-col">
      <Header />
      <ProjectHeader title="Task" subTitle="Task dashboard" onClick={() => { toggleModal({ openCreate: true }) }} />
      <TaskBoard >
        <TaskColumn title="New Task" icon={<IconBulb className="size-5 stroke-red-600 border rounded p-1" />} count={tasks?.length }>
          <PlaceHolder loading={taskloading} >
            {tasks?.length > 0 ? tasks.map((item: any, index: any) => (
              <TaskCard key={index}
                onClickEdit={() => { showEdit(item) }}
                onClickDelete={()=>{handleDelete(item)}}
                data={item} />
            )) : <></>}
          </PlaceHolder>
        </TaskColumn>

        <TaskColumn title="In Progress" icon={<IconBulb className="size-5 stroke-blue-600 border rounded p-1" />} count={inprogressTask?.length }>
          <PlaceHolder loading={inprogressTaskLoading} >
            {inprogressTask?.length > 0 ? inprogressTask.map((item: any, index: any) => (
              <TaskCard key={index}
                data={item} />
            )) : <></>}
          </PlaceHolder>
        </TaskColumn>

        <TaskColumn title="Failed" icon={<IconBulb className="size-5 stroke-orange-600 border rounded p-1" />} count={failedTask?.length}>
          <PlaceHolder loading={failedTaskLoading} >
            {failedTask?.length > 0 ? failedTask.map((item: any, index: any) => (
              <TaskCard key={index}
                data={item} />
            )) : <></>}
          </PlaceHolder>
        </TaskColumn>

        <TaskColumn title="Completed" icon={<IconBulb className="size-5 stroke-green-600 border rounded p-1" />} count={completedTask?.length}>
          <PlaceHolder loading={completedTaskLoading} >
            {completedTask?.length > 0 ? completedTask.map((item: any, index: any) => (
              <TaskCard key={index}
                data={item} />
            )) : <></>}
          </PlaceHolder>
        </TaskColumn>
      </TaskBoard>

      <Modal isOpen={modal.openCreate} onClose={() => { toggleModal({ openCreate: false }) }} title="Create task">
        <TaskSchedulingForm onSubmit={handleSubmit} />
      </Modal>

      <Modal isOpen={modal.openEdit} onClose={() => { toggleModal({ openEdit: false }) }} title="Edit Task">
        <TaskSchedulingForm onSubmit={handleUpdateTask} initialData={task} />
      </Modal>
    </div>
  );
}
