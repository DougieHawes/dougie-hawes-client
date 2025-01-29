import expressLogo from "../../../display/media/images/icons/express-logo.png";

import "./style.scss";

const SkillModal = ({ details, image, level, onClick, title }) => {
  return (
    <div className="skill-modal-container">
      <div className="skill-modal">
        <h4 className="skill-modal-title">{title}</h4>
        <img className="skill-modal-image" src={image} alt="" />
        <p className="skill-modal-level">{level}</p>
        <p className="skill-modal-details">{details}</p>
        <div className="skill-modal-close" onClick={onClick}>
          X
        </div>
      </div>
      <div className="skill-modal-background" onClick={onClick}></div>
    </div>
  );
};

export default SkillModal;
