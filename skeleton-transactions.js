import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `skeleton-transactions`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class SkeletonTransactions extends PolymerElement {
  /**
   * Template
   * @return {HTMLTemplateElement | !HTMLTemplateElement}
   */
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }

  /**
   * Properties
   * @return {object}
   */
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'skeleton-transactions',
      },
    };
  }
}

window.customElements.define('skeleton-transactions', SkeletonTransactions);
