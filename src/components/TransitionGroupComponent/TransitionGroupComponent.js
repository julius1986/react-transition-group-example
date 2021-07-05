import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import usersData from "./usersData";
import "./TransitionGroupComponents.css";

/*
//NOTE: Если нам нужно использовать CSSTransition для массива,
то мы должны обернуть массив в TransitionGroup, а каждый элемент
обернуть в CSSTransition. TransitionGroup превращается в div.
*/

export default function TransitionGroupComponent() {
  const [users, setUsers] = useState(usersData);

  const clickHandler = (id) => {
    const res = users.filter((user) => user.id !== id);
    setUsers(res);
  };

  return (
    <div className="users-list">
      <TransitionGroup classNames="list">
        {users.map((user) => (
          <CSSTransition key={user.id} timeout={500} classNames="item">
            <div onClick={clickHandler.bind(null, user.id)} key={user.id}>
              {user.name}
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}
