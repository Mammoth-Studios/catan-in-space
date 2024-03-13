import { FC } from "react";
import "./friends-requests.scss";
import { FriendListHeader } from "../friends-list";
import { FriendsNavButtons } from "../friends-nav-buttons";
import { friendsList } from "../friends-list/friends-list.constant";
import { FriendsRequestsListItem } from "./friends-requests-list-items.component";

export const FriendsRequests: FC = () => {
  return (
    <div className="friend-requests">
      <FriendListHeader content="request">
        <h3>Friend Requests</h3>
        <FriendsNavButtons />
      </FriendListHeader>
      <div className="friend-requests-container">
        {friendsList.map(({ username }, i) => (
          <FriendsRequestsListItem key={username + i + i} username={username} />
        ))}
      </div>
    </div>
  );
};
