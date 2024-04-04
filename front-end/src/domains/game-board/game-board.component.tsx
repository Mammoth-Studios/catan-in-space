import { FC } from "react";
import { Background } from "@domains/game-board/components/background";
import { Board } from "./components/game-board/game-board.component";

export const GameBoard: FC = () => (
  <>
    <Background />
    <Board />
  </>
);
