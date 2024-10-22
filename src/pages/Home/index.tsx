import { useState } from "react";

import { nanoid } from "nanoid";

import { SideBar } from "../../components/Sidebar";
import { TaskEdit } from "../../components/TaskEdit";
import { ITask } from "../../types";

const userName = "Jhon";
const PRO_PLAN_PRICE = 1;

export const Home = () => {
  const [tasks, setTasks] = useState<ITask[]>([
    { id: "1", name: "Training at the Gym", completed: false },
    { id: "2", name: "Play Paddle with friends", completed: true },
    { id: "3", name: "Burger BBQ with family", completed: false },
  ]);
  const [currentTask, setCurrentTask] = useState<ITask | null>(null);

  const handleAddTask = () => {
    const newTask = {
      id: nanoid(),
      name: `Example task ${tasks.length + 1}`,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  const handleToggleComplete = (taskId: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleEditTask = (task: ITask) => {
    setCurrentTask(task);
  };

  const handleSaveTask = () => {
    if (currentTask) {
      setTasks(
        tasks.map((task) => (task.id === currentTask.id ? currentTask : task))
      );

      setCurrentTask(null);
    }
  };

  const handleDeleteTask = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    setCurrentTask(null);
  };

  return (
    <>
      <SideBar
        tasks={tasks}
        userName={userName}
        pricePlan={PRO_PLAN_PRICE}
        handleAddTask={handleAddTask}
        handleToggleComplete={handleToggleComplete}
        handleEditTask={handleEditTask}
      />
      <TaskEdit
        task={currentTask}
        handleSaveTask={handleSaveTask}
        handleDeleteTask={() => currentTask && handleDeleteTask(currentTask.id)}
        handleChangeTask={handleEditTask}
      />
    </>
  );
};
