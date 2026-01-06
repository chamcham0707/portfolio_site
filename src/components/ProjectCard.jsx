import { Link } from "react-router-dom";
import "./ProjectCard.css";

const ProjectCard = ({ name, title, teamSize, duration, summary, tags }) => {
  return (
    <Link className="Project" to={`/project/${name}`}>
      <div className="title">{title}</div>
      <div className="duration">{duration}</div>
      <div className="team-size">개발 인원: {teamSize} 명</div>
      <ul className="summary">
        {summary.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <div className="tags">
        {tags.map((tag) => (
          <span key={tag} className="tag">
            #{tag} &nbsp;
          </span>
        ))}
      </div>
    </Link>
  );
};

export default ProjectCard;
