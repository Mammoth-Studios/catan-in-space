import { FC } from "react";
import "./rival-player-hud.style.scss";

export type RivalPlayer = {
  avatar: string;
  username: string;
  vp: number;
};

type IconTrayProps = {
  players: RivalPlayer[];
};

export const RivalPlayerHud: FC<IconTrayProps> = ({ players }) => (
  <div className="rival-player-hud">
    {players.map(({ avatar, username, vp }) => (
      <div className="rival-player-ctn-wrap">
        <div className="rival-player-ctn">
          <div className="rival-player-username-ctn">
            <p className="rival-player-username">{username}</p>
          </div>
          <div className="rival-player-avatar">{avatar}</div>
          <div className="rival-player-btn-ctn">
            <button className="rival-player-btn">VP: {vp}</button>
            <button className="rival-player-btn">People</button>
            <button className="rival-player-btn">Potion</button>
          </div>
        </div>
      </div>
    ))}
  </div>
);
