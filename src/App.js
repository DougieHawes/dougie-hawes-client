import { useState } from "react";
import { Route, Routes } from "react-router";

import Header from "./components/layout/Header";

import Home from "./components/routes/public/Home";
import Contact from "./components/routes/public/Contact";
import CurriculumVitae from "./components/routes/public/CurriculumVitae";
import Work from "./components/routes/public/Work";
import WorkItem from "./components/routes/public/WorkItem";
import Skills from "./components/routes/public/Skills";

import SignIn from "./components/routes/public/SignIn";
import CreateWork from "./components/routes/private/CreateWork";

import "./display/style/style.scss";

const App = () => {
  const [darkmode, setDarkmode] = useState(false);

  return (
    <div className={`app ${darkmode ? "app-darkmode" : "app-lightmode"}`}>
      <Header darkmode={darkmode} onClick={() => setDarkmode(!darkmode)} />
      <Routes>
        <Route path="/" element={<Home darkmode={darkmode} />} />
        <Route path="/contact" element={<Contact darkmode={darkmode} />} />
        <Route path="/curriculumvitae" element={<CurriculumVitae />} />
        <Route path="/skills" element={<Skills darkmode={darkmode} />} />
        <Route path="/work" element={<Work />} />
        <Route
          path="/work/:workid"
          element={<WorkItem darkmode={darkmode} />}
        />
        <Route path={process.env.REACT_APP_SIGNIN_URL} element={<SignIn />} />
        <Route
          path={`${process.env.REACT_APP_SIGNIN_URL}/create-work`}
          element={<CreateWork />}
        />
      </Routes>
    </div>
  );
};

export default App;
