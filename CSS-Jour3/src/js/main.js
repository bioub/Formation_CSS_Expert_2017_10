import { Horloge } from './horloge.js';

const divElt = document.querySelector('.horloge');
const clock = new Horloge(divElt);
clock.start();
