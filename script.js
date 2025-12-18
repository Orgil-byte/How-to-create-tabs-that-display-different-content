const label = document.querySelector(".label");
const image = document.querySelector(`.images`);
const text = document.querySelector(`.text`);
const allBtns = document.querySelectorAll(`.image`);
const history = document.getElementById(`history`);
const vision = document.getElementById(`vision`);
const goals = document.getElementById(`goals`);

const historyBtn = () => {
  buttons(0);
};

const visionBtn = () => {
  buttons(1);
};

const goalsBtn = () => {
  buttons(2);
};

const buttons = (index) => {
  allBtns.forEach((image) => {
    if (index === 0) {
      image.classList.add(`image1`);
      image.classList.remove(`image2`);
      image.classList.remove(`image3`);
      history.classList.add(`background`);
      vision.classList.remove(`background`);
      goals.classList.remove(`background`);
      label.textContent = `History`;
      text.style.color = `#ff853f`;
    } else if (index === 1) {
      image.classList.remove(`image1`);
      image.classList.add(`image2`);
      image.classList.remove(`image3`);
      history.classList.remove(`background`);
      vision.classList.add(`background`);
      goals.classList.remove(`background`);
      label.textContent = `Vision`;
      text.style.color = `#96bbab`;
    } else if (index === 2) {
      image.classList.remove(`image1`);
      image.classList.remove(`image2`);
      image.classList.add(`image3`);
      history.classList.remove(`background`);
      vision.classList.remove(`background`);
      goals.classList.add(`background`);
      label.textContent = `Goals`;
      text.style.color = `#79c0d7`;
    }
  });
};
