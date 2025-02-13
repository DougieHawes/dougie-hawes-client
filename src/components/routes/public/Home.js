import axios from "axios";

import { useEffect, useState } from "react";

import mernLogo from "../../../display/media/images/icons/mongodb-logo.png";
import expressLogo from "../../../display/media/images/icons/express-logo.png";
import githubLogoDark from "../../../display/media/images/icons/github-logo-dark.svg";
import githubLogoLight from "../../../display/media/images/icons/github-logo-light.svg";
import linkedinLogoDark from "../../../display/media/images/icons/linkedin-logo-dark.svg";
import linkedinLogoLight from "../../../display/media/images/icons/linkedin-logo-light.svg";
import reactLogo from "../../../display/media/images/icons/react-logo.png";
import nodeLogo from "../../../display/media/images/icons/node-logo.png";

import { Route1 } from "../../utils/routes";

import "./style.scss";

const Home = ({ darkmode }) => {
  const [randomItems, setRandomItems] = useState({});

  useEffect(() => {
    const getWork = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/work`
        );

        const sitesArray = [];
        const appsArray = [];
        const gamesArray = [];

        response.data.map((w) => {
          if (w.category == "sites") {
            sitesArray.push(w);
          } else if (w.category == "apps") {
            appsArray.push(w);
          } else {
            gamesArray.push(w);
          }
        });

        const randomSite =
          sitesArray[Math.floor(Math.random() * sitesArray.length)];
        const randomApp =
          appsArray[Math.floor(Math.random() * appsArray.length)];
        const randomGame =
          gamesArray[Math.floor(Math.random() * gamesArray.length)];

        setRandomItems({
          site: { title: randomSite.title, image: randomSite.image1 },
          app: { title: randomApp.title, image: randomApp.image1 },
          game: { title: randomGame.title, image: randomGame.image1 },
        });
      } catch (error) {
        console.log(error.message);
      }
    };

    getWork();
  }, []);
  console.log(randomItems);
  return (
    <Route1
      content={
        <>
          <div className="home-links-container">
            <a
              className="home-link"
              href="https://www.linkedin.com/in/dougiehawes/"
              target="_blank"
            >
              <img
                className="home-link-image"
                src={darkmode ? linkedinLogoDark : linkedinLogoLight}
                alt=""
              />
            </a>
            <a
              className="home-link"
              href="https://github.com/DougieHawes"
              target="_blank"
            >
              <img
                className="home-link-image"
                src={darkmode ? githubLogoDark : githubLogoLight}
                alt=""
              />
            </a>
          </div>
          <div className="home-title-container">
            <h1 className="home-title">
              <span className="dougie">Dougie</span>{" "}
              <span className="hawes">Hawes</span>
            </h1>
            <p className="home-subtitle">FullStack Web Developer</p>
          </div>
          <div className="mern-container">
            <div className="mern-item-container">
              <img className="mern-item-image" src={mernLogo} alt="" />
              <p className="mern-item-text">M</p>
            </div>
            <div className="mern-item-container">
              <img className="mern-item-image" src={expressLogo} alt="" />
              <p className="mern-item-text">E</p>
            </div>
            <div className="mern-item-container">
              <img className="mern-item-image" src={reactLogo} alt="" />
              <p className="mern-item-text">R</p>
            </div>
            <div className="mern-item-container">
              <img className="mern-item-image" src={nodeLogo} alt="" />
              <p className="mern-item-text">N</p>
            </div>
          </div>
          <div className="home-work-samples-container">
            <div className="home-work-sample">
              <img className="home-work-sample-image" alt="" />
              <div className="home-work-sample-text-container">
                <p className="home-work-sample-category">SITES</p>
                <p className="home-work-sample-title"></p>
              </div>
            </div>
            <div className="home-work-sample">
              <img className="home-work-sample-image" alt="" />
              <div className="home-work-sample-text-container">
                <p className="home-work-sample-category">APPS</p>
                <p className="home-work-sample-title">
                  {/* {randomItems.app.title} */}
                </p>
              </div>
            </div>
            <div className="home-work-sample">
              <img className="home-work-sample-image" alt="" />
              <div className="home-work-sample-text-container">
                <p className="home-work-sample-category">GAMES</p>
                <p className="home-work-sample-title">
                  {/* {randomItems.game.title} */}
                </p>
              </div>
            </div>
          </div>
        </>
      }
    />
  );
};

export default Home;
