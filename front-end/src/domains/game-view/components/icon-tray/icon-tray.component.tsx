import React, {ReactElement} from "react";
import "./icon-tray.style.scss";

export type TrayData = {
    icon: ReactElement;
    label: string;
    action?: string;
    menu?: ReactElement;
};

type IconTrayProps = {
    trayData: TrayData[];
    actionsMap: (action: TrayData) => void;
    activeItem: TrayData | null;
};

export const IconTray: React.FC<IconTrayProps> = ({trayData, actionsMap, activeItem}) => (
  <>
    <div className="icon-tray">
      {trayData.map((data, index) => (
          <div className={`icon ${data === activeItem? "active" : ""}`} key={index} onClick={() => actionsMap(data)}>
              {data.icon}
              <p>{data.label}</p>
          </div>
      ))}
        {activeItem && activeItem.action === "menu" &&
            <div className={"tray-content"}>
                {activeItem.menu}
            </div>
        }
  </div>
  </>
);
