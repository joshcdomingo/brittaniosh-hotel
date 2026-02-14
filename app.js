let guestName = "Valentine", guestEmail = "", room = "";

const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");
const screen4 = document.getElementById("screen4");

/* Booking Flow */
function goToCheckout() {
  const nameInput = document.getElementById("guestName").value.trim();
  const emailInput = document.getElementById("guestEmail").value.trim();
  room = document.getElementById("roomType").value;

  if (!emailInput) {
    document.getElementById("emailError").style.display = "block";
    return;
  }
  document.getElementById("emailError").style.display = "none";

  if (nameInput) guestName = nameInput;
  guestEmail = emailInput;

  document.getElementById("checkoutSummary").innerHTML =
    `<strong>${guestName}</strong><br>
     Room: <strong>${room}</strong><br>
     Stay: February 14 💗<br>
     Total: 15 Kisses`;

  screen1.classList.add("hidden");
  screen2.classList.remove("hidden");
}

function pay() {
  document.getElementById("confirmationText").innerHTML =
    `<strong>${guestName}</strong>, your stay in the<br>
     <strong>${room}</strong><br>
     at <strong>Brittaniosh Hotel</strong> is officially booked for 
     <strong>February 14</strong> 💘<br><br>
     Confirmation email sent to <strong>${guestEmail}</strong> 💌`;

  emailjs.send("service_6jkv9f3", "template_tls4eyo", {
    to_name: guestName,
    to_email: guestEmail,
    room: room,
    hotel: "Brittaniosh Hotel"
  });

  screen2.classList.add("hidden");
  screen3.classList.remove("hidden");
}

function valentineYes() {
  alert("Well now instead of 1 guest there are 2 guests 💘");
  screen3.classList.add("hidden");
  screen4.classList.remove("hidden");
  document.getElementById("extraFeeText").innerHTML = `Extra Resort Fee for 2 guests 💖`;
}

function payExtra() {
  document.getElementById("screen4").innerHTML =
    `<h1>All Set! 🎉</h1>
     <p>${guestName}, the resort is ready for both of you 💗<br>
     See you on February 14 at <strong>Brittaniosh Hotel</strong> 🏰💘</p>`;
}

/* Secret Heart */
const heartsContainer = document.getElementById("hearts");
let secretIndex = Math.floor(Math.random() * 35);

for (let i = 0; i < 35; i++) {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  if (i === secretIndex) {
    heart.classList.add("secret-heart");
    heart.innerHTML = "💖";
    heart.style.cursor = "pointer";
    heart.style.left = "50vw";
    heart.style.top = "60vh";
    heart.style.fontSize = "40px";
    heart.addEventListener("click", openSecretPage);
  } else {
    heart.innerHTML = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = Math.random() * 100 + "vh";
    heart.style.fontSize = (10 + Math.random() * 25) + "px";
  }

  heart.style.animationDuration = (4 + Math.random() * 6) + "s";
  heartsContainer.appendChild(heart);
}

// Bottom right fixed secret heart
const secretHeart = document.createElement("div");
secretHeart.innerHTML = "💖";
secretHeart.className = "secret-heart-fixed";
secretHeart.addEventListener("click", openSecretPage);
document.body.appendChild(secretHeart);

/* Secret / Girlfriend Pages */

function openSecretPage() {
  document.querySelectorAll(".container").forEach(el => el.classList.add("hidden"));
  document.getElementById("hearts").style.display = "none";

  const secretPage = document.createElement("div");
  secretPage.className = "girlfriend-page";

  secretPage.innerHTML = `
    <div class="celebration-hearts"></div>

    <div class="gf-card">
      <h1 class="gf-title">💖 Surprise!</h1>

      <p class="gf-text" style="max-width:600px; font-size:20px;">
        It was great that you booked a stay and became my Valentine 💘<br><br>
        But I actually want you to be my partner to run the hotel 🏰✨<br><br>
        So how about we change that…
      </p>

      <h2 class="gf-big">
        And you be my girlfriend instead? 💕
      </h2>

      <div class="secret-buttons">
        <button class="yes-btn" onclick="girlfriendYes()">Yes 💖</button>
        <button class="no-btn" onclick="runawayButton(this)">No</button>
      </div>
    </div>
  `;

  document.body.appendChild(secretPage);
  createCelebrationHearts();
}

function girlfriendYes() {
  document.body.innerHTML = `
    <div class="girlfriend-page">
      <div class="celebration-hearts"></div>
      <div class="gf-card">
        <img src="brittnjoshcollage.jpg" alt="Us" class="gf-image" />
        <h1 class="gf-title">💖 Yay!</h1>
        <p class="gf-text">
          Guess we're partners now—or should I say boyfriend and girlfriend now 💖<br><br>
          Welcome to Brittaniosh :)
        </p>
      </div>
    </div>
  `;
  createCelebrationHearts();
}

function createCelebrationHearts() {
  const container = document.querySelector(".celebration-hearts");
  for (let i = 0; i < 40; i++) {
    const heart = document.createElement("div");
    heart.classList.add("celebration-heart");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";
    container.appendChild(heart);
  }
}

function runawayButton(button) {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  button.style.position = "absolute";
  button.style.left = x + "px";
  button.style.top = y + "px";
}
