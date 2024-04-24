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
import Jaws7 from "@/images/Account_Jaws.avif";
import Jaws6 from "@/images/Card_Jaws.avif";
import Jaws5 from "@/images/DashBoard_Jaws.avif";
import Jotai from "@/images/Jotai.png";
import Jaws1 from "@/images/Landing_Jaws.avif";
import Rolling1 from "@/images/Landing_R.avif";
import Rolling2 from "@/images/Main_R.avif";
import Rolling5 from "@/images/Modal_R.avif";
import Jaws4 from "@/images/MyDashboard_Jaws.avif";
import Rolling3 from "@/images/NewPaper_R.avif";
import Rolling4 from "@/images/Rolling_R.avif";
import Jaws8 from "@/images/Setting_Jaws.avif";
import Jaws2 from "@/images/Signin_Jaws.avif";
import Jaws3 from "@/images/Singup_Jaws.avif";
import Rolling6 from "@/images/Write_R.avif";
import Zustand from "@/images/Zustand.png";

export const USER = {
  NAME: "임윤혁",
  README: `규칙적인 삶을 좋아하고, 빠른 변화가 없더라도
  꾸준하게 하는 것을 좋아합니다.`,
  BIRTH: "1999.02.02",
  EMAIL: "dkssud4930@gmail.com",
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
    ONE: {
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
    SECOND: {
      NAME: "롤링폴링",
      DATE: "2023.11 ~ 2023.11",
      HEADCOUNT: 4,
      GITHUB: "https://github.com/10-rolling/rollingPolling",
      URL: "https://rollingpolling.netlify.app/",
      SKILLS: ["React", "Styled-Components", "Zustand"],
      IMAGES: [
        { src: Rolling1, alt: "초기 페이지" },
        { src: Rolling2, alt: "메인 화명" },
        { src: Rolling3, alt: "새로운 페이퍼 생성 페이지" },
        { src: Rolling4, alt: "롤링 페이퍼 페이지" },
        { src: Rolling5, alt: "롤링 페이퍼 모달창 (자세히 보기)" },
        { src: Rolling6, alt: "롤링 페이퍼 작성 페이지" },
      ],
    },
  },
};
