import React from "react";
import { LinkItem } from "../../models/LinkItem";
import "./footer.less";
import resume from "./../../assets/files/resume.pdf";

const footerOptions: LinkItem[] = [
  {
    displayName: "hx2313@barnard.edu",
    link: "mailto:hx2313@barnard.edu?Subject=Hello",
  },
  {
    displayName: "LinkedIn",
    link: "https://www.linkedin.com/in/hannah-x/",
  },
  { displayName: "Résumé", link: resume },
];

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <h2> Let's Connect </h2>
        {footerOptions.map((footerOption, index) => {
          return (
            <h3 key={index}>
              <a href={footerOption.link} target="_blank" rel="noopener">
                {footerOption.displayName}
              </a>
            </h3>
          );
        })}
      </div>
    </div>
  );
};
