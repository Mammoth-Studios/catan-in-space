import React from "react";

import { GameBoard } from "./components/game-board";
import { TradeModal } from "./components/trade-modal";
import { IconTray } from "./components/icon-tray";

export const GameView: React.FC = () => (
  <section className="game-view">
    <GameBoard />
    <TradeModal />
    <IconTray />
  </section>
);
