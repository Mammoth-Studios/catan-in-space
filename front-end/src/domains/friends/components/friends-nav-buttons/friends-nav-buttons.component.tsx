import { FC } from "react";
import "./friends-nav-buttons.scss";

export const FriendsNavButtons: FC = () => {
  return (
    <div className="friends-nav-buttons">
      <button className="friends-nav-buttons-left">Requests</button>
      <button className="friends-nav-buttons-right">+</button>
    </div>
  );
};
