import { FC } from "react";
import { Profile } from "@views/profile-view/profile.tsx";
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
