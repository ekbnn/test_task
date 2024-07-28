import { IcClaim } from "@/components/icons";
import classes from "./Notification.module.scss";
import { FC, ReactNode } from "react";

interface NotificationProps {
  children: ReactNode;
  title: string;
  closeAction?: () => JSX.Element;
}

const Notification: FC<NotificationProps> = ({
  children,
  title,
  closeAction = () => {
    return null;
  },
}) => {
  return (
    <div className={classes.title}>
      <div className={classes.info}>
        <div>
          <IcClaim />
        </div>
        <div className={classes.text}>
          <span className={classes.text__head}>{title}</span>
          <span className={classes.text__message}>{children}</span>
        </div>
        <div className={classes.info__close}>{closeAction()}</div>
      </div>
    </div>
  );
};

export default Notification;
