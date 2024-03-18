import { FC } from "react";
import "./profile.scss";
import profilePlaceholder from "@views/assets/profile-placeholder.png";

export const Profile: FC = () => (
  <div className="userProfile">
    <div className="profileID">
      <header className="profileHeader">Profile</header>
      <img className="userImg" src={profilePlaceholder} />
      <p className="userName">User Name</p>
    </div>
    <div className="profileUniques">
      <ul className="stats">
        <p className="statistics">Statistics</p>
        <li>Level:</li>
        <li>XP:</li>
        <li>Karma:</li>
        <li>Prestige Rank:</li>
        <li>Player Color</li>
        <li>Won (SP):</li>
        <li>Won (MP):</li>
        <li>Most Played Scenario:</li>
        <li>Most Played Expansion:</li>
      </ul>
      <div className="customize">
        <div className="avatarEdit">
          <img className="avatar" src={profilePlaceholder} />
          <button className="editAvatarButton">Edit Avatar</button>
        </div>
        <button className="editGameSettings">Edit Game Settings</button>
      </div>
    </div>
  </div>
);
