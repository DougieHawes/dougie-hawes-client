import { useState } from "react";

import githubLogoDark from "../../../display/media/images/icons/github-logo-dark.svg";
import githubLogoLight from "../../../display/media/images/icons/github-logo-light.svg";
import linkedinLogoDark from "../../../display/media/images/icons/linkedin-logo-dark.svg";
import linkedinLogoLight from "../../../display/media/images/icons/linkedin-logo-light.svg";
import phoneLogoDark from "../../../display/media/images/icons/phone-logo-dark.png";
import phoneLogoLight from "../../../display/media/images/icons/phone-logo-light.png";
import emailLogoDark from "../../../display/media/images/icons/email-logo-dark.png";
import emailLogoLight from "../../../display/media/images/icons/email-logo-light.png";
import cvLogoDark from "../../../display/media/images/icons/cv-logo-dark.png";
import cvLogoLight from "../../../display/media/images/icons/cv-logo-light.png";

import { Route1 } from "../../utils/routes";

import { Button1 } from "../../utils/buttons";
import { Input1, Input2 } from "../../utils/inputs";

import "./style.scss";
import { Link } from "react-router-dom";

const Contact = ({ darkmode }) => {
  const [formData, setFormData] = useState({ title: "", body: "", email: "" });
  const [error, setError] = useState("");

  const { title, body, email } = formData;

  const handleChange = (e) => {
    setError("");

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !body || !email) {
      setError("please complete all fields");
    }

    function isValidEmail(em) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      return emailRegex.test(em);
    }

    const emailValid = await isValidEmail(email);

    if (!emailValid) {
      setError("please enter a valid email");
    }

    setError("email sent successfully");
    setFormData({ title: "", body: "", email: "" });
  };

  return (
    <Route1
      content={
        <>
          <div className="contact-links-container">
            <a
              className="contact-link"
              href="https://www.linkedin.com/in/dougiehawes/"
              target="_blank"
            >
              <img
                className="contact-link-image"
                src={darkmode ? linkedinLogoDark : linkedinLogoLight}
                alt=""
              />
            </a>
            <a
              className="contact-link"
              href="https://github.com/DougieHawes"
              target="_blank"
            >
              <img
                className="contact-link-image"
                src={darkmode ? githubLogoDark : githubLogoLight}
                alt=""
              />
            </a>
            <a className="contact-link" target="_blank">
              <img
                className="contact-link-image"
                href="tel:+447742148280"
                src={darkmode ? phoneLogoDark : phoneLogoLight}
                alt=""
              />
            </a>
            <a
              className="contact-link"
              href="mailto:dougiehawes@hotmail.com"
              target="_blank"
            >
              <img
                className="contact-link-image"
                src={darkmode ? emailLogoDark : emailLogoLight}
                alt=""
              />
            </a>
            <Link className="contact-link" to="/curriculumvitae">
              <img
                className="contact-link-image"
                src={darkmode ? cvLogoDark : cvLogoLight}
                alt=""
              />
            </Link>
          </div>
          <div className="contact-form-container">
            <p className="contact-form-greet">
              Want my help? Want to collaborate? Whatever the reason, please
              contact me.
              {/* via the form below */}
            </p>
            {/* <div className="contact-form-error-container">{error}</div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <Input1
                name="title"
                onChange={handleChange}
                placeholder="enter title..."
                value={title}
              />
              <Input2
                name="body"
                onChange={handleChange}
                placeholder="enter text..."
                value={body}
              />
              <Input1
                name="email"
                onChange={handleChange}
                placeholder="enter your email..."
                value={email}
              />
              <Button1 text="SEND" />
            </form> */}
          </div>
        </>
      }
      title="Contact"
    />
  );
};

export default Contact;
