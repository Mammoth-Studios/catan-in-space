import React from "react";
import "./Footer.style.scss";

type LinkData = {
  href: string,
  label: string,
  text: string
};

// @ts-expect-error TS2304: Cannot find name 'Array'.
const footerLinks: Array<LinkData> = [
  { href: "/home", label: "Home Page", text: "Home" },
  { href: "/contact", label: "Contact Page", text: "Contact" },
  { href: "/how-to-play", label: "How To Play Page", text: "How To Play" },
  { href: "/policy/privacy", label: "Privacy Policy Page", text: "Privacy Policy" },
  { href: "/policy/TOS", label: "Terms Of Service Page", text: "Terms of Service" },
  { href: "/careers", label: "Careers Page", text: "Careers" }
];

export const Footer: React.FC = () => (
  <footer>
    <img src="./PLACEHOLDER" alt="Catan In Space Logo" />
    <div className="links">
      {footerLinks.map((link: LinkData) => (
        <a key={link.href} href={link.href} aria-label={link.label}>{link.text}</a>
      ))}
    </div>
    <div className="socials">

      <a href="https://www.facebook.com" aria-label="www.Facebook.com">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 448" fill="none">
          <path
            d="M194.4 179.7C188.576 183.594 183.576 188.596 179.685 194.423C175.794 200.249 173.089 206.784 171.724 213.656C168.967 227.533 171.836 241.938 179.7 253.7C187.564 265.462 199.778 273.619 213.656 276.376C227.533 279.133 241.938 276.264 253.7 268.4C265.462 260.536 273.619 248.322 276.376 234.444C279.133 220.567 276.264 206.162 268.4 194.4C260.536 182.638 248.322 174.481 234.444 171.724C220.567 168.967 206.162 171.836 194.4 179.7ZM336.7 111.3C331.5 106.1 325.2 102 318.3 99.3C300.2 92.2 260.7 92.5 235.2 92.8C231.1 92.8 227.3 92.9 224 92.9C220.7 92.9 216.8 92.9 212.6 92.8C187.1 92.5 147.8 92.1 129.7 99.3C122.8 102 116.6 106.1 111.3 111.3C106 116.5 102 122.8 99.3 129.7C92.2 147.8 92.6 187.4 92.8 212.9C92.8 217 92.9 220.8 92.9 224C92.9 227.2 92.9 231 92.8 235.1C92.6 260.6 92.2 300.2 99.3 318.3C102 325.2 106.1 331.4 111.3 336.7C116.5 342 122.8 346 129.7 348.7C147.8 355.8 187.3 355.5 212.8 355.2C216.9 355.2 220.7 355.1 224 355.1C227.3 355.1 231.2 355.1 235.4 355.2C260.9 355.5 300.2 355.9 318.3 348.7C325.2 346 331.4 341.9 336.7 336.7C342 331.5 346 325.2 348.7 318.3C355.9 300.3 355.5 260.9 355.2 235.3C355.2 231.1 355.1 227.2 355.1 223.9C355.1 220.6 355.1 216.8 355.2 212.5C355.5 187 355.9 147.6 348.7 129.5C346 122.6 341.9 116.4 336.7 111.1V111.3ZM269.6 155.8C287.688 167.894 300.23 186.678 304.469 208.019C308.707 229.361 304.294 251.512 292.2 269.6C286.212 278.556 278.518 286.245 269.558 292.228C260.598 298.211 250.548 302.37 239.981 304.469C218.639 308.707 196.488 304.294 178.4 292.2C160.312 280.119 147.764 261.348 143.517 240.016C139.269 218.684 143.669 196.538 155.75 178.45C167.831 160.362 186.602 147.814 207.934 143.567C229.266 139.319 251.412 143.719 269.5 155.8H269.6ZM298.8 154.5C295.7 152.4 293.2 149.4 291.7 145.9C290.2 142.4 289.9 138.6 290.6 134.8C291.3 131 293.2 127.7 295.8 125C298.4 122.3 301.9 120.5 305.6 119.8C309.3 119.1 313.2 119.4 316.7 120.9C320.2 122.4 323.2 124.8 325.3 127.9C327.4 131 328.5 134.7 328.5 138.5C328.5 141 328 143.5 327.1 145.8C326.2 148.1 324.7 150.2 323 152C321.3 153.8 319.1 155.2 316.8 156.2C314.5 157.2 312 157.7 309.5 157.7C305.7 157.7 302 156.6 298.9 154.5H298.8ZM448 64C448 28.7 419.3 0 384 0H64C28.7 0 0 28.7 0 64V384C0 419.3 28.7 448 64 448H384C419.3 448 448 419.3 448 384V64ZM357 357C338.3 375.7 315.6 381.6 290 382.9C263.6 384.4 184.4 384.4 158 382.9C132.4 381.6 109.7 375.7 91 357C72.3 338.3 66.4 315.6 65.2 290C63.7 263.6 63.7 184.4 65.2 158C66.5 132.4 72.3 109.7 91 91C109.7 72.3 132.5 66.4 158 65.2C184.4 63.7 263.6 63.7 290 65.2C315.6 66.5 338.3 72.3 357 91C375.7 109.7 381.6 132.4 382.8 158C384.3 184.3 384.3 263.4 382.8 289.9C381.5 315.5 375.7 338.2 357 356.9V357Z"
          />
        </svg>
      </a>
      <a href="https://www.x.com" aria-label="www.X.com">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 448" fill="none">
          <path
            d="M64 0C28.7 0 0 28.7 0 64V384C0 419.3 28.7 448 64 448H384C419.3 448 448 419.3 448 384V64C448 28.7 419.3 0 384 0H64ZM361.1 84L257.3 202.6L379.4 364H283.8L209 266.1L123.3 364H75.8L186.8 237.1L69.7 84H167.7L235.4 173.5L313.6 84H361.1ZM323.3 335.6L153.4 110.9H125.1L296.9 335.6H323.2H323.3Z"
          />
        </svg>
      </a>
      <a href="https://www.instagram.com/" aria-label="www.Instagram.com">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 448" fill="none">
          <path
            d="M64 0C28.7 0 0 28.7 0 64V384C0 419.3 28.7 448 64 448H162.2V302.2H109.4V224H162.2V190.3C162.2 103.2 201.6 62.8 287.2 62.8C303.4 62.8 331.4 66 342.9 69.2V140C336.9 139.4 326.4 139 313.3 139C271.3 139 255.1 154.9 255.1 196.2V224H338.7L324.3 302.2H255V448H384C419.3 448 448 419.3 448 384V64C448 28.7 419.3 0 384 0H64Z"
          />
        </svg>
      </a>
    </div>
    <p>© 2024 Mammoth Studios, All rights reserved.</p>
  </footer>
);
