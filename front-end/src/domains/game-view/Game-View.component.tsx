import React from "react";

import { GameBoard } from "./components/game-board";
import { TradeModal } from "./components/trade-modal";
import { IconTray, TrayData } from "./components/icon-tray";

import {ChatIcon, LogIcon, QuitIcon, SettingsIcon, TradeIcon} from "./components/tray-icons"

const TrayItems: Array<TrayData> = [
    { icon: <ChatIcon/>, label: "Chat", action: "chat" },
    { icon: <TradeIcon/>, label: "Trade", action: "trade"},
    { icon: <LogIcon/>, label: "Game Log", action: "log" },
    { icon: <SettingsIcon/>, label: "Settings", action: "settings" },
    { icon: <QuitIcon/>, label: "Quit Game", action: "quit" },
];

const ActionMap = (action: string) => {
    switch(action) {
        case 'chat':
            console.log('Action Chat triggered');
            //open chat
            break;
        case 'trade':
            console.log('Action Trade triggered');
            //toggle Modal
            break;
        case 'log':
            console.log('Action Log triggered');
            break;
        case 'quit':
            console.log('Action Quit triggered');
            break;
        case 'settings':
            console.log('Action Settings triggered');
            break;
        default:
            console.log('No action matched', action);
    }
}
export const GameView: React.FC = () => (
  <section className="game-view">
    <GameBoard />
    <TradeModal/>
    <IconTray trayData={TrayItems} actionsMap={ActionMap}/>
  </section>
);
