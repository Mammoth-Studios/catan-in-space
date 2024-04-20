import { FC } from "react";
import { FriendsList } from "@domains/friends/components/friends-list";
import { FriendsRequests } from "@domains/friends/components/friends-requests";
import { FriendsSearch } from "@domains/friends/components/friends-search";
import { Profile } from "@domains/friends/components/profile";

export const ProfileView: FC = () => (
  <>
    <Profile />
    <FriendsList />
    <FriendsRequests />
    <FriendsSearch />
  </>
);
