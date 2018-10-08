import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `transaction-list`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class TransactionList extends PolymerElement {
  /**
   * Template
   * @return {HTMLTemplateElement | !HTMLTemplateElement}
   */
  static get template() {
    return html`
      <!--suppress CssInvalidPseudoSelector -->
      <!--suppress CssUnresolvedCustomProperty -->
      <!--suppress CssUnresolvedCustomPropertySet -->
      <style>
        :host {
          display: block;
        }
      </style>
    `;
  }
  /**
   * Properties
   * @return {object}
   */
  static get properties() {
    return {
    };
  }
}

window.customElements.define('transaction-list', TransactionList);
