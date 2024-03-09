import { FC } from "react";
import "./friends-list.scss";
import { friendsList } from "./friends-list.constant";

export const FriendsList: FC = () => {
  return (
    <div className="friends-list">
      <div className="friends-list-header">
        <h3>Username</h3>
        <h3>Status</h3>
        <h3>Last Online</h3>
        <h3>Games Played</h3>
        <button>Requests</button>
        <button>+</button>
      </div>
      <div className="friends-list-container">
        {friendsList.map(({ username, status, lastOn, gamesPlayed }, i) => (
          <div key={username + i} className="friends-list-item">
            <p>{username}</p>
            <p>{status ? "Online" : "Offline"}</p>
            <p>{new Date(lastOn).toLocaleDateString()}</p>
            <p>{gamesPlayed}</p>
            <button>X</button>
          </div>
        ))}
      </div>
    </div>
  );
};
