import React from "react";
import "./Footer.style.scss";

import { PlaceHolderBox } from "@lib/PlaceHolderBox";

type LinkData = {
  href: string;
  label: string;
  text: string;
};

const footerLinks: Array<LinkData> = [
  { href: "#", label: "Move to Top of Page", text: "Top of Page" },
  { href: "/", label: "Home Page", text: "Home" },
  { href: "/game", label: "Play Game Page", text: "Play Game" },
  {
    href: "/profile",
    label: "Open Profile",
    text: "Profile",
  },
  {
    href: "/friends",
    label: "Open Friends",
    text: "Friends",
  },
];

export const Footer: React.FC = () => (
  <footer>
    <div className="container">
      <PlaceHolderBox height="100%" width="30%" title="Logo" />
      <div className="links">
        {footerLinks.map((link: LinkData) => (
          <a key={link.href} href={link.href} aria-label={link.label}>
            {link.text}
          </a>
        ))}
      </div>
    </div>
    <p>© 2024 Mammoth Studios, All rights reserved.</p>
  </footer>
);
