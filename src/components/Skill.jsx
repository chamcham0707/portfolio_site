import "./Skill.css";

const Skill = ({ text, color }) => {
  return <div className={`Skill Skill_${color}`}>{text}</div>;
};

export default Skill;
