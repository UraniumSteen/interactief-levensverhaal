const Bombaclad = document.getElementById('Bombaclad');
const homeLink = document.getElementById('homeLink');
let right = false
let right4 = false
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
  if (Bombaclad) {
    if (right) {
      Bombaclad.innerHTML = '<a href="deel1.html">deel 1</a>';
      Bombaclad.style.color = "green";
      Bombaclad.style.cursor = "pointer";
    } else {
      Bombaclad.innerHTML = '';
      Bombaclad.style.color = '';
      Bombaclad.style.cursor = '';
    }}
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
   const savedAnswer4 = localStorage.getItem('quizAnswer4');
  if (savedAnswer4) {
    const form4 = document.getElementById('quizForm4');
    if (form4 && form4.answer) {
      form4.answer.value = savedAnswer4;
    }

    if (savedAnswer4 === "Matrices") {
      const result4 = document.getElementById('result4');
      if (result4) {
        result4.textContent = "Knap gedaan! Matrices behoren namelijk tot de lineaire algebra, niet tot de calculus.";
        result4.style.color = "green";
      }
      right4 = true;
      updateCalculus();
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

function checkAnswer4() {
  console.log("checkAnswer4 gestart");
  const form4 = document.getElementById('quizForm4');
  if (!form4) return; // formulier bestaat niet, stoppen

  const result4 = document.getElementById('result4');
  const selected4 = form4.answer.value;

  if (!selected4) {
    result4.textContent = "Kies eerst een antwoord!";
    result4.style.color = "red";
    return;
  }

  if (selected4 === "Matrices") {
    result4.textContent = "Knap gedaan! Matrices behoren namelijk tot de lineaire algebra, niet tot de calculus.";
    result4.style.color = "green";
    right4 = true;          // Zet de status goed
    updateCalculus();       // Update de link
    localStorage.setItem('quizAnswer4', selected4);  // Opslaan
  } else {
    result4.textContent = "Helaas, dat is niet juist. Probeer het nog eens.";
    result4.style.color = "red";
    right4 = false;
    updateCalculus();
  }
}

function updateCalculus() {
  console.log("updateCalculus, right4:", right4);
  const Calculus = document.getElementById('Calculus');
  if (!Calculus) return;

  if (right4) {
    Calculus.innerHTML = '<a href="finale.html" id="Calculus">finale</a>';
    Calculus.style.color = "green";
    Calculus.style.cursor = "pointer";
  } else {
    Calculus.innerHTML = '';
    Calculus.style.color = '';
    Calculus.style.cursor = '';
  }
}

  const elementLi = document.getElementById('element');
  let answeredCorrectly = false;

  function checkAnswer() {
    const input = document.getElementById('answerInput');
    const result = document.getElementById('result');
    const answer = input.value.trim();

    const correctAnswer = "9193128131"; // Correcte code voor PaNpMgTlGa

    if (answer === "") {
      result.textContent = "Je moet eerst iets invullen!";
      result.style.color = "red";
      return;
    }

    if (answer === correctAnswer) {
      result.textContent = "Goed zo! Deel 2 is nu beschikbaar in de navigatie.";
      result.style.color = "green";
      answeredCorrectly = true;
      updateNavigation();
      localStorage.setItem('deel1Answer', answer);
    } else {
      result.textContent = "Helaas, dat is niet juist. Probeer het nog eens.";
      result.style.color = "red";
      answeredCorrectly = false;
      updateNavigation();
    }
  }

  function updateNavigation() {
    if (answeredCorrectly) {
      elementLi.innerHTML = '<a href="deel2.html">deel 2</a>';
      elementLi.style.color = "green";
      elementLi.style.cursor = "pointer";
    } else {
      elementLi.innerHTML = "";
      elementLi.style.color = "";
      elementLi.style.cursor = "";
    }
  }

  window.onload = function() {
    const savedAnswer = localStorage.getItem('deel1Answer');
    if (savedAnswer === "9193128131") {
      document.getElementById('answerInput').value = savedAnswer;
      answeredCorrectly = true;
      updateNavigation();
      const result = document.getElementById('result');
      result.textContent = "Goed zo! Deel 2 is nu beschikbaar in de navigatie.";
      result.style.color = "green";
    }
  };