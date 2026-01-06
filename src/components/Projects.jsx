import ProjectCard from "./ProjectCard";
import "./Projects.css";
import Title from "./Title";

const projects = [
  {
    name: "livealone",
    title: "실시간 영상 송출 라이브 커머스 사이트",
    teamSize: 5,
    duration: "2024.07 ~ 2024.08 (1개월)",
    summary: [
      "WebSocket을 사용한 실시간 채팅, 알림 기능 구현",
      "결제 API를 이용한 결제 시스템 구현",
      "AWS의 EC2, Certificate Manager, Route 53을 사용하여 프론트와 서버 배포",
      "Docker와 Docker Compose를 통한 개발 환경 구축",
      "보안을 위해 Https 프로토콜 사용",
      "설문지를 바탕으로 수집한 유저 피드백을 통한 서비스 개선",
    ],
    tags: [
      "Java",
      "Spring Boot",
      "MySQL",
      "MongoDB",
      "RTMP",
      "WebSocket",
      "Redis",
      "React",
      "AWS",
      "Docker",
      "Docker Compose",
      "Kafka",
    ],
  },
  {
    name: "random-defense",
    title: "Google Play Store 게임 서비스 출시",
    teamSize: 6,
    duration: "2024.06 ~ 2024.08 (2개월)",
    summary: [
      "비즈니스 서비스를 고려한 게임 기획",
      "Unity를 이용한 모바일 게임 제작",
      "서비스 출시 후 유저 반응 확인",
    ],
    tags: ["C#", "Unity"],
  },
  {
    name: "co-bot",
    title: "IOCP를 활용한 실시간 멀티 협동 게임",
    teamSize: 3,
    duration: "2024.01 ~ 2024.08 (8개월)",
    summary: [
      "패킷 유실이 일어나지 않도록 패킷 재조립 구현",
      "멀티 스레드 IOCP를 이용한 자체 서버 제작",
    ],
    tags: ["C++", "Unreal5", "IOCP", "MsSQL"],
  },
];

const Projects = () => {
  return (
    <div className="Projects">
      <div className="projects-container">
        <Title text={"Projects"} />
        <div className="project-list">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              teamSize={project.teamSize}
              duration={project.duration}
              summary={project.summary}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
