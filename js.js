const Bombaclad = document.getElementById('Bombaclad');
const homeLink = document.getElementById('homeLink');
const elementLi = document.getElementById('element');
const langerhalsLi = document.getElementById('Langerhals');

let right = false;
let right4 = false;
let answeredCorrectly = false;
let correctLangerhals = false;

function checkAnswer() {
  const form = document.getElementById('quizForm');
  if (!form) return;
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
    right = true;
    updateBombaclad();
    localStorage.setItem('quizAnswer', selected);
  } else {
    result.textContent = "Helaas, dat is niet juist. Probeer het nog eens.";
  }
}

function updateBombaclad() {
  if (!Bombaclad) return;
  if (right) {
    Bombaclad.innerHTML = '<a href="deel1.html">deel 1</a>';
    Bombaclad.style.color = "green";
    Bombaclad.style.cursor = "pointer";
  } else {
    Bombaclad.innerHTML = '';
    Bombaclad.style.color = '';
    Bombaclad.style.cursor = '';
  }
}

function checkAnswerElementen() {
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
  if (!elementLi) return;
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

function checkAnswer4() {
  console.log("checkAnswer4 gestart");
  const form4 = document.getElementById('quizForm4');
  if (!form4) return;

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
    right4 = true;
    updateCalculus();
    localStorage.setItem('quizAnswer4', selected4);
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

function checkLangerhans() {
  const form = document.getElementById('quizFormLangerhans');
  if (!form) return;

  const result = document.getElementById('resultLangerhans');
  const selected = form.answer.value;

  if (!selected) {
    result.textContent = "Kies eerst een antwoord!";
    result.style.color = "red";
    return;
  }

  if (selected === "Alvleesklier") {
    result.textContent = "Correct! De eilandjes van Langerhans bevinden zich in de alvleesklier.";
    result.style.color = "green";
    correctLangerhals = true;
    updateLangerhalsLink();
    localStorage.setItem('quizAnswerLangerhans', selected);
  } else {
    result.textContent = "Helaas, dat is niet juist. Probeer het nog eens.";
    result.style.color = "red";
    correctLangerhals = false;
    updateLangerhalsLink();
    localStorage.removeItem('quizAnswerLangerhans');
  }
}

function updateLangerhalsLink() {
  if (!langerhalsLi) return;
  if (correctLangerhals) {
    langerhalsLi.innerHTML = '<a href="deel3.html">deel 3</a>';
    langerhalsLi.style.color = "green";
    langerhalsLi.style.cursor = "pointer";
  } else {
    langerhalsLi.innerHTML = "";
    langerhalsLi.style.color = "";
    langerhalsLi.style.cursor = "";
  }
}


  function clearResult(id) {
  const el = document.getElementById(id);
  if (el) {
    el.textContent = "";
    el.style.color = "";
  }
  }

window.onload = function() {
  // Eerst alle result elementen leegmaken (als ze bestaan)
  clearResult('result');
  clearResult('result4');
  clearResult('resultLangerhans');
  // Amsterdam quiz
  const savedAnswer = localStorage.getItem('quizAnswer');
  if (savedAnswer === "Amsterdam") {
    right = true;
    updateBombaclad();
    const result = document.getElementById('result');
    if (result) {
      result.textContent = "Goed zo! Amsterdam is inderdaad de hoofdstad.";
      result.style.color = "green";
    }
  }

  // Deel 1 quiz (elementen)
  const savedAnswer1 = localStorage.getItem('deel1Answer');
  if (savedAnswer1 === "9193128131") {
    answeredCorrectly = true;
    updateNavigation();
    const input = document.getElementById('answerInput');
    if (input) input.value = savedAnswer1;
    const result = document.getElementById('result');
    if (result) {
      result.textContent = "Goed zo! Deel 2 is nu beschikbaar in de navigatie.";
      result.style.color = "green";
    }
  }

  // Deel 4 quiz
  const savedAnswer4 = localStorage.getItem('quizAnswer4');
  if (savedAnswer4 === "Matrices") {
    right4 = true;
    updateCalculus();
    const result4 = document.getElementById('result4');
    if (result4) {
      result4.textContent = "Knap gedaan! Matrices behoren namelijk tot de lineaire algebra, niet tot de calculus.";
      result4.style.color = "green";
    }
  }

  // Langerhans quiz
  const savedAnswerLangerhans = localStorage.getItem('quizAnswerLangerhans');
  if (savedAnswerLangerhans === "Alvleesklier") {
    correctLangerhals = true;
    updateLangerhalsLink();
    const resultLangerhals = document.getElementById('resultLangerhans');
    if (resultLangerhals) {
      resultLangerhals.textContent = "Correct! De eilandjes van Langerhans bevinden zich in de alvleesklier.";
      resultLangerhals.style.color = "green";
    }
  }
};

const bom = document.getElementById('bom');
if (bom) {
  bom.addEventListener("click", function() {
    localStorage.clear();
    right = false;
    right4 = false;
    answeredCorrectly = false;
    correctLangerhals = false;
    updateBombaclad();
    updateCalculus();
    updateNavigation();
    updateLangerhalsLink();
  });
}
