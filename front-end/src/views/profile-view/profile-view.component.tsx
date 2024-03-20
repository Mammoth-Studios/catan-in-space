import { FC } from "react";
import { FriendsList } from "@domains/friends/components/friends-list";
import { FriendsRequests } from "@domains/friends/components/friends-requests";
import { FriendsSearch } from "@domains/friends/components/friends-search";
import { FriendsEditSettingsButton } from "@domains/friends/components/friends-edit-settings-button";

export const ProfileView: FC = () => (
  <>
    <FriendsEditSettingsButton />
    <FriendsList />
    <FriendsRequests />
    <FriendsSearch />
  </>
);
