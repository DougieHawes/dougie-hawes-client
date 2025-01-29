import "./style.scss";

export const Button1 = ({ onClick, text }) => (
  <button className="button button1" onClick={onClick} type="submit">
    {text}
  </button>
);

export const Button2 = ({ to }) => (
  <a className="button button2" href={to} target="_blank">
    VIEW SITE
  </a>
);

export const Button3 = ({ to }) => (
  <a className="button button3" href={to} target="_blank">
    VIEW CODE
  </a>
);
