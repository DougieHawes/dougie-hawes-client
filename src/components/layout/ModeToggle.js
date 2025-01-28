import darkModeIcon from "../../display/media/images/icons/darkmodeicon.svg";
import lightModeIcon from "../../display/media/images/icons/lightmodeicon.svg";

import "./style.scss";

const ModeToggle = ({ darkmode, onClick }) => {
  return (
    <div className="mode-toggle" onClick={onClick}>
      {darkmode ? (
        <img className="mode-toggle-image" src={lightModeIcon} alt="" />
      ) : (
        <img className="mode-toggle-image" src={darkModeIcon} alt="" />
      )}
    </div>
  );
};

export default ModeToggle;
