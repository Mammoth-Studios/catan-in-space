import { FC } from "react";
import { GameBoard } from "@domains/game-board";
import { GameUIMenu } from "@domains/game-board/components/game-ui-menu";

export const GameView: FC = () => (
  <>
    <GameBoard />
    <GameUIMenu />
  </>
);
