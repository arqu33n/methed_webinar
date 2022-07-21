const headerNavBtn = document.querySelector(".header__nav-btn");
const headerNavigation = document.querySelector(".header__navigation");

headerNavBtn.addEventListener("click", () => {
  headerNavigation.classList.toggle("header__navigation_open");
});
const demoLessonBtn = document.querySelector(".start_demo_lesson_next_button");
demoLessonBtn.addEventListener("click", () => {
  self.sdk.track("banner", getEventProperties("click", true));
  console.log("Переход к Демо-уроку");
});
