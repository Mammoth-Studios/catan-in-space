import { FC, ReactNode } from "react";
import "./friend-list-header.scss";

interface FriendListHeaderProps {
  children: ReactNode;
  content?: string;
}

export const FriendListHeader: FC<FriendListHeaderProps> = ({
  children,
  content,
}) => {
  return (
    <div className={`friends-list-header friends-list-header-${content}`}>
      {children}
    </div>
  );
};
