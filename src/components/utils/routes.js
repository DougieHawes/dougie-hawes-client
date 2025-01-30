import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import "./style.scss";

export const Route1 = ({ content, title }) => (
  <div className="route route1">
    <h2 className="route-title">{title}</h2>
    <div className="route-content">{content}</div>
  </div>
);

export const Route2 = ({ content }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/");
        return;
      }

      try {
        const decoded = jwtDecode(token);

        const currentTime = Date.now() / 1000;

        if (decoded.exp < currentTime) {
          localStorage.removeItem("token");
          navigate("/");
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    checkToken();
  }, []);

  return (
    <div className="route route2">
      <div className="route-content">{content}</div>
    </div>
  );
};
