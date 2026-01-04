import SkillItem from "./SkillItem";
import "./Skills.css";
import Title from "./Title";

const skills = {
  Language: [
    { text: "Java", color: "GREEN" },
    { text: "C++", color: "BLUE" },
    { text: "JavaScript", color: "YELLOW" },
  ],
  Backend: [
    { text: "Spring(Boot)", color: "GREEN" },
    { text: "MySQL", color: "BLUE" },
    { text: "JPA", color: "GREY" },
    { text: "Redis", color: "RED" },
  ],
  Frontend: [{ text: "React", color: "MINT" }],
  DevOps: [
    { text: "AWS", color: "ORANGE" },
    { text: "Docker", color: "BLUE" },
  ],
};

const Skills = () => {
  return (
    <div className="Skills">
      <div className="skills-container">
        <Title text={"SKILLS"} />
        <div className="skill-info-box">
          {Object.entries(skills).map(([field, items]) => (
            <SkillItem key={field} field={field} skills={items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
