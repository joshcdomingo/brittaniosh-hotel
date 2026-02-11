let guestName="Valentine", guestEmail="", room="";

function goToCheckout(){
  const nameInput=document.getElementById("guestName").value.trim();
  const emailInput=document.getElementById("guestEmail").value.trim();
  room=document.getElementById("roomType").value;
  if(!emailInput){ document.getElementById("emailError").style.display="block"; return; }
  document.getElementById("emailError").style.display="none";
  if(nameInput) guestName=nameInput;
  guestEmail=emailInput;
  document.getElementById("checkoutSummary").innerHTML=`<strong>${guestName}</strong><br>Room: <strong>${room}</strong><br>Stay: February 14 💗<br>Total: 15 Kisses`;
  screen1.classList.add("hidden"); screen2.classList.remove("hidden");
}

function pay(){
  document.getElementById("confirmationText").innerHTML=`<strong>${guestName}</strong>, your stay in the<br><strong>${room}</strong><br>at <strong>Brittaniosh Hotel</strong> is officially booked for <strong>February 14</strong> 💘<br><br>Confirmation email sent to <strong>${guestEmail}</strong> 💌`;
  emailjs.send("service_6jkv9f3","template_tls4eyo",{to_name:guestName,to_email:guestEmail,room:room,hotel:"Brittaniosh Hotel"});
  screen2.classList.add("hidden"); screen3.classList.remove("hidden");
}

function valentineYes(){
  alert("Well now instead of 1 guest there are 2 guests, you need to pay extra 💘");
  screen3.classList.add("hidden"); screen4.classList.remove("hidden");
  document.getElementById("extraFeeText").innerHTML=`Extra Resort Fee for 2 guests 💖`;
}

function payExtra(){
  alert("Payment received in kisses! 💕 Booking now complete for 2 guests!");
  document.getElementById("screen4").innerHTML=`<h1>All Set! 🎉</h1><p>${guestName}, the resort is ready for both of you 💗<br>See you on February 14 at <strong>Brittaniosh Hotel</strong> 🏰💘</p>`;
}

// Floating hearts
const heartsContainer=document.getElementById("hearts");
for(let i=0;i<35;i++){
  const heart=document.createElement("div");
  heart.classList.add("heart"); heart.innerHTML="❤";
  heart.style.left=Math.random()*100+"vw"; heart.style.top=Math.random()*100+"vh";
  heart.style.animationDuration=(4+Math.random()*6)+"s";
  heart.style.fontSize=(10+Math.random()*25)+"px";
  heartsContainer.appendChild(heart);
}
