import { FC } from "react";
import { Profile } from "@domains/friends/components/profile/profile";
import { FriendsList } from "@domains/friends/components/friends-list";
import { FriendsRequests } from "@domains/friends/components/friends-requests";
import { FriendsSearch } from "@domains/friends/components/friends-search";

export const ProfileView: FC = () => (
  <>
    {/* {"what's up samson!"} */}
    <Profile />
    <FriendsList />
    <FriendsRequests />
    <FriendsSearch />
  </>
);
