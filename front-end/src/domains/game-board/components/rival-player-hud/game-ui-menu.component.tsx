import { FC } from "react";

import {
  RivalPlayerHud,
  RivalPlayer,
} from "@domains/game-board/components/rival-player-hud";

const players: RivalPlayer[] = [
  {
    username: "Player 1",
    vp: 0,
    avatar: "red",
  },
  {
    username: "Player 2",
    vp: 3,
    avatar: "blue",
  },
  {
    username: "Player 3",
    vp: 2,
    avatar: "green",
  },
  {
    username: "Player 4",
    vp: 1,
    avatar: "yellow",
  },
];

export const GameUIMenu: FC = () => {
  return <RivalPlayerHud players={players} />;
};
