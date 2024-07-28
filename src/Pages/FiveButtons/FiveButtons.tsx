import Button from "@/components/Button/Button";
import { ModalNotification, Notification } from "@/components/Notifications";
import { IModal } from "@/types";
import { useState } from "react";
import classes from "./FiveButtons.module.scss";

const FiveButtons = () => {
  const [isOpen, setIsOpen] = useState<IModal>({ state: [], count: 0 });

  const handleOpen = (type: number) => {
    if (isOpen.state.length === 0) {
      setIsOpen((prevState) => {
        return {
          state: [...prevState.state, { id: 1, isopen: true, type: type }],
          count: prevState.count + 1,
        };
      });
    } else {
      setIsOpen((prevState) => {
        return {
          state: [
            ...prevState.state,
            {
              id: prevState.state[prevState.state.length - 1].id + 1,
              isopen: true,
              type: type,
            },
          ],
          count: prevState.count,
        };
      });
    }
  };

  const handleClose = (id: number) => {
    if (isOpen.state.find((el) => el.id === id)) {
      setIsOpen((prevState) => {
        return {
          state: prevState.state.filter((el) => el.id !== id),
          count: prevState.count,
        };
      });
    }
  };

  return (
    <div className={classes.wrapper}>
      <Notification title={"Тестовое задание "}>
        Реализовать страницу, на которой 5 кнопок. Каждая из кнопок вызывает
        свое модальное окно соответственно:
        <br />
        <br />
        1. Модальное окно с какой-нибудь картинкой
        <br />
        2. Модальное окно с текстом
        <br />
        3. Модальное окно с текстом и двумя кнопками (ОК пишет в лог "ОК" и
        Отмена закрывает модальное окно)
        <br />
        4. Модальное окно с текстом, отражающем количество нажатий на любую из 5
        кнопок. <br />
        5. Модальное окно с текстом, в котором отражается количество открытых
        вложенностей и кнопкой, открывающей модальное окно типа 5. Т.е.
        Изначально окно с 1, по кнопке открывается еще одно модальное окно, в
        котором уже 2.
        <br />
        <br />
        Все модальные окна содержат зону заголовка и "крестик" закрытия окна.
      </Notification>

      <div className={classes.btn}>
        <Button onClick={() => handleOpen(1)}>1</Button>
        <Button onClick={() => handleOpen(2)}>2</Button>
        <Button onClick={() => handleOpen(3)}>3</Button>
        <Button onClick={() => handleOpen(4)}>4</Button>
        <Button onClick={() => handleOpen(5)}>5</Button>
      </div>

      {isOpen.state.map((el) => (
        <ModalNotification
          key={el.id}
          title={`Кнопка №${el.type}`}
          isOpen={el.isopen}
          handleClose={() => handleClose(el.id)}
        >
          {el.type === 1 && <img src="./gz.jpg" alt="error"></img>}
          {el.type === 2 && "Модальное окно с текстом"}
          {el.type === 3 && (
            <div>
              <p>Модальное окно с текстом</p>
              <div className={classes.btn_in}>
                <Button onClick={() => console.log("Ok")}>Ок</Button>
                <Button onClick={() => handleClose(1)}>Отмена</Button>
              </div>
            </div>
          )}
          {el.type === 4 &&
            `Количество нажатий на любую из пяти кнопок: ${isOpen.count}`}
          {el.type === 5 && (
            <div>
              <p>Количество открытых модальных окон: {el.id}</p>
              <div className={classes.btn_in}>
                <Button onClick={() => handleOpen(el.type)}>Оk</Button>
              </div>
            </div>
          )}
        </ModalNotification>
      ))}
    </div>
  );
};

export default FiveButtons;
