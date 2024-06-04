const spoilers = document.querySelector(".spoilers");
const spoilerItems = spoilers.querySelectorAll(".spoiler");
spoilerItems.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.classList.contains("spoiler-show")) {
      let text = e.querySelector(".text");
      text.style.maxHeight = null;
      text.style.paddingTop = null;
      e.classList.remove("spoiler-show");
    } else {
      let openedSpoiler = spoilers.querySelector(".spoiler-show");
      if (openedSpoiler) {
        let openedText = openedSpoiler.querySelector(".text");
        openedText.style.maxHeight = null;
        openedText.style.paddingTop = null;
        openedSpoiler.classList.remove("spoiler-show");
      }
      let content = e.querySelector(".text");
      content.style.paddingTop = "20px";
      content.style.maxHeight = content.scrollHeight + 20 + "px";
      e.classList.add("spoiler-show");
    }
  });
});
