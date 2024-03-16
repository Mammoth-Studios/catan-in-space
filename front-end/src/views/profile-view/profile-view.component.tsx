import { FC } from "react";
import { FriendsList } from "@domains/friends/components/friends-list";
import { FriendsRequests } from "@domains/friends/components/friends-requests";
import { FriendsSearch } from "@domains/friends/components/friends-search";

export const ProfileView: FC = () => (
  <>
    {"what's up samson!"}
    <FriendsList />
    <FriendsRequests />
    <FriendsSearch />
  </>
);
