/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html, css } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import {PolymerElement} from '@polymer/polymer';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';


// This element is connected to the Redux store.
import { store } from '../store.js';

// These are the actions needed by this element.
import { checkout } from '../actions/shop.js';

// We are lazy loading its reducer.
import shop, { cartQuantitySelector } from '../reducers/shop.js';
store.addReducers({
  shop
});

// These are the elements needed by this element.
import './shop-products.js';
import './shop-cart.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';
import { ButtonSharedStyles } from './button-shared-styles.js';
import { addToCartIcon } from './my-icons.js';

class MyView3 extends connect(store)(PageViewElement) {
  static get properties() {
    return {
      // This is the data from the store.
      _quantity: { type: Number },
      _error: { type: String }
    };
  }

  static get styles() {
    return [
      SharedStyles,
      ButtonSharedStyles,
      css`
        button {
          border: 2px solid var(--app-dark-text-color);
          border-radius: 3px;
          padding: 8px 16px;
        }

        button:hover {
          border-color: var(--app-primary-color);
          color: var(--app-primary-color);
        }

        .cart,
        .cart svg {
          fill: var(--app-primary-color);
          width: 64px;
          height: 64px;
        }

        .circle.small {
          margin-top: -72px;
          width: 28px;
          height: 28px;
          font-size: 16px;
          font-weight: bold;
          line-height: 30px;
        }
      `
    ];
  }

  render() {
    return html`
    <a href="https://www.doordash.com/business/261045/?utm_source=partner-link&utm_medium=website&utm_campaign=261045&utm_content=red-xl" target="_blank" alt="Order Food Delivery with DoorDash" title="Order Food Delivery with DoorDash" style="text-decoration: none">
      <div style="position: relative; width:268px; height:118px; margin: 0px auto;margin-top: 100px; background-image: url(https://cdn.doordash.com/media/button/button_red_xl.svg); color:transparent">Order Food Delivery with DoorDash</div>
    </a>

    <a href="https://www.ubereats.com/en-US/new-orleans/food-delivery/moniques/R5SAMbjbQqSfgVO0uqWXxQ" target="_blank" alt="Order Food Delivery with Uber Eats" title="Order Food Delivery with Uber Eats" style="text-decoration: none">
      <div style="position: relative; width:400px; height:81px; margin: 0px auto;margin-top: 100px; background-image: url(http://48thstreetgrille.com/wp-content/uploads/2018/11/uber-eats-400x81.png); color:transparent">Order Food Delivery with DoorDash</div>
    </a>

    <a href="https://waitrapp.com/restaurants/la/new-orleans/moniques-cajun-cooking/8711" target="_blank" alt="Order Food Delivery with Waitr" title="Order Food Delivery withhttps://www.thebullfishbar.com/wp-content/uploads/2016/03/waitrlogo-414x233.png" style="text-decoration: none">
      <div style="position: relative; width:400px; height:233px; margin: 0px auto;margin-top: 50px; background-image: url(https://www.thebullfishbar.com/wp-content/uploads/2016/03/waitrlogo-414x233.png); color:transparent">Order Food Delivery with DoorDash</div>
    </a>

    `;
  }

  _checkoutButtonClicked() {
    store.dispatch(checkout());
  }

  // This is called every time something is updated in the store.
  stateChanged(state) {
    this._quantity = cartQuantitySelector(state);
    this._error = state.shop.error;
  }
}

window.customElements.define('my-view3', MyView3);
