import { useState } from "react";
import { nanoid } from "nanoid";

import { ITask } from "@/types";

export const useTaskManager = (initialTasks: ITask[]) => {
  const [tasks, setTasks] = useState<ITask[]>(initialTasks);
  const [currentTask, setCurrentTask] = useState<ITask | null>(null);

  const handleAddTask = () => {
    const newTask: ITask = {
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

  return {
    tasks,
    currentTask,
    handleAddTask,
    handleToggleComplete,
    handleEditTask,
    handleSaveTask,
    handleDeleteTask,
  };
};
