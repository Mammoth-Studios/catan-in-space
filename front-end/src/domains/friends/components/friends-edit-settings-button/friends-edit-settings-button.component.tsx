import { FC, useState } from "react";
import "./friends-edit-settings-button.style.scss";

export const FriendsEditSettingsButton: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="friends-edit-settings-button-box">
      <button className="friends-edit-settings-button" onClick={handleOpen}>
        {`Edit Game Settings >`}
      </button>

      <dialog className="edit-settings-menu" open={isOpen}>
        <form method="dialog">
          <button
            className="edit-settings-menu-close-button"
            onClick={handleClose}
          >
            X
          </button>
        </form>
        <div className="edit-settings-menu-content">
          <p>Future Development</p>
        </div>
      </dialog>
    </div>
  );
};
