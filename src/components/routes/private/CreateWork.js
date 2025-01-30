import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Route2 } from "../../utils/routes";

import { Button1 } from "../../utils/buttons";
import { Input1 } from "../../utils/inputs";

import "./style.scss";

const CreateWork = () => {
  const [formData, setFormData] = useState({ title: "" });

  const { title } = formData;

  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");

    navigate("/");
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
              value={title}
              onChange={handleChange}
              placeholder="enter title..."
            />
            <Button1 onClick={handleSubmit} text="submit" />
          </form>
        </>
      }
    />
  );
};

export default CreateWork;
