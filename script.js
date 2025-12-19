const label = document.querySelector(".label");
const image = document.querySelector(`.image`);
const text = document.querySelector(`.text`);
const section = document.querySelectorAll(`.section`);

const contents = [
  {
    id: 0,
    picture: "image1",
    buttonActive: `background`,
    label: `History`,
    textColor: `#ff853f`,
  },
  {
    id: 1,
    picture: "image2",
    buttonActive: `background`,
    label: `Vision`,
    textColor: `#96bbab`,
  },
  {
    id: 2,
    picture: "image3",
    buttonActive: `background`,
    label: `Goals`,
    textColor: `#79c0d7`,
  },
];

const btn = (contentId) => {
  const content = contents.find((item) => item.id === contentId);
  if (content.id === contentId) {
    image.classList.add(content.picture);
    label.textContent = content.label;
    section.forEach((element) => {
      element.classList.add(content.buttonActive);
    });
  } else {
    image.classList.remove(content.picture);
    section.forEach((element) => {
      element.classList.remove(content.buttonActive);
    });
  }
};
