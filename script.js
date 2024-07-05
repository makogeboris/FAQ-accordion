"use strict";

const questions = document.querySelectorAll(".questions");
const answers = document.querySelectorAll(".answers");
const icons = document.querySelectorAll(".icons");

questions.forEach((question, index) => {
  question.addEventListener("click", () => {
    const isHidden = answers[index].classList.toggle("hidden");
    hideAllAnswers(index);
    updateIcons(index, isHidden);
  });
});

icons.forEach((icon, index) => {
  icon.addEventListener("click", () => {
    const isHidden = answers[index].classList.toggle("hidden");
    hideAllAnswers(index);
    updateIcons(index, isHidden);
  });
});

function hideAllAnswers(exceptIndex) {
  answers.forEach((answer, index) => {
    if (index !== exceptIndex) {
      answer.classList.add("hidden");
      updateIcons(index, true);
    }
  });
}

function updateIcons(index, isHidden) {
  icons[index].src = isHidden
    ? "assets/images/icon-plus.svg"
    : "assets/images/icon-minus.svg";
}
