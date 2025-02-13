import { Link } from "react-router-dom";

import { Route1 } from "../../utils/routes";

import CV from "../../../display/media/images/layout/CV.png";

const CurriculumVitae = () => {
  return (
    <Route1
      content={
        <div className="curriculum-vitae">
          <Link className="curriculum-vitae-link" to="/contact">
            return to contact
          </Link>
          <img src={CV} alt="curriculum vitae" />
        </div>
      }
      title="curriculum vitae"
    />
  );
};

export default CurriculumVitae;
