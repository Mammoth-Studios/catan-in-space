import { FC, useMemo } from "react";

export interface FriendListItemProps {
  username: string;
  status: boolean;
  lastOn: number;
  gamesPlayed: number;
}

export const FriendListItem: FC<FriendListItemProps> = ({
  username,
  status,
  lastOn,
  gamesPlayed,
}) => {
  const date = useMemo(() => new Date(lastOn).toLocaleDateString(), [lastOn]);

  return (
    <div className="friends-list-item">
      <p>{username}</p>
      <p>{status ? "Online" : "Offline"}</p>
      <p>{date}</p>
      <p>{gamesPlayed}</p>
      <button>X</button>
    </div>
  );
};
