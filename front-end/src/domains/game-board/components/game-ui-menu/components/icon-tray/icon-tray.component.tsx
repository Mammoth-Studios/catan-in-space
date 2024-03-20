import { FC, ReactElement } from "react";
import "./icon-tray.style.scss";

export type TrayData = {
  icon: ReactElement;
  label: string;
  action?: string;
  menu?: ReactElement;
};

type IconTrayProps = {
  trayData: TrayData[];
  actionsMap: (data: TrayData | undefined) => void;
  activeItem: TrayData | null;
};

export const IconTray: FC<IconTrayProps> = ({
  trayData,
  actionsMap,
  activeItem,
}) => (
  <div className="icon-tray">
    {trayData.map((data) => (
      <button
        type="button"
        className={`icon ${data === activeItem ? "active" : ""}`}
        key={data.label}
        onClick={() => actionsMap?.(data)}
      >
        {data.icon}
        <p>{data.label}</p>
      </button>
    ))}
    {activeItem && activeItem.action === "menu" && (
      <div className="tray-content">{activeItem.menu}</div>
    )}
  </div>
);
