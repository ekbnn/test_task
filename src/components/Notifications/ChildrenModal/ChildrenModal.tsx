import { FC, ReactNode } from "react";
import classNames from "classnames";
import classes from "./ChildrenModal.module.scss";

interface ChildrenModalProps {
  active: boolean;
  children: ReactNode;
}

const ChildrenModal: FC<ChildrenModalProps> = ({ active, children }) => {
  return (
    <div className={classNames(classes.modal, active && classes.modal__active)}>
      <div
        className={classNames(
          classes.modal__content,
          active && classes.modal__content__active
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default ChildrenModal;
