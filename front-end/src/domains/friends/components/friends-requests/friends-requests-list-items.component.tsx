import { FC } from "react";
import "./friends-requests-list-items.style.scss";

export interface FriendsRequestsListItemProps {
  username: string;
}

export const FriendsRequestsListItem: FC<FriendsRequestsListItemProps> = ({
  username,
}) => {
  return (
    <div className="friends-requests-list-item">
      <h4 className="friends-requests-list-name">{username}</h4>
      <div className="friends-requests-list-item-btns">
        <button className="friends-requests-btns">
          <svg
            width="33"
            height="33"
            viewBox="0 0 40 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 15.5L14.5 27L38.5 3" stroke="white" stroke-width="4" />
          </svg>
        </button>
        <button className="friends-requests-btns">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 3L16 16M29 29L16 16M16 16L29 3M16 16L3 29"
              stroke="white"
              stroke-width="4"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
