import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/paper-styles/color.js';
import './transaction-filter/transaction-filter.js';

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
        <div main-title>[[title]]</div>
      </app-toolbar>
      <transaction-filter period="{{period}}" date="{{date}}"></transaction-filter>
    `;
  }

  /**
   * Properties
   * @return {object}
   */
  static get properties() {
    return {
      title: {
        type: String,
        value: 'Your Transactions',
      },
      /**
       * Gets or sets the selected period.
       */
      period: {
        type: String,
        value: 'daily',
        reflectToAttribute: true,
        notify: true,
      },
      /**
       * Gets or sets the selected date.
       */
      date: {
        type: Number,
        value: 1,
        reflectToAttribute: true,
        notify: true,
      },
    };
  }
}

window.customElements.define('skeleton-transactions', SkeletonTransactions);
