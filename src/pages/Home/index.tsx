import { SideBar } from "../../components/Sidebar";
import { TaskEdit } from "../../components/TaskEdit";
import { ITask } from "../../types";
import { useTaskManager } from "../../hooks/useTaskManager";

const userName = "Jhon";
const PRO_PLAN_PRICE = 1;

const initialTasks: ITask[] = [
  { id: "1", name: "Training at the Gym", completed: false },
  { id: "2", name: "Play Paddle with friends", completed: true },
  { id: "3", name: "Burger BBQ with family", completed: false },
];

const Home = () => {
  const {
    tasks,
    currentTask,
    handleAddTask,
    handleEditTask,
    handleToggleComplete,
    handleSaveTask,
    handleDeleteTask,
  } = useTaskManager(initialTasks);

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

export default Home;
