import { Route1 } from "../../utils/routes";

import { Card1 } from "../../utils/cards";

import { workArray } from "./data";

import "./style.scss";

const Work = () => {
  return (
    <Route1
      content={
        <>
          <div className="work-grid">
            {workArray.map((w) => (
              <Card1
                key={w.id}
                image={w.imageArray[0]}
                link={w.id}
                description={w.description}
                title={w.title}
              />
            ))}
          </div>
        </>
      }
      title="Work"
    />
  );
};

export default Work;
