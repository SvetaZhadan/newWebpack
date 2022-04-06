import autoComplete from '@tarekraafat/autocomplete.js';
import { source } from './sources';

const autoCompleteJS = new autoComplete({
  selector: '.autoComplete',
  data: {
    src: source,
  },
  // autoComplete.js Config Options
  resultItem: {
    highlight: true,
  },

  events: {
    input: {
      selection: (event) => {
        const selection = event.detail.selection.value;
        autoCompleteJS.input.value = selection;
      },
    },
  },

  resultsList: {
    element: (list, data) => {
      if (!data.results.length) {
        const message = document.createElement('div');
        message.setAttribute('class', 'no_result');
        message.innerHTML = `<span>Неверно введен адрес</span>`;
        list.prepend(message);
      }
    },
    noResults: true,
  },
});
