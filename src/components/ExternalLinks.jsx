import ExternalLink from "./ExternalLink";
import "./ExternalLinks.css";
import Title from "./Title";

const ExternalLinks = () => {
  return (
    <div className="ExternalLinks">
      <div className="external-links-container">
        <Title text={"Links"} color={"WHITE"} />
        <div className="external-link-list">
          <ExternalLink
            icon={<i className="fa-brands fa-github"></i>}
            text={" GitHub"}
            link={"https://github.com/chamcham0707?tab=repositories"}
            description={"소스 코드 저장소"}
          />
          <ExternalLink
            icon={<i className="fa-solid fa-blog"></i>}
            text={" Blog"}
            link={"https://chaemin0707.tistory.com/"}
            description={"TIL 등 개발 블로그"}
          />
        </div>
      </div>
    </div>
  );
};

export default ExternalLinks;
