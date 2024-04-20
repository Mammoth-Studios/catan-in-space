import { FC, useState } from "react";
import { TradeModal } from "@domains/game-board/components/game-ui-menu/components/trade-modal";
import {
  IconTray,
  TrayData,
} from "@domains/game-board/components/game-ui-menu/components/icon-tray";

import {
  ChatIcon,
  LogIcon,
  QuitIcon,
  SettingsIcon,
  TradeIcon,
} from "@domains/game-board/components/game-ui-menu/components/tray-icons";
import {
  ChatMenu,
  LogsMenu,
  QuitMenu,
  SettingsMenu,
} from "@domains/game-board/components/game-ui-menu/components/tray-menus";

const TrayItems: Array<TrayData> = [
  {
    icon: <ChatIcon />,
    label: "Chat",
    action: "menu",
    menu: <ChatMenu />,
  },
  { icon: <TradeIcon />, label: "Trade" },
  {
    icon: <LogIcon />,
    label: "Game Log",
    action: "menu",
    menu: <LogsMenu />,
  },
  {
    icon: <SettingsIcon />,
    label: "Settings",
    action: "menu",
    menu: <SettingsMenu />,
  },
  {
    icon: <QuitIcon />,
    label: "Quit Game",
    action: "menu",
    menu: <QuitMenu />,
  },
];

export const GameUIMenu: FC = () => {
  const [activeTrayItem, setActiveTrayItem] = useState<null | TrayData>(null);

  const ActionMap = (data?: TrayData) => {
    if (data === undefined) {
      setActiveTrayItem(null);
      throw new Error("Invalid Action");
    }
    if (activeTrayItem === data) {
      // Close Menu
      setActiveTrayItem(null);
    } else {
      // Open Menu
      setActiveTrayItem(data);
    }
  };

  const isTradeItemActive = activeTrayItem?.label === "Trade";
  const TradeItem = TrayItems.find((item) => item.label === "Trade");
  if (!TradeItem) return null;
  return (
    <>
      {isTradeItemActive && (
        <TradeModal actionsMap={ActionMap} itemData={TradeItem} />
      )}
      <IconTray
        trayData={TrayItems}
        actionsMap={ActionMap}
        activeItem={activeTrayItem}
      />
    </>
  );
};
