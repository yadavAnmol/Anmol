function about() {
  window.location.href = "about.html";
}

function skill() {
  window.location.href = "skill.html";
}

function project() {
  window.location.href = "project.html";
}

function game() {
  window.location.href = "game.html";
}


document.getElementById('feedbackForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    // Simulated feedback submission (can be connected to backend later)
    document.getElementById('feedbackMsg').textContent = "Thank you for your feedback, " + name + "!";
    this.reset();
  } else {
    document.getElementById('feedbackMsg').textContent = "Please fill in all fields.";
    document.getElementById('feedbackMsg').style.color = "red";
  }
});
