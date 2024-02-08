import { FC } from "react";
import { Background } from "@domains/game-board/components/background";
import { GamePlaceHolder } from "./components/game-placeholder";

export const GameBoard: FC = () => (
  <>
    <Background />
    <GamePlaceHolder />
  </>
);
