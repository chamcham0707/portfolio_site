import "./AboutMe.css";
import InfoItem from "./InfoItem";
import Title from "./Title";

const AboutMe = () => {
  return (
    <div className="AboutMe">
      <div className="about-me-container">
        <Title text={"ABOUT ME"} />
        <div className="profile-info">
          <div className="info-column">
            <InfoItem
              icon={<i className="fa-solid fa-user"></i>}
              label={"이름"}
              value={"김채민"}
            />
            <InfoItem
              icon={<i className="fa-solid fa-calendar"></i>}
              label={"생년월일"}
              value={"99.07.07"}
            />
            <InfoItem
              icon={<i className="fa-solid fa-location-dot"></i>}
              label={"주소"}
              value={"경기도 수원시"}
            />
          </div>
          <div className="info-column">
            <InfoItem
              icon={<i className="fa-solid fa-phone"></i>}
              label={"핸드폰"}
              value={"010-6437-6306"}
            />
            <InfoItem
              icon={<i className="fa-solid fa-envelope"></i>}
              label={"이메일"}
              value={"cheamin6306@naver.com"}
            />
            <InfoItem
              icon={<i className="fa-solid fa-building-columns"></i>}
              label={"학력"}
              value={"한국공학대학교(게임공학과)"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
