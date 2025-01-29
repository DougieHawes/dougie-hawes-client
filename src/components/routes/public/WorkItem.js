import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

import { Route1 } from "../../utils/routes";

import { Button2, Button3 } from "../../utils/buttons";

import laadeedaaIcon from "../../../display/media/images/laadeedaa.png";

import "./style.scss";

const WorkItem = () => {
  const [item, setItem] = useState({
    id: 1,
    date: "29.01.25",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec magna nec velit tristique ultrices. Sed vitae orci non metus viverra convallis. Fusce convallis magna in felis volutpat, id bibendum justo vulputate. Pellentesque dictum, sapien non pharetra auctor, mauris felis laoreet erat, vel tristique elit lorem ac purus. Cras non massa eget arcu aliquet lacinia. Etiam suscipit nisi in odio feugiat, nec malesuada erat tincidunt. Suspendisse vehicula tincidunt libero, sit amet cursus elit posuere ut. Integer vehicula arcu non ex scelerisque, sed facilisis augue dapibus. Proin rhoncus lacus a erat tincidunt tincidunt. Quisque scelerisque, magna nec bibendum hendrerit, enim ligula faucibus arcu, ut tincidunt mi purus ac augue. Fusce malesuada libero sit amet sapien malesuada, nec congue nunc facilisis.",
    githubLink: "http://github.com",
    imageArray: [laadeedaaIcon],
    skillsArray: [
      "mern",
      "mongodb",
      "express.js",
      "react.js",
      "node.js",
      "scss",
      "framer-motion",
      "jsonwebtoken",
      "bcrypt.js",
    ],
    siteLink: "http://dougiehawes.uk",
    title: "LaaDeeDaa",
  });

  // const params = useParams();
  // const id = params.workid;

  // useEffect(() => {

  // }, []);

  return (
    <Route1
      content={
        <div className="work-item-page">
          <div className="work-item-page-title-container">
            <h3 className="work-item-page-title">{item.title}</h3>
            <p className="work-item-page-date">{item.date}</p>
            <p className="work-item-skills-array">
              {item.skillsArray.map((s) => {
                return `#${s} `;
              })}
            </p>
          </div>
          <div className="work-item-image-container">
            {item.imageArray.map((a) => (
              <img className="work-item-image" key={a} src={a} alt="" />
            ))}
          </div>
          <div className="work-item-links-container">
            <Button2 to={item.siteLink} />
            <Button3 to={item.githubLink} />
          </div>
          <div className="work-item-description-container">
            <p className="work-item-description-container">
              {item.description}
            </p>
          </div>
        </div>
      }
    />
  );
};

export default WorkItem;
