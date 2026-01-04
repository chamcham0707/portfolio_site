import "./SkillItem.css";

import Skill from "./Skill";

const SkillItem = ({ field, skills = [] }) => {
  return (
    <div className="SkillItem">
      <div className="skill-field">{field}</div>
      <div className="skill-list">
        {skills.map((skill) => (
          <Skill key={skill.text} text={skill.text} color={skill.color} />
        ))}
      </div>
    </div>
  );
};

export default SkillItem;
