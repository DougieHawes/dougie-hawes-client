import { Link } from "react-router-dom";

import { Route2 } from "../../utils/routes";

import "./style.scss";

const Dashboard = () => {
  return (
    <Route2
      content={
        <>
          <Link to="/slartybartfast/create-work">create-work</Link>
          <Link to="/slartybartfast/create-blog">create-blog</Link>
        </>
      }
      title="Dashboard"
    />
  );
};

export default Dashboard;
