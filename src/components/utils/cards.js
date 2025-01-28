import { Link } from "react-router-dom";

import { Button2, Button3 } from "./buttons.js";

import "./style.scss";

export const Card1 = ({
  description,
  githubLink,
  image,
  link,
  siteLink,
  title,
}) => (
  <div className="card card1">
    <Link to={`/work/${link}`}>
      <img className="card1-image" src={image} alt="" />
    </Link>
    <div className="card1-text-container">
      <Link to={`/work/${link}`}>
        <h3 className="card-title">{title}</h3>
      </Link>
      <p className="card1-description">{description}</p>
      <div className="card1-buttons-container">
        <Button2 text="VIEW SITE" to={siteLink} />
        <Button3 text="VIEW CODE" to={githubLink} />
      </div>
    </div>
  </div>
);

export const Card2 = ({ image, level, title }) => (
  <div className="card card2">
    <h3 className="card-title">{title}</h3>
    <img className="card2-image" src={image} alt="" />
    <p className="card2-level">{level}</p>
  </div>
);

export const Card3 = ({ date, image, link, text, title }) => (
  <Link to={`/blog/${link}`}>
    <div className="card card3">
      <div className="card3-image-container">
        <img className="card3-image" src={image} alt="" />
      </div>
      <div className="card3-text-container">
        <h3 className="card-title">{title}</h3>
        <p className="card3-date">{date}</p>
        <p className="card3-text">{text}</p>
      </div>
    </div>
  </Link>
);
