import React from "react";

import "./button.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  bgColor?: string;
  color?: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  bgColor = "fff",
  color = "#071D55",
  onClick,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`custom-button ${className}`}
      style={{ backgroundColor: bgColor, color: color, ...props.style }}
      onClick={onClick}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;
