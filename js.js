function checkAnswer() {
  const form = document.getElementById('quizForm');
  const result = document.getElementById('result');
  const selected = form.answer.value;
  const homeLink = document.getElementById('homeLink');

  if (!selected) {
    result.textContent = "Kies eerst een antwoord!";
    result.style.color = "red";
    return;
  }
  
  if (selected === "Amsterdam") {
    result.textContent = "Goed zo! Amsterdam is inderdaad de hoofdstad.";
    result.style.color = "green";

    homeLink.innerHTML = '🔓 <a href="home.html">Home</a>';
    homeLink.style.color = "green";
    homeLink.style.cursor = "pointer";
    document.querySelector('.disabled').classList.remove('disabled');

    // Antwoord opslaan in localStorage
    localStorage.setItem('quizAnswer', selected);

  } else {
    result.textContent = "Helaas, dat is niet juist. Probeer het nog eens.";
    result.style.color = "red";
  }
}

// Bij het laden van de pagina, ingevulde waarde terugzetten:
window.onload = function() {
  const savedAnswer = localStorage.getItem('quizAnswer');
  if (savedAnswer) {
    const form = document.getElementById('quizForm');
    form.answer.value = savedAnswer;

    // Optioneel: resultaat en home link meteen goed zetten
    if (savedAnswer === "Amsterdam") {
      const result = document.getElementById('result');
      const homeLink = document.getElementById('homeLink');

      result.textContent = "Goed zo! Amsterdam is inderdaad de hoofdstad.";
      result.style.color = "green";

      homeLink.innerHTML = '🔓 <a href="home.html">Home</a>';
      homeLink.style.color = "green";
      homeLink.style.cursor = "pointer";
      document.querySelector('.disabled').classList.remove('disabled');
    }
  }
};
