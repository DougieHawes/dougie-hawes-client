import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

import { Route1 } from "../../utils/routes";

import { Button2, Button3 } from "../../utils/buttons";

import test1 from "../../../display/media/images/test1.jpg";
import test2 from "../../../display/media/images/test2.jpg";
import test3 from "../../../display/media/images/test3.jpg";

import "./style.scss";

const WorkItem = () => {
  const [item, setItem] = useState({
    id: 1,
    date: "29.01.25",
    description:
      "Lorem ipsum dolor <b>sit amet</b>, <h4>consectetur adipiscing</h4> elit. Curabitur nec magna nec velit tristique ultrices. Sed vitae orci non metus viverra convallis. Fusce convallis magna in felis volutpat, id bibendum justo vulputate. Pellentesque dictum, sapien non pharetra auctor, mauris felis laoreet erat, vel tristique elit lorem ac purus. Cras non massa eget arcu aliquet lacinia. Etiam suscipit nisi in odio feugiat, nec malesuada erat tincidunt. Suspendisse vehicula tincidunt libero, sit amet cursus elit posuere ut. Integer vehicula arcu non ex scelerisque, sed facilisis augue dapibus. Proin rhoncus lacus a erat tincidunt tincidunt. Quisque scelerisque, magna nec bibendum hendrerit, enim ligula faucibus arcu, ut tincidunt mi purus ac augue. Fusce malesuada libero sit amet sapien malesuada, nec congue nunc facilisis.",
    githubLink: "http://github.com",
    imageArray: [test1, test2, test3, test3],
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? item.imageArray.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === item.imageArray.length - 1 ? 0 : prevIndex + 1
    );
  };

  // const params = useParams();
  // const id = params.workid;

  // useEffect(() => {

  // }, []);

  return (
    <Route1
      content={
        <div className="work-item-page">
          <div className="work-item-page-column">
            <div className="work-item-page-title-container">
              <h3 className="work-item-page-title">{item.title}</h3>
              <p className="work-item-page-date">{item.date}</p>
              <p className="work-item-skills-array">
                {item.skillsArray.map((s) => {
                  return (
                    <span className="work-item-skills-array-item">
                      {`#${s} `}
                    </span>
                  );
                })}
              </p>
            </div>
            <div className="work-item-image-container">
              <img
                src={item.imageArray[currentIndex]}
                className="work-item-image"
                alt="Carousel"
              />
            </div>
            <div className="work-item-image-scroll-container">
              <button
                className="work-item-image-scroll-button"
                onClick={goToPrevious}
              >
                prev
              </button>
              <button
                className="work-item-image-scroll-button"
                onClick={goToNext}
              >
                next
              </button>
            </div>
            <div className="work-item-image-thumbnails">
              {item.imageArray.map((a) => (
                <img
                  className="work-item-image-thumbnail"
                  style={{
                    borderWidth: item.imageArray[currentIndex] === a && 0,
                  }}
                  src={a}
                  alt=""
                />
              ))}
            </div>
          </div>
          <div className="work-item-page-column">
            <div className="work-item-links-container">
              <Button2 to={item.siteLink} />
              <Button3 to={item.githubLink} />
            </div>
            <div className="work-item-description-container">
              <p
                className="work-item-description-container"
                dangerouslySetInnerHTML={{ __html: item.description }}
              ></p>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default WorkItem;
