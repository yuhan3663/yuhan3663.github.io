const projects = {
  elegntIcons: {
    title: "ELEGNT",
    keywords: "expressive movement",
    image: "assets/projects/elegnt.jpg",
    link: "https://machinelearning.apple.com/research/elegnt-expressive-functional-movement",
  },
  elegntScene: {
    title: "ELEGNT",
    keywords: "functional movement",
    image: "assets/projects/elegnt-animation.gif",
    link: "https://machinelearning.apple.com/research/elegnt-expressive-functional-movement",
  },
  hand: {
    title: "Hand Development Kit",
    keywords: "robot hand",
    image: "assets/projects/hand-kit.jpg",
    link: "https://yh7580.wixsite.com/work/hand",
  },
  handDemo: {
    title: "Hand Development Kit",
    keywords: "wearable hand interface",
    image: "assets/projects/hand-development-kit-demo.gif",
    link: "https://yh7580.wixsite.com/work/hand",
  },
  growing: {
    title: "Growing Robot",
    keywords: "plant robot",
    image: "assets/projects/growing-robot.jpg",
    link: "https://yh7580.wixsite.com/work/grow",
  },
  touchibo: {
    title: "Touchibo",
    keywords: "social robot",
    image: "assets/projects/touchibo.jpg",
    link: "https://yh7580.wixsite.com/work/touchibo",
  },
  touchiboRobot: {
    title: "Touchibo",
    keywords: "touch interaction",
    image: "assets/projects/touchibo-2.jpg",
    link: "https://yh7580.wixsite.com/work/touchibo",
  },
  privacy: {
    title: "Robot for Privacy",
    keywords: "privacy",
    video: "assets/projects/privacy.mp4",
    image: "assets/projects/privacy-cover.gif",
    link: "https://yh7580.wixsite.com/work/privacy",
  },
  shadowsense: {
    title: "ShadowSense",
    keywords: "shadow sensing",
    image: "assets/projects/shadowsense.jpg",
    link: "https://yh7580.wixsite.com/work/shadowsense",
  },
  shadowsensePanel: {
    title: "ShadowSense",
    keywords: "soft touch sensing",
    image: "assets/projects/shadowsense-2.png",
    link: "https://yh7580.wixsite.com/work/shadowsense",
  },
  emotion: {
    title: "EMOTION",
    keywords: "humanoid motion",
    image: "assets/projects/emotion.jpg",
    link: "https://machinelearning.apple.com/research/emotion-expressive-motion",
  },
  skin: {
    title: "Robot Skin",
    keywords: "texture",
    video: "assets/projects/skin.mp4",
    image: "assets/projects/skin-cover.gif",
    link: "https://yh7580.wixsite.com/work/skin",
  },
  goosebumps: {
    title: "Goosebumps",
    keywords: "affective texture",
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
    projects.emotion,
    projects.touchiboRobot,
    projects.swarms,
  ],
  [
    projects.elegntScene,
    projects.touchibo,
    projects.shadowsense,
    projects.goosebumps,
  ],
  [
    projects.hand,
    projects.handDemo,
    projects.growing,
    projects.shadowsensePanel,
    projects.skin,
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
    tile.href = project.link;
    tile.target = "_blank";
    tile.rel = "noreferrer";
    const media = project.video
      ? `<video src="${project.video}" poster="${project.image}" autoplay loop muted playsinline preload="auto" aria-label="${project.title}"></video>`
      : `<img src="${project.image}" alt="${project.title}" loading="lazy" />`;
    tile.innerHTML = `
      ${media}
      <span class="tile-label"><strong>${project.title}</strong><span>${project.keywords}</span></span>
    `;
    column.append(tile);
  });
});

document.querySelectorAll("video").forEach((video) => {
  video.play().catch(() => {});
});
