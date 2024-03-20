import { FC } from "react";
import "./friends-list.scss";
import { friendsList } from "./friends-list.constant";
import { FriendListItem } from "./friend-list-item.component";
import { FriendListHeader } from "./friend-list-header.component";
import { FriendsNavButtons } from "../friends-nav-buttons";

export const FriendsList: FC = () => {
  return (
    <div className="friends-list">
      <FriendListHeader>
        <h3>Username</h3>
        <h3>Status</h3>
        <h3>Last Online</h3>
        <h3>Games Played</h3>
        <FriendsNavButtons />
      </FriendListHeader>
      <div className="friends-list-container">
        {friendsList.map(({ username, status, lastOn, gamesPlayed }, i) => (
          <FriendListItem
            key={username + i}
            username={username}
            status={status}
            lastOn={lastOn}
            gamesPlayed={gamesPlayed}
          />
        ))}
      </div>
    </div>
  );
};
