import { Route1 } from "../../utils/routes";

import { Card3 } from "../../utils/cards";

import blogImage from "../../../display/media/images/layout/blog-image.jpg";

import "./style.scss";

const Blog = () => {
  const blogArray = [
    {
      id: 1,
      image: blogImage,
      title: "new machine has arrived",
      date: "28.01.25",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec magna nec velit tristique ultrices. Sed vitae orci non metus viverra convallis. Fusce convallis magna in felis volutpat, id bibendum justo vulputate. Pellentesque dictum, sapien non pharetra auctor, mauris felis laoreet erat, vel tristique elit lorem ac purus. Cras non massa eget arcu aliquet lacinia. Etiam suscipit nisi in odio feugiat, nec malesuada erat tincidunt. Suspendisse vehicula tincidunt libero, sit amet cursus elit posuere ut. Integer vehicula arcu non ex scelerisque, sed facilisis augue dapibus. Proin rhoncus lacus a erat tincidunt tincidunt. Quisque scelerisque, magna nec bibendum hendrerit, enim ligula faucibus arcu, ut tincidunt mi purus ac augue. Fusce malesuada libero sit amet sapien malesuada, nec congue nunc facilisis.",
    },
    {
      id: 2,
      image: blogImage,
      title: "new machine has arrived",
      date: "28.01.25",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec magna nec velit tristique ultrices. Sed vitae orci non metus viverra convallis. Fusce convallis magna in felis volutpat, id bibendum justo vulputate. Pellentesque dictum, sapien non pharetra auctor, mauris felis laoreet erat, vel tristique elit lorem ac purus. Cras non massa eget arcu aliquet lacinia. Etiam suscipit nisi in odio feugiat, nec malesuada erat tincidunt. Suspendisse vehicula tincidunt libero, sit amet cursus elit posuere ut. Integer vehicula arcu non ex scelerisque, sed facilisis augue dapibus. Proin rhoncus lacus a erat tincidunt tincidunt. Quisque scelerisque, magna nec bibendum hendrerit, enim ligula faucibus arcu, ut tincidunt mi purus ac augue. Fusce malesuada libero sit amet sapien malesuada, nec congue nunc facilisis.",
    },
    {
      id: 3,
      image: blogImage,
      title: "new machine has arrived",
      date: "28.01.25",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec magna nec velit tristique ultrices. Sed vitae orci non metus viverra convallis. Fusce convallis magna in felis volutpat, id bibendum justo vulputate. Pellentesque dictum, sapien non pharetra auctor, mauris felis laoreet erat, vel tristique elit lorem ac purus. Cras non massa eget arcu aliquet lacinia. Etiam suscipit nisi in odio feugiat, nec malesuada erat tincidunt. Suspendisse vehicula tincidunt libero, sit amet cursus elit posuere ut. Integer vehicula arcu non ex scelerisque, sed facilisis augue dapibus. Proin rhoncus lacus a erat tincidunt tincidunt. Quisque scelerisque, magna nec bibendum hendrerit, enim ligula faucibus arcu, ut tincidunt mi purus ac augue. Fusce malesuada libero sit amet sapien malesuada, nec congue nunc facilisis.",
    },
  ];

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
