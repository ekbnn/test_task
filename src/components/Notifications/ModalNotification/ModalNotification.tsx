import { FC, ReactNode } from "react";
import { ChildrenModal, Notification } from "@/components/Notifications";
import { IcClose } from "@/components/icons";

interface ModalNotificationProps {
  children: ReactNode;
  title: string;
  isOpen: boolean;
  handleClose: () => void;
}

const ModalNotification: FC<ModalNotificationProps> = ({
  children,
  title,
  isOpen,
  handleClose,
}) => {
  const closeAction = () => {
    return (
      <div onClick={() => handleClose()}>
        <IcClose />
      </div>
    );
  };

  return (
    <>
      <ChildrenModal active={isOpen}>
        <Notification title={title} closeAction={closeAction}>
          {children}
        </Notification>
      </ChildrenModal>
    </>
  );
};

export default ModalNotification;
