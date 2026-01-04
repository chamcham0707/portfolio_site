import "./ExternalLink.css";

const ExternalLink = ({ icon, text, link, description }) => {
  return (
    <a
      className="ExternalLink"
      href={`${link}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      {text}
      <p>{description}</p>
    </a>
  );
};

export default ExternalLink;
