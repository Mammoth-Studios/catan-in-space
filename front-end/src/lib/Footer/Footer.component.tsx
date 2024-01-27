import React from "react";
import "./Footer.style.scss";

import { FacebookLogo, InstagramLogo, XLogo } from "@lib/Social-Logos";

type LinkData = {
  href: string;
  label: string;
  text: string;
};

const footerLinks: Array<LinkData> = [
  { href: "/home", label: "Home Page", text: "Home" },
  { href: "/contact", label: "Contact Page", text: "Contact" },
  { href: "/how-to-play", label: "How To Play Page", text: "How To Play" },
  {
    href: "/policy/privacy",
    label: "Privacy Policy Page",
    text: "Privacy Policy",
  },
  {
    href: "/policy/TOS",
    label: "Terms Of Service Page",
    text: "Terms of Service",
  },
  { href: "/careers", label: "Careers Page", text: "Careers" },
];

export const Footer: React.FC = () => (
  <footer>
    <img src="./PLACEHOLDER" alt="Catan In Space Logo" />
    <div className="links">
      {footerLinks.map((link: LinkData) => (
        <a key={link.href} href={link.href} aria-label={link.label}>
          {link.text}
        </a>
      ))}
    </div>
    <div className="socials">
      <FacebookLogo />
      <InstagramLogo />
      <XLogo />
    </div>
    <p>© 2024 Mammoth Studios, All rights reserved.</p>
  </footer>
);
