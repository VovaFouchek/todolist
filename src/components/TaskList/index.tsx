import { ITask } from "../../types";
import { TaskItem } from "../TaskItem";
import "./taskList.scss";

interface TaskListProps {
  tasks: ITask[];
  onToggleComplete: (id: string) => void;
  handleEditTask: (task: ITask) => void;
}

export const TaskList = ({
  tasks,
  onToggleComplete,
  handleEditTask,
}: TaskListProps) => {
  if (tasks.length === 0) {
    return <p className="list__empty">No tasks</p>;
  }

  return (
    <div className="list__inner">
      {tasks.map((task) => (
        <TaskItem
          task={task}
          key={task.id}
          handleEditTask={handleEditTask}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  );
};
