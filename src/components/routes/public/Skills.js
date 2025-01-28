import expressLogo from "../../../display/media/images/icons/express-logo.png";

import { Route1 } from "../../utils/routes";

import { Card2 } from "../../utils/cards";

import "./style.scss";

const Skills = () => {
  const skillsArray = [
    {
      id: 1,
      title: "HTML5",
      image: expressLogo,
      level: "expert",
    },
    {
      id: 2,
      title: "CSS3",
      image: expressLogo,
      level: "expert",
    },
    {
      id: 3,
      title: "JavaScript",
      image: expressLogo,
      level: "expert",
    },
    {
      id: 4,
      title: "MongoDB",
      image: expressLogo,
      level: "expert",
    },
    {
      id: 5,
      title: "Express.js",
      image: expressLogo,
      level: "expert",
    },
    {
      id: 6,
      title: "React.js",
      image: expressLogo,
      level: "expert",
    },
    {
      id: 7,
      title: "Node.js",
      image: expressLogo,
      level: "expert",
    },
    {
      id: 8,
      title: "SCSS",
      image: expressLogo,
      level: "expert",
    },
    {
      id: 9,
      title: "Less",
      image: expressLogo,
      level: "expert",
    },
    {
      id: 10,
      title: "Bootstrap.css",
      image: expressLogo,
      level: "expert",
    },
    {
      id: 11,
      title: "Materialise.css",
      image: expressLogo,
      level: "expert",
    },
    {
      id: 12,
      title: "Redux",
      image: expressLogo,
      level: "expert",
    },
    {
      id: 13,
      title: "React Native",
      image: expressLogo,
      level: "expert",
    },
    {
      id: 14,
      title: "Wordpress",
      image: expressLogo,
      level: "expert",
    },
    {
      id: 15,
      title: "Git",
      image: expressLogo,
      level: "expert",
    },
    {
      id: 16,
      title: "Netlify",
      image: expressLogo,
      level: "expert",
    },
    {
      id: 17,
      title: "Vue",
      image: expressLogo,
      level: "expert",
    },
    {
      id: 18,
      title: "Angular",
      image: expressLogo,
      level: "expert",
    },
  ];

  return (
    <Route1
      content={
        <>
          <div className="skills-grid">
            {skillsArray.map((s) => (
              <Card2
                key={s.id}
                image={s.image}
                level={s.level}
                title={s.title}
              />
            ))}
          </div>
        </>
      }
      title="Skills"
    />
  );
};

export default Skills;
