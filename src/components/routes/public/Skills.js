import { useState } from "react";

import SkillModal from "./SkillModal";

import { Route1 } from "../../utils/routes";

import { Card2 } from "../../utils/cards";

import "./style.scss";

const Skills = ({ darkmode }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalDetails, setModalDetails] = useState({
    details: "",
    image: "",
    level: "",
    title: "",
  });

  const { details, image, level, title } = modalDetails;

  const toggleModal = (s) => {
    setModalDetails(s);
    setShowModal(!showModal);
  };

  return (
    <Route1
      content={
        <>
          <div className="skills-grid">
            {skillsArray.map((s) => (
              <Card2
                key={s.id}
                details={s.details}
                image={s.image}
                level={s.level}
                title={s.title}
                onClick={() => toggleModal(s)}
              />
            ))}
          </div>
          {showModal && (
            <SkillModal
              darkmode={darkmode}
              details={details}
              image={image}
              level={level}
              title={title}
              onClick={toggleModal}
            />
          )}
        </>
      }
      title="Skills"
    />
  );
};

export default Skills;
