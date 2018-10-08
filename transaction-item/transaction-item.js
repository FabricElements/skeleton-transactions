import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-item/paper-icon-item.js';
import '@polymer/paper-item/paper-item-body.js';
// import './../icons.js';
import '@polymer/iron-icon/iron-icon.js';

/**
 * `transaction-item`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class TransactionItem extends PolymerElement {
  /**
   * Template
   * @return {!HTMLTemplateElement|HTMLTemplateElement}
   */
  static get template() {
    return html`
      <!--suppress CssInvalidPseudoSelector -->
      <!--suppress CssUnresolvedCustomProperty -->
      <!--suppress CssUnresolvedCustomPropertySet -->
      <style is="custom-style">
        :host {
          display: block;
        }
      </style>
      <paper-icon-item>
        <iron-icon icon="transactions-icon:american-express" slot="item-icon">
          </iron-icon>
        <paper-item-body two-line>
          <div>(650) 555-1234</div>
          <div secondary>Mobile</div>
        </paper-item-body>
      </paper-icon-item>
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

window.customElements.define('transaction-item', TransactionItem);
