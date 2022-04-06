import IMask from 'imask';

let timeInput = document.querySelector('.b-timeInput');
let maskOptions = {
  overwrite: true,
  autofix: true,
  mask: 'HH:MM',
  blocks: {
    HH: {
      mask: IMask.MaskedRange,
      placeholderChar: 'HH',
      from: 12,
      to: 15,
      maxLength: 2,
    },
    MM: {
      mask: IMask.MaskedRange,
      placeholderChar: 'MM',
      from: 0,
      to: 59,
      maxLength: 2,
    },
  },
};
let mask = IMask(timeInput, maskOptions);

let phoneMask = IMask(document.querySelector('.formPhoneNumber'), {
  mask: '+{7} (000) 000-00-00',
});