let accordeonSection = document.querySelectorAll('.c-accordeonSection');

// accordion({ query: '.c-accordeonSection__question' });

for (const element of accordeonSection) {
  let question = element.querySelector('.c-accordeonSection__question');
  let answer = element.querySelector('.c-accordeonSection__answer');
  let morph = element.querySelector('.b-morph');

  answer.style.height = 0;
  question.onclick = function () {
    let height = answer.firstChild.offsetHeight;
    if (!morph.classList.contains('--open')) {
      answer.style.height = height;
      morph.classList.add('--open');
      answer.classList.add('--open');
    } else {
      answer.style.height = 0;
      answer.classList.remove('--open');
      morph.classList.remove('--open');
    }
  };
}
