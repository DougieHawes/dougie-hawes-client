import { useParams } from "react-router-dom";

import { Route1 } from "../../utils/routes";

import "./style.scss";

const BlogItem = () => {
  const params = useParams();
  const id = params.blogid;

  return <Route1 content={<>{id}</>} />;
};

export default BlogItem;
