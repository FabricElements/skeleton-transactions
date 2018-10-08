import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/paper-styles/color.js';

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
      <!--suppress CssInvalidPseudoSelector -->
      <!--suppress CssUnresolvedCustomProperty -->
      <!--suppress CssUnresolvedCustomPropertySet -->
      <style is="custom-style">
        :host {
          display: block;
        }
        app-toolbar {
          background-color: var(--paper-grey-200);
        }
      </style>
      <app-toolbar>
        <div main-title>Your Transactions</div>
      </app-toolbar>
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
