import { Route1 } from "../../utils/routes";

import { Card1 } from "../../utils/cards";

import laadeedaaIcon from "../../../display/media/images/laadeedaa.png";

import "./style.scss";

const Work = () => {
  const workArray = [
    {
      id: 1,
      image: laadeedaaIcon,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec magna nec velit tristique ultrices. Sed vitae orci non metus viverra convallis. Fusce convallis magna in felis volutpat, id bibendum justo vulputate. Pellentesque dictum, sapien non pharetra auctor, mauris felis laoreet erat, vel tristique elit lorem ac purus. Cras non massa eget arcu aliquet lacinia. Etiam suscipit nisi in odio feugiat, nec malesuada erat tincidunt. Suspendisse vehicula tincidunt libero, sit amet cursus elit posuere ut. Integer vehicula arcu non ex scelerisque, sed facilisis augue dapibus. Proin rhoncus lacus a erat tincidunt tincidunt. Quisque scelerisque, magna nec bibendum hendrerit, enim ligula faucibus arcu, ut tincidunt mi purus ac augue. Fusce malesuada libero sit amet sapien malesuada, nec congue nunc facilisis.",
      title: "LaaDeeDaa",
    },
    {
      id: 2,
      image: laadeedaaIcon,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec magna nec velit tristique ultrices. Sed vitae orci non metus viverra convallis. Fusce convallis magna in felis volutpat, id bibendum justo vulputate. Pellentesque dictum, sapien non pharetra auctor, mauris felis laoreet erat, vel tristique elit lorem ac purus. Cras non massa eget arcu aliquet lacinia. Etiam suscipit nisi in odio feugiat, nec malesuada erat tincidunt. Suspendisse vehicula tincidunt libero, sit amet cursus elit posuere ut. Integer vehicula arcu non ex scelerisque, sed facilisis augue dapibus. Proin rhoncus lacus a erat tincidunt tincidunt. Quisque scelerisque, magna nec bibendum hendrerit, enim ligula faucibus arcu, ut tincidunt mi purus ac augue. Fusce malesuada libero sit amet sapien malesuada, nec congue nunc facilisis.",
      title: "LaaDeeDaa",
    },
    {
      id: 3,
      image: laadeedaaIcon,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec magna nec velit tristique ultrices. Sed vitae orci non metus viverra convallis. Fusce convallis magna in felis volutpat, id bibendum justo vulputate. Pellentesque dictum, sapien non pharetra auctor, mauris felis laoreet erat, vel tristique elit lorem ac purus. Cras non massa eget arcu aliquet lacinia. Etiam suscipit nisi in odio feugiat, nec malesuada erat tincidunt. Suspendisse vehicula tincidunt libero, sit amet cursus elit posuere ut. Integer vehicula arcu non ex scelerisque, sed facilisis augue dapibus. Proin rhoncus lacus a erat tincidunt tincidunt. Quisque scelerisque, magna nec bibendum hendrerit, enim ligula faucibus arcu, ut tincidunt mi purus ac augue. Fusce malesuada libero sit amet sapien malesuada, nec congue nunc facilisis.",
      title: "LaaDeeDaa",
    },
    {
      id: 4,
      image: laadeedaaIcon,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec magna nec velit tristique ultrices. Sed vitae orci non metus viverra convallis. Fusce convallis magna in felis volutpat, id bibendum justo vulputate. Pellentesque dictum, sapien non pharetra auctor, mauris felis laoreet erat, vel tristique elit lorem ac purus. Cras non massa eget arcu aliquet lacinia. Etiam suscipit nisi in odio feugiat, nec malesuada erat tincidunt. Suspendisse vehicula tincidunt libero, sit amet cursus elit posuere ut. Integer vehicula arcu non ex scelerisque, sed facilisis augue dapibus. Proin rhoncus lacus a erat tincidunt tincidunt. Quisque scelerisque, magna nec bibendum hendrerit, enim ligula faucibus arcu, ut tincidunt mi purus ac augue. Fusce malesuada libero sit amet sapien malesuada, nec congue nunc facilisis.",
      title: "LaaDeeDaa",
    },
    {
      id: 6,
      image: laadeedaaIcon,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec magna nec velit tristique ultrices. Sed vitae orci non metus viverra convallis. Fusce convallis magna in felis volutpat, id bibendum justo vulputate. Pellentesque dictum, sapien non pharetra auctor, mauris felis laoreet erat, vel tristique elit lorem ac purus. Cras non massa eget arcu aliquet lacinia. Etiam suscipit nisi in odio feugiat, nec malesuada erat tincidunt. Suspendisse vehicula tincidunt libero, sit amet cursus elit posuere ut. Integer vehicula arcu non ex scelerisque, sed facilisis augue dapibus. Proin rhoncus lacus a erat tincidunt tincidunt. Quisque scelerisque, magna nec bibendum hendrerit, enim ligula faucibus arcu, ut tincidunt mi purus ac augue. Fusce malesuada libero sit amet sapien malesuada, nec congue nunc facilisis.",
      title: "LaaDeeDaa",
    },
    {
      id: 7,
      image: laadeedaaIcon,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec magna nec velit tristique ultrices. Sed vitae orci non metus viverra convallis. Fusce convallis magna in felis volutpat, id bibendum justo vulputate. Pellentesque dictum, sapien non pharetra auctor, mauris felis laoreet erat, vel tristique elit lorem ac purus. Cras non massa eget arcu aliquet lacinia. Etiam suscipit nisi in odio feugiat, nec malesuada erat tincidunt. Suspendisse vehicula tincidunt libero, sit amet cursus elit posuere ut. Integer vehicula arcu non ex scelerisque, sed facilisis augue dapibus. Proin rhoncus lacus a erat tincidunt tincidunt. Quisque scelerisque, magna nec bibendum hendrerit, enim ligula faucibus arcu, ut tincidunt mi purus ac augue. Fusce malesuada libero sit amet sapien malesuada, nec congue nunc facilisis.",
      title: "LaaDeeDaa",
    },
    {
      id: 8,
      image: laadeedaaIcon,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec magna nec velit tristique ultrices. Sed vitae orci non metus viverra convallis. Fusce convallis magna in felis volutpat, id bibendum justo vulputate. Pellentesque dictum, sapien non pharetra auctor, mauris felis laoreet erat, vel tristique elit lorem ac purus. Cras non massa eget arcu aliquet lacinia. Etiam suscipit nisi in odio feugiat, nec malesuada erat tincidunt. Suspendisse vehicula tincidunt libero, sit amet cursus elit posuere ut. Integer vehicula arcu non ex scelerisque, sed facilisis augue dapibus. Proin rhoncus lacus a erat tincidunt tincidunt. Quisque scelerisque, magna nec bibendum hendrerit, enim ligula faucibus arcu, ut tincidunt mi purus ac augue. Fusce malesuada libero sit amet sapien malesuada, nec congue nunc facilisis.",
      title: "LaaDeeDaa",
    },
    {
      id: 9,
      image: laadeedaaIcon,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec magna nec velit tristique ultrices. Sed vitae orci non metus viverra convallis. Fusce convallis magna in felis volutpat, id bibendum justo vulputate. Pellentesque dictum, sapien non pharetra auctor, mauris felis laoreet erat, vel tristique elit lorem ac purus. Cras non massa eget arcu aliquet lacinia. Etiam suscipit nisi in odio feugiat, nec malesuada erat tincidunt. Suspendisse vehicula tincidunt libero, sit amet cursus elit posuere ut. Integer vehicula arcu non ex scelerisque, sed facilisis augue dapibus. Proin rhoncus lacus a erat tincidunt tincidunt. Quisque scelerisque, magna nec bibendum hendrerit, enim ligula faucibus arcu, ut tincidunt mi purus ac augue. Fusce malesuada libero sit amet sapien malesuada, nec congue nunc facilisis.",
      title: "LaaDeeDaa",
    },
  ];

  return (
    <Route1
      content={
        <>
          <div className="work-grid">
            {workArray.map((w) => (
              <Card1
                key={w.id}
                image={w.image}
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
