import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `transaction-filter`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class TransactionFilter extends PolymerElement {
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

window.customElements.define('transaction-filter', TransactionFilter);
