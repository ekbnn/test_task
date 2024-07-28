import { FC, ReactNode } from "react";
import classes from "./Button.module.scss";

interface ButtonTypeProps {
  children?: ReactNode;
  onClick?: () => void;
}

const Button: FC<ButtonTypeProps> = ({ children, onClick }) => {
  return (
    <button className={classes.btn} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
