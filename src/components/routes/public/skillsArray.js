import Bootstrap from "../../../display/media/images/skills/bootstrap.png";
import CSS from "../../../display/media/images/skills/css.png";
import FramerMotion from "../../../display/media/images/skills/framermotion.png";
import GraphQl from "../../../display/media/images/skills/graphql.png";
import GSAP from "../../../display/media/images/skills/gsap.png";
import HTML from "../../../display/media/images/skills/html.png";
import JavaScript from "../../../display/media/images/skills/javascript.png";
import JWT from "../../../display/media/images/skills/jwt.png";
import Less from "../../../display/media/images/skills/less.png";
import Materialize from "../../../display/media/images/skills/materialize.png";
import Mongo from "../../../display/media/images/icons/mongodb-logo.png";
import Next from "../../../display/media/images/skills/next.png";
import Node from "../../../display/media/images/icons/node-logo.png";
import Express from "../../../display/media/images/icons/express-logo.png";
import React from "../../../display/media/images/icons/react-logo.png";
import ReactNative from "../../../display/media/images/skills/react-native.png";
import Sass from "../../../display/media/images/skills/sass.png";
import Tailwind from "../../../display/media/images/skills/tailwind.png";
import Three from "../../../display/media/images/skills/three.png";
import Typescript from "../../../display/media/images/skills/typescript.png";
import Wordpress from "../../../display/media/images/skills/wordpress.png";

const skillsArray = [
  {
    title: "HTML5",
    image: HTML,
    level: "expert",
    details:
      "With expert-level HTML skills, I craft clean, semantic, and accessible markup that serves as the foundation for well-structured web applications. I have a deep understanding of HTML5 elements, including forms, multimedia, and semantic tags, ensuring optimized SEO and accessibility (WCAG compliance). My proficiency extends to writing efficient, reusable code that integrates seamlessly with CSS and JavaScript. Whether building complex layouts, optimizing performance, or troubleshooting rendering issues, I apply best practices to create fast, scalable, and future-proof web experiences across all devices and browsers.",
  },
  {
    title: "CSS3",
    image: CSS,
    level: "expert",
    details:
      "With expert-level CSS skills, I design responsive, visually engaging, and accessible user interfaces using modern techniques. I specialize in CSS3, including Flexbox, Grid, animations, and custom properties, ensuring pixel-perfect layouts across all devices. My approach balances aesthetics with performance, optimizing for speed and maintainability. I write clean, modular styles using methodologies like BEM and SCSS for scalability. From complex UI components to dark mode and theming, I craft seamless experiences while ensuring cross-browser compatibility and adherence to best practices in accessibility and performance.",
  },
  {
    title: "JavaScript",
    image: JavaScript,
    level: "expert",
    details:
      "With expert-level JavaScript skills, I develop dynamic, high-performance web applications using modern ES6+ features. I specialize in writing clean, efficient, and modular code, leveraging frameworks like React, Vue, or vanilla JS for interactivity. My expertise includes asynchronous programming (Promises, async/await), DOM manipulation, event handling, and performance optimization. I build scalable architectures using design patterns, ensuring maintainability and reusability. From API integration to state management and security best practices, I create seamless, engaging user experiences while ensuring cross-browser compatibility and efficient execution.",
  },
  {
    title: "Typescript",
    image: Typescript,
    level: "skilled",
    details:
      "With strong TypeScript skills, I write clean, scalable, and maintainable code by leveraging static typing, interfaces, and generics. I use TypeScript to enhance JavaScript applications, improving code reliability and reducing runtime errors. My experience includes working with TypeScript in modern frameworks like React and Node.js, ensuring type safety while integrating APIs and managing complex application states. I follow best practices in type inference, module organization, and code refactoring to build robust applications. While continually refining my expertise, I confidently apply TypeScript to streamline development and improve project maintainability.",
  },
  {
    title: "MongoDB",
    image: Mongo,
    level: "proficient",
    details:
      "With proficient MongoDB skills, I design and manage NoSQL databases optimized for performance and scalability. I structure efficient schemas using best practices in data modeling, indexing, and aggregation. My experience includes working with MongoDB in full-stack applications, integrating it seamlessly with Node.js and Express. I efficiently handle CRUD operations, complex queries, and data pipelines while ensuring data integrity and security. With a strong grasp of MongoDB Atlas, replication, and sharding, I build robust, scalable database solutions suited for modern web applications.",
  },
  {
    title: "Express.js",
    image: Express,
    level: "proficient",
    details:
      "With proficient Express.js skills, I build robust and scalable server-side applications using this minimal and flexible Node.js framework. I efficiently manage routing, middleware, and request handling to create RESTful APIs and dynamic web services. My experience includes integrating Express with databases (like MongoDB and SQL), handling authentication with JWT, and optimizing performance. I ensure clean, maintainable code by using best practices for error handling, routing conventions, and modularity. Whether building microservices or full-stack applications, I leverage Express.js to deliver fast and reliable server-side solutions.",
  },
  {
    title: "React.js",
    image: React,
    level: "expert",
    details:
      "With expert React.js skills, I build dynamic, responsive, and high-performance web applications using React’s powerful component-based architecture. I specialize in hooks, state management with Context API and Redux, and optimizing app performance through code splitting and lazy loading. I follow best practices for modularity and reusable components, ensuring scalability and maintainability. Beyond development, I actively mentor newcomers to React via social media, sharing tips, tutorials, and resources to help them grow. I’m committed to fostering a strong React community while delivering seamless, user-friendly web experiences.",
  },
  {
    title: "Node.js",
    image: Node,
    level: "proficient",
    details:
      "With proficient Node.js skills, I develop fast, scalable server-side applications using JavaScript. I have extensive experience building RESTful APIs, handling asynchronous operations with callbacks, promises, and async/await, and optimizing performance for high-traffic applications. I’m adept at integrating Node.js with databases like MongoDB and SQL, and utilizing popular frameworks like Express.js for efficient routing and middleware management. My expertise extends to handling authentication, implementing security best practices, and deploying applications using cloud platforms. I build reliable and maintainable back-end solutions for modern web apps with Node.js.",
  },
  {
    title: "React Native",
    image: ReactNative,
    level: "emerging",
    details:
      "With emerging proficiency in React Native, I’m actively building cross-platform mobile applications that deliver seamless user experiences on both iOS and Android. I leverage React Native’s component-based architecture and powerful features like hooks and navigation to create dynamic, responsive apps. While still deepening my expertise, I focus on optimizing app performance, integrating APIs, and ensuring smooth, native-like interactions. I’m continuously expanding my knowledge through hands-on projects and community involvement, and I'm eager to refine my skills to deliver high-quality mobile applications in the near future.",
  },
  {
    title: "Next.js",
    image: Next,
    level: "skilled",
    details:
      "With skilled proficiency in Next.js, I build fast, SEO-friendly, and scalable React applications. I leverage its powerful features like server-side rendering (SSR), static site generation (SSG), and API routes to create dynamic, high-performance web applications. I ensure seamless navigation with optimized routing and take advantage of Next.js’s built-in image optimization and performance enhancements. Whether working on e-commerce platforms, blogs, or complex web applications, I use Next.js to improve user experience, maintainability, and development efficiency, following best practices for clean, modular code and seamless deployment.",
  },
  {
    title: "JSON WebToken",
    image: JWT,
    level: "skilled",
    details:
      "With skilled proficiency in JSON Web Tokens (JWT), I implement secure authentication and authorization in web applications. I use JWT to manage user sessions, enabling stateless, scalable, and efficient token-based authentication. I am adept at generating and validating tokens, ensuring proper encryption and security best practices, and integrating JWT with RESTful APIs and server-side frameworks like Node.js and Express. My expertise ensures seamless user authentication workflows, token expiry management, and protection against common security vulnerabilities like token tampering and unauthorized access.",
  },
  {
    title: "FramerMotion.js",
    image: FramerMotion,
    level: "skilled",
    details:
      "With skilled proficiency in Framer Motion, I create smooth, interactive animations and transitions that enhance the user experience. I use this powerful library to design dynamic, fluid animations for React applications, leveraging features like gestures, keyframes, and scroll-based animations. My experience includes building custom animations, improving UI responsiveness, and enhancing visual storytelling without sacrificing performance. By integrating Framer Motion into my projects, I ensure seamless, engaging animations that captivate users while maintaining high responsiveness and smooth performance across devices and browsers.",
  },
  {
    title: "Three.js",
    image: Three,
    level: "emerging",
    details:
      "With emerging proficiency in Three.js, I am exploring the creation of interactive 3D graphics and visualizations in the browser. I am developing a deeper understanding of WebGL and leveraging Three.js’s powerful features like geometry, lighting, and animation to build immersive 3D experiences. While still refining my skills, I focus on optimizing performance, creating smooth animations, and integrating 3D models into web applications. I’m excited to expand my expertise in Three.js to deliver stunning visual effects and interactive 3D experiences for future projects.",
  },
  {
    title: "GSAP",
    image: GSAP,
    level: "emerging",
    details:
      "With emerging proficiency in GSAP (GreenSock Animation Platform), I’m exploring the world of high-performance, complex animations for web applications. I’m gaining experience creating smooth, interactive transitions, animations, and effects that enhance the user experience. From animating DOM elements to creating timeline-based animations, I focus on optimizing performance and ensuring seamless responsiveness across devices. As I continue to refine my skills, I’m excited to leverage GSAP’s powerful features to deliver engaging, fluid animations that bring web interfaces to life.",
  },
  {
    title: "Wordpress",
    image: Wordpress,
    level: "skilled",
    details:
      "With skilled proficiency in WordPress, I design and develop custom websites, themes, and plugins that are both user-friendly and visually appealing. I leverage the full power of the WordPress ecosystem, utilizing custom post types, taxonomies, and advanced custom fields to create dynamic, scalable sites. My expertise includes optimizing WordPress performance, ensuring security, and implementing SEO best practices. Whether building blogs, e-commerce platforms with WooCommerce, or complex business websites, I focus on delivering high-quality, responsive, and easily manageable WordPress solutions tailored to client needs.",
  },
  {
    title: "sass",
    image: Sass,
    level: "expert",
    details:
      "With expert-level proficiency in Sass, I write clean, efficient, and maintainable CSS using powerful features like variables, nesting, mixins, and functions. I use Sass to streamline the styling process, creating modular and scalable stylesheets that ensure consistent design across large projects. My expertise includes working with Sass in component-based design systems, leveraging its flexibility to improve code readability and reduce redundancy. I implement best practices for performance optimization, such as minimizing CSS output, and ensure cross-browser compatibility for seamless user experiences.",
  },
  {
    title: "less",
    image: Less,
    level: "proficient",
    details:
      "With proficient experience in LESS, I write efficient and maintainable CSS using its powerful features like variables, mixins, nesting, and operations. I use LESS to enhance my workflow, creating clean, modular stylesheets that are easy to scale and update. My skills include organizing large stylesheets into reusable components, ensuring consistent design across projects. I’m familiar with integrating LESS into complex web applications, optimizing performance, and ensuring cross-browser compatibility. By applying best practices, I streamline CSS management and improve overall development efficiency.",
  },
  {
    title: "Tailwind.css",
    image: Tailwind,
    level: "proficient",
    details:
      "With proficient experience in Tailwind CSS, I create highly customizable, responsive designs with utility-first principles. I leverage Tailwind’s extensive set of pre-built classes to rapidly build user interfaces, ensuring both design consistency and fast development cycles. My skills include using Tailwind’s configuration files to customize themes, breakpoints, and design systems to fit specific project needs. I focus on optimizing code by avoiding unnecessary styles and maintaining a clean, maintainable structure. Tailwind allows me to efficiently build scalable, modern websites while enhancing the overall user experience.",
  },
  {
    title: "Bootstrap.css",
    image: Bootstrap,
    level: "proficient",
    details:
      "With proficient experience in Bootstrap CSS, I design responsive, mobile-first web applications with ease. I utilize Bootstrap's grid system, pre-built components, and utility classes to rapidly develop consistent and visually appealing layouts. My expertise includes customizing Bootstrap themes, overriding default styles, and optimizing performance for fast load times. I integrate Bootstrap seamlessly into both small and large projects, ensuring cross-browser compatibility and accessibility. By leveraging Bootstrap’s flexibility and scalability, I create clean, functional, and user-friendly interfaces that deliver a great user experience across all devices.",
  },
  {
    title: "Materialize.css",
    image: Materialize,
    level: "proficient",
    details:
      "With proficient experience in Materialize CSS, I build clean, responsive, and modern web interfaces using its rich set of components and grid system. I leverage Materialize's pre-built design elements, such as navigation bars, cards, and modals, to quickly create user-friendly layouts that are both visually appealing and functional. My expertise includes customizing Materialize themes and integrating its features into custom web applications. By optimizing performance and ensuring accessibility, I deliver scalable and consistent design solutions that provide seamless experiences across devices and browsers.",
  },
  {
    title: "GraphQL",
    image: GraphQl,
    level: "skilled",
    details:
      "With skilled proficiency in GraphQL, I design efficient and flexible data-fetching solutions that streamline the communication between front-end and back-end systems. I leverage GraphQL’s ability to fetch only the necessary data, reducing over-fetching and optimizing performance. My experience includes working with GraphQL APIs to query, mutate, and subscribe to real-time data, as well as integrating it with popular frameworks like Apollo Client and Server. I focus on building scalable, maintainable architectures that enhance developer productivity and deliver a seamless, high-performance user experience.",
  },
];

export default skillsArray;
