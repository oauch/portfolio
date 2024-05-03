import CSS from "@/icons/CSS.svg";
import Discord from "@/icons/Discord.svg";
import Emotion from "@/icons/Emotion.svg";
import Figma from "@/icons/Figma.svg";
import Git from "@/icons/Git.svg";
import GitHub from "@/icons/GitHub.svg";
import HTML from "@/icons/HTML.svg";
import JS from "@/icons/JavaScript.svg";
import NextJS from "@/icons/NextJS.svg";
import React from "@/icons/React.svg";
import ReactQuery from "@/icons/ReactQuery.svg";
import StyledComponent from "@/icons/StyledComponents.svg";
import TS from "@/icons/TypeScript.svg";
import Velog from "@/icons/Velog.svg";
import Project2 from "@/images/About_P.avif";
import Jaws7 from "@/images/Account_Jaws.avif";
import Jaws6 from "@/images/Card_Jaws.avif";
import Christmas1 from "@/images/Christmas1.avif";
import Christmas2 from "@/images/Christmas2.avif";
import Christmas3 from "@/images/Christmas3.avif";
import Jaws5 from "@/images/DashBoard_Jaws.avif";
import HubsGitHub from "@/images/GitHubLogo.png";
import Project4 from "@/images/Hubs_P.avif";
import Jotai from "@/images/Jotai.png";
import Jaws1 from "@/images/Landing_Jaws.avif";
import Project1 from "@/images/Landing_P.avif";
import Rolling1 from "@/images/Landing_R.avif";
import Rolling2 from "@/images/Main_R.avif";
import Rolling5 from "@/images/Modal_R.avif";
import Jaws4 from "@/images/MyDashboard_Jaws.avif";
import Rolling3 from "@/images/NewPaper_R.avif";
import Project5 from "@/images/Proeject_P.avif";
import Rolling4 from "@/images/Rolling_R.avif";
import Jaws8 from "@/images/Setting_Jaws.avif";
import Jaws2 from "@/images/Signin_Jaws.avif";
import Jaws3 from "@/images/Singup_Jaws.avif";
import Project3 from "@/images/Skills_P.avif";
import Rolling6 from "@/images/Write_R.avif";
import Zustand from "@/images/Zustand.png";

export const USER = {
  NAME: "임윤혁",
  README: `규칙적인 삶을 좋아하고, 빠른 변화가 없더라도
  꾸준하게 하는 것을 좋아합니다.`,
  BIRTH: "1999.02.02",
  EMAIL: "dkssud4930@gmail.com",
  HUBS: {
    GITHUB: {
      width: 200,
      src: HubsGitHub,
      title: "소스 코드 저장소",
      name: "Github",
      href: "https://github.com/oauch",
    },
    BLOG: {
      width: 150,
      src: Velog,
      title: "블로그",
      name: "Velog",
      href: "https://velog.io/@oauch/posts",
    },
  },
  SKILLS: {
    FRONT_END: [
      { src: HTML, alt: "HTML" },
      { src: CSS, alt: "CSS" },
      { src: JS, alt: "JS" },
      { src: TS, alt: "TS" },
      { src: React, alt: "React" },
      { src: NextJS, alt: "NextJS" },
      { src: StyledComponent, alt: "StyledComponent" },
      { src: Emotion, alt: "Emotion" },
      { src: ReactQuery, alt: "ReactQuery" },
      { src: Jotai, alt: "Jotai" },
      { src: Zustand, alt: "Zustand" },
    ],
    VERSION: [
      { src: Git, alt: "Git" },
      { src: GitHub, alt: "GitHub" },
    ],
    COMMUNICATION: [
      { src: Discord, alt: "Discord" },
      { src: Figma, alt: "Figma" },
    ],
  },
  PROJECT: {
    ROLLING: {
      NAME: "롤링폴링",
      DATE: "2023.11 ~ 2023.11",
      HEADCOUNT: 4,
      GITHUB: "https://github.com/10-rolling/rollingPolling",
      URL: "https://rollingpolling.netlify.app/",
      SKILLS: ["React", "Styled-Components", "Zustand"],
      IMAGES: [
        { src: Rolling1, alt: "초기 페이지" },
        { src: Rolling2, alt: "메인 페이지" },
        { src: Rolling3, alt: "새로운 페이퍼 생성 페이지" },
        { src: Rolling4, alt: "롤링 페이퍼 페이지" },
        { src: Rolling5, alt: "롤링 페이퍼 모달창 (자세히 보기)" },
        { src: Rolling6, alt: "롤링 페이퍼 작성 페이지" },
      ],
    },
    CHRISTMAS: {
      NAME: "크리마스에 뭐하지?",
      DATE: "2023.11 ~ 2023.12",
      HEADCOUNT: 4,
      GITHUB: "https://github.com/CrispyFront/christmas",
      URL: "https://christmas-test.vercel.app/",
      SKILLS: [
        "React",
        "Next.js",
        "TypeScript",
        "Styled-Components",
        "StoryBook",
      ],
      IMAGES: [
        { src: Christmas1, alt: "메인 페이지" },
        { src: Christmas2, alt: "테스트 페이지" },
        { src: Christmas3, alt: "결과 페이지" },
      ],
    },
    JAWSTIFY: {
      NAME: "Jawstify",
      DATE: "2023.12 ~ 2024.01",
      HEADCOUNT: 5,
      GITHUB: "https://github.com/CodeJaws/Jawstify",
      URL: "https://taskify4.vercel.app/",
      SKILLS: [
        "TypeScript",
        "React",
        "Next.js",
        "Styled-Components",
        "Zustand",
      ],
      IMAGES: [
        { src: Jaws1, alt: "랜딩 페이지" },
        { src: Jaws2, alt: "로그인 페이지" },
        { src: Jaws3, alt: "회원가입 페이지" },
        { src: Jaws4, alt: "마이 대시보드 페이지" },
        { src: Jaws5, alt: "대시보드 페이지" },
        { src: Jaws6, alt: "카드 페이지" },
        { src: Jaws7, alt: "대시보드 관리 페이지" },
        { src: Jaws8, alt: "계정 관리 페이지" },
      ],
    },
    PORTFOLIO: {
      NAME: "포트폴리오",
      DATE: "2024.04 ~ 2024.04",
      HEADCOUNT: 1,
      GITHUB: "https://github.com/oauch/portfolio",
      URL: "https://yoonhyuk.vercel.app/",
      SKILLS: ["React", "Next.js", "Emotion"],
      IMAGES: [
        { src: Project1, alt: "메인 페이지" },
        { src: Project2, alt: "About Me" },
        { src: Project3, alt: "Skills" },
        { src: Project4, alt: "Hubs" },
        { src: Project5, alt: "Project" },
      ],
    },
  },
};
