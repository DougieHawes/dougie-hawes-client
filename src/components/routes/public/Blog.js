import { Route1 } from "../../utils/routes";

import { Card3 } from "../../utils/cards";

import { blogArray } from "./data";

import "./style.scss";

const Blog = () => {
  return (
    <Route1
      content={
        <>
          <div className="blog-grid">
            {blogArray.map((b) => (
              <Card3
                key={b.id}
                image={b.image}
                link={b.id}
                title={b.title}
                date={b.date}
                text={b.text}
              />
            ))}
          </div>
        </>
      }
      title="Blog"
    />
  );
};

export default Blog;
