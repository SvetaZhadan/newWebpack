let accordeonSection = document.querySelectorAll('.c-accordeonSection');

// accordion({ query: '.c-accordeonSection__question' });

for (const element of accordeonSection) {
  let question = element.querySelector('.c-accordeonSection__question');
  let answer = element.querySelector('.c-accordeonSection__answer');
  let morph = element.querySelector('.b-morph');
  question.onclick = function () {
    if (morph.classList.contains('--open')) {
      morph.classList.remove('--open');
      answer.classList.remove('--open');
    } else {
      answer.classList.add('--open');
      morph.classList.add('--open');
    }
  };
}
