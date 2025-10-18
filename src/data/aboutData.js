// src/data/aboutData.js
import aboutImage from '../assets/Images/aboutme.jpg';
import profileImage from '../assets/Images/profile.jpeg';

export const aboutData = {
  // 기본 정보
  profile: {
    name: "김영신",
    nameEng: "Young-Shin, Kim",
    heroImage: aboutImage,      // 상단 hero 이미지
    profileImage: profileImage, // 하단 증명사진
    contact: {
      email: "youngsshin0917@gmail.com",
      phone: "010-7387-8357",
      github: "https://github.com/youngsshin",
      portfolio: "제작 후 링크 첨부할 예정"
    }
  },

  // Quote Section
  quote: {
    small: "GOD IS THE GREATEST DESIGNER",
    large: "The universe is an intricate<br />masterpiece of beauty,<br />symmetry, and geometry<br />woven into the fabric of<br />existence."
  },

  // My Story Section
  story: {
    leftTitle: "MY",
    leftSubtitle: "Background",
    mainTitle: "MY STORY",
    content: [
      "My name is Joe Garner. I was born and raised in Southern California. In university, I started out as an art major pursuing a degree in Architecture, but then changed majors to study business. Specifically, I was interested in entrepreneurship and the creation of business startups from concept to launch.",
      "After graduating from university, I went to Japan with big ambitions. There, I met my business partner, and we conceived the next great app. The project took a few years and ultimately didn't succeed. However, I learned a lot from the experience, and it led me back to my passion for art and design."
    ]
  },

  // Certifications
  certifications: {
    title: "CERTIFICATIONS",
    items: [
      { name: "Web Design", source: "Flux Academy" },
      { name: "Web Design (Masterclass)", source: "" },
      { name: "Freelancing", source: "" }
    ]
  },

  // Awards
  awards: {
    title: "AWARDS",
    category: "CSS DESIGN AWARDS",
    items: [
      { name: "WEBSITE OF THE DAY (WOTD) ↗", date: "10/09/25" }
    ]
  },

  // Contact Section
  contact: {
    script: "Let's work together!",
    bold: "REACH OUT"
  },

  // Bottom Links
  bottomLinks: {
    left: [
      { text: "HOME", url: "/" },
      { text: "ABOUT", url: "/about" },
      { text: "WORKS", url: "#" }
    ],
    right: [
      { text: "INSTAGRAM", url: "#" },
      { text: "BEHANCE", url: "#" },
      { text: "X", url: "#" }
    ]
  }
};