const projects = {
  elegntIcons: {
    title: "ELEGNT",
    keywords: "embodied conversational agent",
    image: "assets/projects/elegnt-icons-animation.gif",
    link: "https://machinelearning.apple.com/research/elegnt-expressive-functional-movement",
  },
  elegntScene: {
    title: "ELEGNT",
    keywords: "expressive motion generation, characterful robot",
    image: "assets/projects/elegnt-animation.gif",
    link: "https://machinelearning.apple.com/research/elegnt-expressive-functional-movement",
  },
  hand: {
    title: "Hand Development Kit",
    keywords: "wearable robot, human augmentation",
    image: "assets/projects/hand-kit.jpg",
    link: "https://yh7580.wixsite.com/work/hand",
  },
  handDemo: {
    title: "Hand Development Kit",
    keywords: "wearable robot, human augmentation",
    image: "assets/projects/hand-development-kit-demo.gif",
    link: "https://yh7580.wixsite.com/work/hand",
  },
  manipulation: {
    title: "Manipulation Research",
    keywords: "imitation learning, diffusion models",
    image: "assets/projects/manipulation-research.jpg",
    link: "#",
    notice: "Non-disclosure Project",
  },
  growing: {
    title: "Growing Robot",
    keywords: "design with living materials, more-than-human interaction",
    image: "assets/projects/growing-robot.jpg",
    link: "https://yh7580.wixsite.com/work/grow",
    crop: "short",
  },
  touchibo: {
    title: "Touchibo",
    keywords: "social robot, group interaction",
    image: "assets/projects/touchibo-animation.gif",
    link: "https://yh7580.wixsite.com/work/touchibo",
  },
  touchiboRobot: {
    title: "Touchibo",
    keywords: "human-robot touch interaction",
    image: "assets/projects/touchibo-nature-3900.jpg",
    link: "https://yh7580.wixsite.com/work/touchibo",
  },
  privacy: {
    title: "Robot for Privacy",
    keywords: "activity detection through low-fidelity imaging",
    video: "assets/projects/privacy.mp4",
    image: "assets/projects/privacy-cover.gif",
    link: "https://yh7580.wixsite.com/work/privacy",
  },
  shadowsense: {
    title: "ShadowSense",
    keywords: "tactile sensing, activity inference",
    image: "assets/projects/shadowsense.jpg",
    link: "https://yh7580.wixsite.com/work/shadowsense",
    crop: "shortTop",
  },
  shadowsensePanel: {
    title: "ShadowSense",
    keywords: "tactile sensing, activity inference",
    image: "assets/projects/shadowsense-2.png",
    link: "https://yh7580.wixsite.com/work/shadowsense",
  },
  emotion: {
    title: "EMOTION",
    keywords: "expressive gestures for humanoid",
    image: "assets/projects/emotion.jpg",
    link: "https://machinelearning.apple.com/research/emotion-expressive-motion",
  },
  emotionClose: {
    title: "EMOTION",
    keywords: "expressive gesture generation with LLMs and human feedback",
    image: "assets/projects/emotion-gestures-combined.gif",
    link: "https://machinelearning.apple.com/research/emotion-expressive-motion",
  },
  skinPhoto: {
    title: "Robot Skin",
    keywords: "soft robot, creative prototyping",
    image: "assets/projects/skin-nature-4170.jpg",
    link: "https://yh7580.wixsite.com/work/skin",
  },
  skin: {
    title: "Robot Skin",
    keywords: "soft robot, creative prototyping",
    image: "assets/projects/skin-stitched.gif",
    link: "https://yh7580.wixsite.com/work/skin",
  },
  goosebumps: {
    title: "Goosebumps",
    keywords: "tactile interaction, texture-changing robot",
    image: "assets/projects/goosebumps.jpg",
    link: "https://yh7580.wixsite.com/work/goosebumps",
  },
  swarms: {
    title: "Human-Robot Swarms",
    keywords: "evacuation robot",
    image: "assets/projects/swarms.jpg",
    link: "https://yh7580.wixsite.com/work/swarms",
  },
};

const layout = [
  [
    projects.elegntIcons,
    projects.privacy,
    projects.touchiboRobot,
    projects.emotionClose,
    projects.shadowsensePanel,
    projects.swarms,
  ],
  [
    projects.elegntScene,
    projects.skinPhoto,
    projects.skin,
    projects.shadowsense,
    projects.goosebumps,
  ],
  [
    projects.hand,
    projects.handDemo,
    projects.manipulation,
    projects.growing,
    projects.touchibo,
  ],
];

const wall = document.querySelector(".project-wall");

layout.forEach((columnProjects) => {
  const column = document.createElement("div");
  column.className = "project-column";
  wall.append(column);

  columnProjects.forEach((project) => {
    const tile = document.createElement("a");
    tile.className = project === projects.skin ? "project-tile skin-focus" : "project-tile";
    if (project.size) {
      tile.classList.add(`project-tile--${project.size}`);
    }
    if (project.crop) {
      tile.classList.add(`project-tile--${project.crop}`);
    }
    tile.href = project.link;
    tile.target = "_blank";
    tile.rel = "noreferrer";
    const media = project.video
      ? `<video src="${project.video}" poster="${project.image}" autoplay loop muted playsinline preload="auto" aria-label="${project.title}"></video>`
      : `<img src="${project.image}" alt="${project.title}" loading="lazy" />`;
    tile.innerHTML = `
      ${media}
      ${project.notice ? `<span class="tile-notice">${project.notice}</span>` : ""}
      <span class="tile-label"><strong>${project.title}</strong><span>${project.keywords}</span></span>
    `;
    column.append(tile);
  });
});

document.querySelectorAll("video").forEach((video) => {
  video.play().catch(() => {});
});
