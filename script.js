let imgs = [
  "images/mi-1.png",
  "images/csk-1.png",
  "images/mi-1.png",
  "images/csk-1.png",
  "images/rcb-1.png",
  "images/kkr-1.png",
  "images/rcb-1.png",
  "images/ronaldo.png",
  "images/kkr-1.png",
  "images/ronaldo.png",
  "images/rr-1.png",
  "images/rr-1.png",
];

// Shuffle array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Create cards
function createCards() {
  const grid = document.querySelector(".game_grid");
  grid.innerHTML = "";

  for (let i = 0; i < imgs.length; i++) {
    let card = document.createElement("div");
    card.className = "card";

    let img = document.createElement("img");
    img.style.width = "100px";
    img.src = imgs[i];
    card.appendChild(img);

    card.addEventListener("click", () => {
      if (
        card.classList.contains("open-box") ||
        card.classList.contains("matched-box")
      )
        return;

      card.classList.add("open-box");

      const openBoxes = document.querySelectorAll(".open-box");

      if (openBoxes.length === 2) {
        setTimeout(() => {
          const img1 = openBoxes[0].querySelector("img").src;
          const img2 = openBoxes[1].querySelector("img").src;

          if (img1 === img2) {
            openBoxes[0].classList.add("matched-box");
            openBoxes[1].classList.add("matched-box");
          }

          openBoxes[0].classList.remove("open-box");
          openBoxes[1].classList.remove("open-box");

          if (
            document.querySelectorAll(".matched-box").length === imgs.length
          ) {
            document.querySelector("#main").style.background =
              "radial-gradient(circle at center, #001f3f, #33ff00ff, #000814)";
            document.querySelector(".win-message").innerHTML = "🎉You won";
          }
        }, 500);
      }
    });

    grid.appendChild(card);
  }
}

shuffleArray(imgs);
createCards();

document.querySelector(".reset-btn").addEventListener("click", () => {
  document.querySelector("#main").style.background = "";
  document.querySelector(".win-message").innerHTML = "";
  shuffleArray(imgs);
  createCards();
});
