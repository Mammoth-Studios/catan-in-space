import { FC } from "react";
import { GameBoard, GameUIMenu } from "@domains/game-board";

export const GameView: FC = () => (
  <>
    <GameBoard />
    <GameUIMenu />
  </>
);
