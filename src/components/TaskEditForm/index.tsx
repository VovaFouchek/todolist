import { ITask } from "@/types";
import Button from "../Button";

import "./taskEditForm.scss";

interface TaskEditorFormProps {
  task: ITask;
  onSave: () => void;
  onDelete: () => void;
  onChange: (task: ITask) => void;
}

export const TaskEditForm = ({
  task,
  onSave,
  onDelete,
  onChange,
}: TaskEditorFormProps) => (
  <div className="task__form">
    <div className="input__inner">
      <p>Task Name</p>
      <input
        value={task.name}
        onChange={(e) => onChange({ ...task, name: e.target.value })}
      />
    </div>

    <div className="buttons__container">
      <Button
        onClick={onDelete}
        bgColor="#AB3535"
        color="#fff"
        title="Delete"
        className="delete__button"
      />
      <Button
        onClick={onSave}
        bgColor="#3556AB"
        color="#fff"
        title="Save"
        className="save__button"
      />
    </div>
  </div>
);
