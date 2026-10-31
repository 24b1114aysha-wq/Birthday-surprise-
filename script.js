
function goTo(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

function toggleCard() {
  document.getElementById("envelope")
    .classList.toggle("open");
}

function reveal() {
  const message = document.getElementById("message");
  message.classList.add("show");

  // Birthday confetti!
  for (let i = 0; i < 35; i++) {
    const heart = document.createElement("span");
    heart.innerHTML = ["♡", "✦", "♥", "✨"][Math.floor(Math.random() * 4)];

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-20px";
    heart.style.zIndex = "20";
    heart.style.fontSize = "22px";
    heart.style.pointerEvents = "none";
    heart.style.transition = "transform 3s linear, opacity 3s";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.style.transform = `translateY(105vh) rotate(500deg)`;
      heart.style.opacity = "0";
    }, 50);

    setTimeout(() => heart.remove(), 3200);
  }
}

function toggleMusic() {
  const music = document.getElementById("music");
  const button = document.getElementById("musicButton");

  if (music.paused) {
    if (!music.src || music.src === location.href) {
      alert("https://open.spotify.com/track/5Ye5VX2e1B61Bx5GwZYPNd?si=6-2Bxs7_Q6WLVkolWoJ5TA&utm_source=copy-link");
      return;
    }

    music.play();
    button.innerText = "♫ Pause music";
  } else {
    music.pause();
    button.innerText = "♫ Play music";
  }
}
