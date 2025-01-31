import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Route2 } from "../../utils/routes";

import { Button1 } from "../../utils/buttons";
import { Input1, Input2 } from "../../utils/inputs";

import "./style.scss";

const CreateWork = () => {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    siteLink: "",
    codeLink: "",
    description: "",
  });

  const { title, image, siteLink, codeLink, description } = formData;

  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/");
    return;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <Route2
      content={
        <>
          <p className="sign-out" onClick={handleSignOut}>
            SIGN-OUT
          </p>
          <form className="form">
            <Input1
              name="title"
              value={title}
              onChange={handleChange}
              placeholder="enter title..."
            />
            <input
              type="file"
              name="image"
              onChange={handleChange}
              value={image}
            />
            <Input1
              name="siteLink"
              value={siteLink}
              onChange={handleChange}
              placeholder="enter siteLink..."
            />
            <Input1
              name="codeLink"
              value={codeLink}
              onChange={handleChange}
              placeholder="enter codeLink..."
            />
            <Input2
              name="description"
              value={description}
              onChange={handleChange}
              placeholder="enter description..."
            />
            <Button1 onClick={handleSubmit} text="submit" />
          </form>
        </>
      }
    />
  );
};

export default CreateWork;
