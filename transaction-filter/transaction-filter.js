import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-tabs/paper-tabs.js';
import '@polymer/paper-tabs/paper-tab.js';
import '@polymer/paper-styles/color.js';
import '@polymer/paper-styles/shadow.js';

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
      <style is="custom-style">
        :host {
          display: block;
        }
        .date {
          background-color: var(--paper-grey-100);
          height: 5rem;
          margin: 20px 0px;
        }
        .date paper-tab {
          --paper-tab-ink: var(--paper-blue-a400);
          --paper-tab-content-unselected: {
            height: 60%;
            @apply --shadow-elevation-2dp;
            font-size: 20px;
          };
          --paper-tab: {
            margin: 0px 5px;
            padding: 0 2px;
          };
          --paper-tab-content: {                
            background-color: white;          
            padding: 0 0.5rem;
            @apply --shadow-elevation-3dp;
            height: 80%;
            min-width: 50px;
            border-radius: 8px;
            font-size: 24px;
            transition: all 100ms ease-in-out;
          };
        }
        .period paper-tab {
          --paper-tab-ink: var(--paper-blue-a400);
          --paper-tab-content-unselected: {
            color: var(--paper-grey-500);
          };
          --paper-tab: {
            font-size: 20px;
          };
        }
        .period {
          --paper-tabs-selection-bar-color: var(--transaction-filter-period-selection-bar, var(--paper-blue-a400));
          margin: 1rem 0 0.5rem 0;  
        }     
      </style>
      <paper-tabs class="period"
                  selected="{{period}}"
                  scrollable
                  fit-container
                  attr-for-selected="name"
                  fallback-selection$="[[periods.0.name]]"
                  hide-scroll-buttons>
        <template is="dom-repeat" items="[[periods]]">
          <paper-tab name="[[item.name]]">[[item.text]]</paper-tab>
        </template>
      </paper-tabs>
      <paper-tabs class="date"
                  selected="{{date}}"
                  scrollable
                  attr-for-selected="name"
                  fallback-selection$="[[days.0]]"
                  no-bar
                  noink>
        <template is="dom-repeat" items="[[days]]">
          <paper-tab name="[[item]]">[[item]]</paper-tab>
        </template>
      </paper-tabs>
    `;
  }

  /**
   * Properties
   * @return {object}
   */
  static get properties() {
    return {
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
      /**
       * List of options for 'date'.
       */
      days: {
        type: Array,
        value: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
      },
      /**
       * List of options for 'period'.
       */
      periods: {
        type: Array,
        value: [
          {
            text: 'Daily',
            name: 'daily',
          },
          {
            text: 'Weekly',
            name: 'weekly',
          },
          {
            text: 'Monthly',
            name: 'monthly',
          },
          {
            text: 'Yearly',
            name: 'yearly',
          },
          {
            text: 'All',
            name: 'all',
          },
        ],
      },
    };
  }
}

window.customElements.define('transaction-filter', TransactionFilter);
