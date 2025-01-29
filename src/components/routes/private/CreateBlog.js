import { useState } from "react";

import { Route2 } from "../../utils/routes";

import { Button1 } from "../../utils/buttons";
import { Input1 } from "../../utils/inputs";

import "./style.scss";

const CreateBlog = () => {
  const [formData, setFromData] = useState({ image: "", text: "", title: "" });

  const { image, text, title } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <Route2
      content={
        <>
          <form className="form">
            <Input1 value={title} onChange={handleChange} />
            <Button1 onClick={handleSubmit} />
          </form>
        </>
      }
    />
  );
};

export default CreateBlog;
