import { useState } from "react";
import { Route, Routes } from "react-router";

import Header from "./components/layout/Header";

import Blog from "./components/routes/public/Blog";
import BlogItem from "./components/routes/public/BlogItem";
import Home from "./components/routes/public/Home";
import Contact from "./components/routes/public/Contact";
import Work from "./components/routes/public/Work";
import WorkItem from "./components/routes/public/WorkItem";
import Skills from "./components/routes/public/Skills";
import SignIn from "./components/routes/public/SignIn";

import "./display/style/style.scss";

const App = () => {
  const [darkmode, setDarkmode] = useState(false);

  return (
    <div className={`app ${darkmode ? "app-darkmode" : "app-lightmode"}`}>
      <Header darkmode={darkmode} onClick={() => setDarkmode(!darkmode)} />
      <Routes>
        <Route path="/" element={<Home darkmode={darkmode} />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:blogid" element={<BlogItem />} />
        <Route path="/contact" element={<Contact darkmode={darkmode} />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:workid" element={<WorkItem />} />
        <Route path={process.env.REACT_APP_SIGNIN_URL} element={<SignIn />} />
      </Routes>
    </div>
  );
};

export default App;
