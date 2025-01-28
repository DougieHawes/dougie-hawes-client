import { useParams } from "react-router-dom";

import { Route1 } from "../../utils/routes";

import "./style.scss";

const WorkItem = () => {
  const params = useParams();
  const id = params.workid;

  return <Route1 content={<>{id}</>} />;
};

export default WorkItem;
