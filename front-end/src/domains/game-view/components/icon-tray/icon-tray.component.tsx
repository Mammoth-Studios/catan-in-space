import React, {ReactElement} from "react";
import "./icon-tray.style.scss";

export type TrayData = {
    icon: ReactElement;
    label: string;
    action: string;
};

type IconTrayProps = {
    trayData: TrayData[];
    actionsMap: (action: string) => void;
};

export const IconTray: React.FC<IconTrayProps> = ({trayData, actionsMap}) => (
  <div className="icon-tray">
      {trayData.map((data, index) => (
          <div className={"icon"} key={index} onClick={() => actionsMap(data.action)}>
              {data.icon}
              <p>{data.label}</p>
          </div>
      ))}
  </div>
);
