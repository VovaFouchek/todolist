import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { ITask } from "@/types";
import { TaskList } from "../TaskList";
import Avatar from "../Avatar";

import "./sidebar.scss";

interface SideBarProps {
  tasks: ITask[];
  userName: string;
  pricePlan: number;
  handleToggleComplete: (taskId: string) => void;
  handleAddTask: () => void;
  handleEditTask: (task: ITask) => void;
}

const fabStyled = {
  position: "absolute",
  bottom: "25px",
  right: "15px",
  backgroundColor: "#3556AB",
  border: "1px solid #123EB1",
};

export const SideBar = ({
  tasks,
  userName,
  pricePlan,
  handleToggleComplete,
  handleAddTask,
  handleEditTask,
}: SideBarProps) => {
  return (
    <div className="sidebar">
      <div className="avatar__inner">
        <Avatar src={null} />
        <div>
          <h3>Hello, {userName || "user"}</h3>
          <p>What are your plans for today?</p>
        </div>
      </div>

      <div className="promo">
        <div className="promo__inner">
          <img src="/src/assets/goblet.png" alt="Goblet" />
          <h4>Go Pro - Upgrade Now</h4>
        </div>

        <div className="price">
          <span>${pricePlan}</span>
        </div>
      </div>

      {tasks.length > 0 && (
        <TaskList
          tasks={tasks}
          onToggleComplete={handleToggleComplete}
          handleEditTask={handleEditTask}
        />
      )}

      <Fab
        color="primary"
        aria-label="add"
        sx={fabStyled}
        onClick={handleAddTask}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};
