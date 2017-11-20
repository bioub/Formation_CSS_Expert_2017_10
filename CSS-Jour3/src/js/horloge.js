import { currentLocaleTime } from 'utilities/time';
import '../scss/horloge.scss';

export class Horloge {
  /**
   * Le constructeur
   * @param {Element} container
   */
  constructor(container) {
    this._container = container;
  }

  start() {
    this._container.textContent = currentLocaleTime();
    setInterval(() => {
      this._container.textContent = currentLocaleTime();
    }, 1000);
  }
}
