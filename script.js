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
    text: `History is the systematic study of the past, focusing primarily
     on the human past. As an academic discipline, it analyses and interprets
      evidence to construct narratives about what happened and explain why it happened. `,
  },
  {
    id: 1,
    picture: "image2",
    buttonActive: `background`,
    label: `Vision`,
    textColor: `#96bbab`,
    text: `Vision of humans and other organisms depends on several organs such as the
     lens of the eye, and any vision correcting devices, which use optics to focus the image.
     The eyes of many animals contains a lens that focuses the light of its surroundings onto the retina of the eye. `,
  },
  {
    id: 2,
    picture: "image3",
    buttonActive: `background`,
    label: `Goals`,
    textColor: `#79c0d7`,
    text: `A goal or objective is an idea of the future or desired result 
    that a person or a group of people envision, plan, and commit to achieve.
    People endeavour to reach goals within a finite time by setting deadlines.`,
  },
];

const btn = (contentId) => {
  const content = contents.find((item) => item.id === contentId);

  image.classList.remove(`image1`, `image2`, `image3`);
  image.classList.add(content.picture);

  label.textContent = content.label;

  section.forEach((element, id) => {
    if (id === contentId) {
      element.classList.add(content.buttonActive);
    } else {
      element.classList.remove(content.buttonActive);
    }
  });

  text.textContent = content.text;
  text.style.color = content.textColor;
};
