import { FC } from "react";
import "./profile.scss";
import profilePlaceholder from "./assets/profile-placeholder.png";
import { FriendsEditSettingsButton } from "../friends-edit-settings-button";

export const Profile: FC = () => (
  <div className="userProfile">
    <div className="profileID">
      <header className="profileHeader">Profile</header>
      <img className="userImg" src={profilePlaceholder} />
      <p className="userName">User Name</p>
    </div>
    <div className="profileUniques">
      <ul className="stats">
        {/* TODO Dustin, this is the placeholder div I created for the stats. Feel free to insert yours into this. */}
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
        {/* TODO Dustin, this is the placeholder div I created for the stats. Feel free to insert yours over this */}
      </ul>
      <div className="customize">
        <div className="avatarEdit">
          {/* TODO Samson, when you work on the Avatar edit use this section. */}
          <img className="avatar" src={profilePlaceholder} />
          {/* TODO Samson, when you work on the Avatar edit use this section */}
        </div>
        <div className="customize-btns">
          <button className="editAvatarButton">Edit Avatar</button>
          <FriendsEditSettingsButton />
        </div>
      </div>
    </div>
  </div>
);
