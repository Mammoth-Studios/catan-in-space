import { FC } from "react";
import "./friends-search.scss";
import { FriendListHeader } from "../friends-list";
import { FriendsNavButtons } from "../friends-nav-buttons";
import { useSelector } from "react-redux";
import { friendsDomainSlice } from "@domains/friends/friends.slice";
import { useDispatch } from "react-redux";
import { FriendListItem } from "../friends-list/friend-list-item.component";
import { friendsList } from "../friends-list/friends-list.constant";
const {
  actions: { updateSearchInput },
  selectors: { getSearchInput },
} = friendsDomainSlice;

export const FriendsSearch: FC = () => {
  const dispatch = useDispatch();

  const searchInput: string = useSelector(getSearchInput);

  const handleSearch = (value: string) => {
    dispatch(updateSearchInput(value));
  };

  return (
    <div className="friends-search">
      <FriendListHeader content="search">
        <h3>Add Friend</h3>
        <FriendsNavButtons />
      </FriendListHeader>
      <div className="friends-search-list">
        {friendsList.map(({ username, gamesPlayed, lastOn, status }, i) => (
          <>
            {searchInput && username.includes(searchInput) && (
              <FriendListItem
                key={i}
                username={username}
                gamesPlayed={gamesPlayed}
                lastOn={lastOn}
                status={status}
              />
            )}
          </>
        ))}
      </div>
      <div className="friends-search-bar">
        <input
          className="friends-search-input"
          type="text"
          placeholder="Search a username..."
          value={searchInput}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <button className="friends-search-button">
          <svg
            width="35"
            height="37"
            viewBox="0 0 35 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="22.5"
              cy="12.5"
              r="10.5"
              stroke="white"
              stroke-width="2"
            />
            <path d="M15.5 21L3 33.5" stroke="white" stroke-width="4" />
          </svg>
        </button>
      </div>
    </div>
  );
};
