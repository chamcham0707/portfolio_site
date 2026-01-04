import "./Title.css";

const Title = ({ text, color }) => {
  return <div className={`Title Title_${color}`}>{text}</div>;
};

export default Title;
