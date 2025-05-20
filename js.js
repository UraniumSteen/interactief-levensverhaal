const Bombaclad = document.getElementById('Bombaclad');
const homeLink = document.getElementById('homeLink');
let right = false
function checkAnswer() {
  const form = document.getElementById('quizForm');
  if (!form) return; // Geen quiz op deze pagina, functie stopt hier
  const result = document.getElementById('result');
  const selected = form.answer.value;


  if (!selected) {
    result.textContent = "Kies eerst een antwoord!";
    result.style.color = "red";
    return;
  }
  
  if (selected === "Amsterdam") {
    result.textContent = "Goed zo! Amsterdam is inderdaad de hoofdstad.";
    result.style.color = "green";
    right = true;          // Zet right meteen op true
    updateBombaclad();     // Update direct de link



    // Antwoord opslaan in localStorage
    localStorage.setItem('quizAnswer', selected);

  } else {
    result.textContent = "Helaas, dat is niet juist. Probeer het nog eens.";
    result.style.color = "red";
  }
}
function updateBombaclad() {
  if (right) {
    Bombaclad.innerHTML = '<a href="a.html" id="Bomboclad">deel 1</a>';
    Bombaclad.style.color = "green";
    Bombaclad.style.cursor = "pointer";
  } else {
    Bombaclad.innerHTML = '';
    Bombaclad.style.color = '';
    Bombaclad.style.cursor = '';
  }
}

// Bij het laden van de pagina, ingevulde waarde terugzetten:
window.onload = function() {
  const savedAnswer = localStorage.getItem('quizAnswer');
  if (savedAnswer) {
    const form = document.getElementById('quizForm');
    if (form && form.answer) {
      form.answer.value = savedAnswer;
    }

    if (savedAnswer === "Amsterdam") {
      const result = document.getElementById('result');
      if (result) {
        result.textContent = "Goed zo! Amsterdam is inderdaad de hoofdstad.";
        result.style.color = "green";
      }
      right = true;
      updateBombaclad();
    }
  }
};
const bom = document.getElementById('bom');
if (bom) {
  bom.addEventListener("click", function() {
    localStorage.clear();
    right = false;
    updateBombaclad();
})};

bom.addEventListener("click", function a(){
  localStorage.clear()
  right = false;
})
