import { Ripple } from 'data-ripple';

const ripples = document.querySelectorAll('.--ripple');
for (const ripple of ripples) {
  new Ripple(ripple, {
    opacity: 1,
  });
}