import { ITask } from "@/types";
import Button from "../Button";
import { CustomCheckbox } from "../CustomCheckbox";

import "./taskItem.scss";

interface TaskItemProps {
  task: ITask;
  handleEditTask: (task: ITask) => void;
  onToggleComplete: (id: string) => void;
}

export const TaskItem = ({
  task,
  handleEditTask,
  onToggleComplete: onToggleComplete,
}: TaskItemProps) => {
  return (
    <>
      <div className="task__item">
        <CustomCheckbox
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
        />
        <span className={`${"taskName"} ${task.completed ? "completed" : ""}`}>
          {task.name}
        </span>

        <Button
          title="Edit"
          color="#071D55"
          bgColor="#fff"
          className="edit__button"
          onClick={() => handleEditTask(task)}
        />
      </div>
    </>
  );
};
