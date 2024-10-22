import { ITask } from "@/types";
import { TaskEditForm } from "../TaskEditForm";

import "./editTask.scss";

interface TaskEditProps {
  task: ITask | null;
  handleSaveTask: () => void;
  handleDeleteTask: () => void;
  handleChangeTask: (task: ITask) => void;
}

export const TaskEdit = ({
  task,
  handleSaveTask,
  handleDeleteTask,
  handleChangeTask,
}: TaskEditProps) => {
  return (
    <>
      <div className="edit__task">
        <div className="edit__task-top">
          <h2>Edit Task</h2>
        </div>

        {task && (
          <TaskEditForm
            task={task}
            onDelete={handleDeleteTask}
            onSave={handleSaveTask}
            onChange={handleChangeTask}
          />
        )}
      </div>
    </>
  );
};
