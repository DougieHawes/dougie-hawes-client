import { Route1 } from "../../utils/routes";

import { blogArray } from "./data";

import "./style.scss";

const BlogItem = () => {
  return (
    <Route1
      content={
        <>
          <div className="blog-item">
            <img className="blog-item-image" src={blogArray[0].image} alt="" />
            <h4 className="blog-item-title">{blogArray[0].title}</h4>
            <p className="blog-item-date">{blogArray[0].date}</p>
            <p
              className="blog-item-text"
              dangerouslySetInnerHTML={{ __html: blogArray[0].text }}
            ></p>
          </div>
        </>
      }
    />
  );
};

export default BlogItem;
