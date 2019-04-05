/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { connect } from 'pwa-helpers/connect-mixin.js';

// This element is connected to the Redux store.
import { store } from '../store.js';

// These are the actions needed by this element.
import { increment, decrement } from '../actions/counter.js';

// We are lazy loading its reducer.
import counter from '../reducers/counter.js';
store.addReducers({
  counter
});

// These are the elements needed by this element.
import './counter-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class MyView2 extends connect(store)(PageViewElement) {
  static get properties() {
    return {
      // This is the data from the store.
      _clicks: { type: Number },
      _value: { type: Number }
    };
  }

  static get styles() {
    return [
      SharedStyles
    ];
  }

  render() {
    return html`
      <section>
<<<<<<< HEAD
      
        <div class="menu-body">
      <!-- Section starts: Appetizers -->
          <div class="menu-section">
            <h2 class="menu-section-title">Wings</h2>
      <!-- Item starts -->
            <div class="menu-item">
              <div class="menu-item-name">
                6 Wings
              </div>
              <div class="menu-item-price">
                $4.50
              </div>
              <div class="menu-item-description">
                With Fries
              </div>
              <div class="menu-item-price">
                $5.50
              </div>
            </div>
      <!-- Item ends -->
      <!-- Item starts -->
            <div class="menu-item">
              <div class="menu-item-name">
                8 Wings
              </div>
              <div class="menu-item-price">
                $5.50
              </div>
              <div class="menu-item-description">
                With Fries
              </div>
              <div class="menu-item-price">
                $6.50
              </div>
            </div>
      <!-- Item ends -->
      <!-- Item starts -->
            <div class="menu-item">
              <div class="menu-item-name">
                10 Wings
              </div>
              <div class="menu-item-price">
                $6.50
              </div>
              <div class="menu-item-description">
                With Fries
              </div>
              <div class="menu-item-price">
                $7.50
              </div>
            </div>
      <!-- Item ends -->
      <!-- Item starts -->
            <div class="menu-item">
              <div class="menu-item-name">
                15 Wings
              </div>
              <div class="menu-item-price">
                $8.50
              </div>
              <div class="menu-item-description">
                With Fries
              </div>
              <div class="menu-item-price">
                $9.50
              </div>
            </div>
      <!-- Item ends -->
      <!-- Item starts -->
            <div class="menu-item">
              <div class="menu-item-name">
                20 Wings
              </div>
              <div class="menu-item-price">
                $11.50
              </div>
              <div class="menu-item-description">
                With Fries
              </div>
              <div class="menu-item-price">
                $13.00
              </div>
            </div>
      <!-- Item ends -->
   </div>
   <h2 class="menu-section-title">Special Items</h2>
      <div class="menu-item">
        <div class="menu-item-name">
          Hot Tamales
        </div>
        <div class="menu-item-price">
          Half-Dozen $4.50
        </div>
        <div class="menu-item-description">
          Hot Tamales
        </div>
        <div class="menu-item-price">
          Dozen $5.50
        </div>
      </div>
   <!-- Section ends: Appetizers -->
   <!--*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*-->
   <!-- Section starts: Salads -->
   <div class="menu-section">
      <h2 class="menu-section-title">Salads</h2>
      <h3>Dressings: Ranch, Vinegrette, Italian</h3>
      <!-- Item starts -->
        <div class="menu-item">
          <div class="menu-item-name">
              Chicken Salad
          </div>
          <div class="menu-item-price">
              $10
          </div>
          <div class="menu-item-description">
            Served over romain lettuce with tomatoes, cucumbers, cheese, bold eggs and fried onions
          </div>
        </div>
      <!-- Item ends -->
      <!-- Item starts -->
        <div class="menu-item">
          <div class="menu-item-name">
              Shrimp Salad
          </div>
          <div class="menu-item-price">
              $11
          </div>
          <div class="menu-item-description">
            Served over romain lettuce with tomatoes, cucumbers, cheese, bold eggs and fried onions
          </div>
        </div>
      <!-- Item ends -->
      <!-- Item starts -->
        <div class="menu-item">
          <div class="menu-item-name">
              Shrimp & Chicken Salad
          </div>
          <div class="menu-item-price">
              $12
          </div>
          <div class="menu-item-description">
            Served over romain lettuce with tomatoes, cucumbers, cheese, bold eggs and fried onions
          </div>
        </div>
      <!-- Item ends -->
      <!-- Item starts -->
        <div class="menu-item">
          <div class="menu-item-name">
              Garden Salad
          </div>
          <div class="menu-item-price">
              $8
          </div>
          <div class="menu-item-description">
            Served over romain lettuce with tomatoes, cucumbers, cheese, bold eggs and fried onions
          </div>
        </div>
      <!-- Item ends -->
   </div>
   <!-- Section ends: Salads -->
</div>
<!--*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*-->
<div class="menu-body">
   <!-- Section starts: Entrees -->
   <div class="menu-section">
      <h2 class="menu-section-title">Entrèes</h2>
      <h3>Served with two sides (listed below), bread, and a dessert</h3>
      <!-- Item starts -->
        <div class="menu-item">
          <div class="menu-item-name">
              T-Bone Steak
          </div>
          <div class="menu-item-price">
              $20
          </div>
          <div class="menu-item-description">
          </div>
        </div>
      <!-- Item ends -->
      <!-- Item starts -->
        <div class="menu-item">
          <div class="menu-item-name">
              Stuffed Bell Peppers
          </div>
          <div class="menu-item-price">
              $12
          </div>
          <div class="menu-item-description">
            With a flavorful ground beef & shrimp mixture.
          </div>
        </div>
      <!-- Item ends -->
      <!-- Item starts -->
        <div class="menu-item">
          <div class="menu-item-name">
              Fried BBQ Ribs
          </div>
          <div class="menu-item-price">
              $10
          </div>
          <div class="menu-item-description">
          Deep fried ribs lathered in a honey barbecue sauce.
          </div>
        </div>
      <!-- Item ends -->
      <!-- Item starts -->
        <div class="menu-item">
          <div class="menu-item-name">
              Catfish
          </div>
          <div class="menu-item-price">
              $10
          </div>
          <div class="menu-item-description">
            Fried with seasoning or baked with a garlic lemon sauce.
          </div>
        </div>
      <!-- Item ends -->
      <!-- Item starts -->
        <div class="menu-item">
          <div class="menu-item-name">
              Red Beans
          </div>
          <div class="menu-item-price">
              $10
          </div>
          <div class="menu-item-description">
          Served over steamed rice, seasoning and smoked sausage.
          </div>
        </div>
      <!-- Item ends -->
      <!-- Item starts -->
        <div class="menu-item">
          <div class="menu-item-name">
            White Beans
          </div>
          <div class="menu-item-price">
              $10
          </div>
          <div class="menu-item-description">
            Served over steamed rice and seasoned meat.
          </div>
        </div>
      <!-- Item ends -->
      <!-- Item starts -->
        <div class="menu-item">
          <div class="menu-item-name">
            Seafood Stew
          </div>
          <div class="menu-item-price">
              $12
          </div>
          <div class="menu-item-description">
            Served over steamed rice, fresh seasoning and seafood .
          </div>
        </div>
      <!-- Item ends -->
   </div>
   <!-- Section ends: Appetizers -->
   <!--*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*-->
   <!-- Section starts: Soups -->
   <div class="menu-section">
      <h2 class="menu-section-title">Soups</h2>
      <h3>Served with your choice of a dessert (Listed below)</h3>

      <!-- Item starts -->
      <div class="menu-item">
         <div class="menu-item-name">
            File Gumbo
         </div>
         <div class="menu-item-price">
            $10
         </div>
         <div class="menu-item-description">
          Served over steamed rice with freshly seasoned chicken, sausage, shrimp and 32 ounces of crab.
         </div>
      </div>
      <!-- Item ends -->
      <!-- Item starts -->
      <div class="menu-item">
         <div class="menu-item-name">
            Yaki Mein
         </div>
         <div class="menu-item-price">
            $8
         </div>
         <div class="menu-item-description">
          Served on top of linguine noodles with beef, green onions, bold egg and soy sauce.
         </div>
      </div>
      <!-- Item ends -->
   </div>
   <!-- Section ends: Soups -->
   <!--*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*-->
   <!-- Section starts: Desserts -->
   <div class="menu-section">
      <h2 class="menu-section-title">Desserts</h2>
      
      <!-- Item starts -->
      <div class="menu-item">
         <div class="menu-item-name">
            Lemon Cake
         </div>
         <div class="menu-item-price">
            $1.75
         </div>
      </div>
      <!-- Item ends -->
      <!-- Item starts -->
      <div class="menu-item">
         <div class="menu-item-name">
            Pound Cake
         </div>
         <div class="menu-item-price">
            $1.75
         </div>
      </div>
      <!-- Item ends -->
      <!-- Item starts -->
      <div class="menu-item">
         <div class="menu-item-name">
            Bread Pudding with Rum Sauce
         </div>
         <div class="menu-item-price">
            $2.50
         </div>
      </div>
      <!-- Item ends -->
      <!-- Item starts -->
      <div class="menu-item">
         <div class="menu-item-name">
            Sweet Potato Bread
         </div>
         <div class="menu-item-price">
            $2.50
         </div>
      </div>
      <!-- Item ends -->
   </div>
   <!-- Section ends: Desserts -->
   <!--*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*-->
   <!-- Section starts: Drinks -->
   <div class="menu-section">
      <h2 class="menu-section-title">Drinks</h2>
      
      <!-- Item starts -->
      <div class="menu-item">
         <div class="menu-item-name">
            Coca-Cola
         </div>
         <div class="menu-item-price">
            $2.00
         </div>
      </div>
      <!-- Item ends -->
      <!-- Item starts -->
      <div class="menu-item">
         <div class="menu-item-name">
            Sprite
         </div>
         <div class="menu-item-price">
            $2.00 
         </div>
      </div>
      <!-- Item ends -->
      <!-- Item starts -->
      <div class="menu-item">
         <div class="menu-item-name">
            Bottled Water
         </div>
         <div class="menu-item-price">
            $1.00
         </div>
      </div>
      <!-- Item ends -->
   </div>
   <!-- Section ends: Drinks -->
   <!--*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*-->
   <!-- Section starts: Desserts -->
   <div class="menu-section">
      <h2 class="menu-section-title">Desserts</h2>
      
      <!-- Item starts -->
      <div class="menu-item">
         <div class="menu-item-name">
            Lemon Cake
         </div>
         <div class="menu-item-price">
            $1.75
         </div>
      </div>
      <!-- Item ends -->
      <!-- Item starts -->
      <div class="menu-item">
         <div class="menu-item-name">
            Pound Cake
         </div>
         <div class="menu-item-price">
            $1.75
         </div>
      </div>
      <!-- Item ends -->
      <!-- Item starts -->
      <div class="menu-item">
         <div class="menu-item-name">
            Bread Pudding with Rum Sauce
         </div>
         <div class="menu-item-price">
            $2.50
         </div>
      </div>
      <!-- Item ends -->
      <!-- Item starts -->
      <div class="menu-item">
         <div class="menu-item-name">
            Sweet Potato Bread
         </div>
         <div class="menu-item-price">
            $2.50
         </div>
      </div>
      <!-- Item ends -->
   </div>
   <!-- Section ends: Desserts -->
   <!--*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*-->
   <!-- Section starts: Sides -->
   <div class="menu-section">
      <h2 class="menu-section-title">Sides</h2>
      <!-- Item starts -->
      <div class="menu-item">
         <div class="menu-item-name">
          Sides
         </div>
         <div class="menu-item-price">
            $2.50 Each
         </div>
         <div class="menu-item-description">
          <div><paper-item class="fancy">Seafood Stew</paper-item></div>
          <div><paper-item class="fancy">Jambalaya</paper-item></div>
          <div><paper-item class="fancy">Dirty Rice</paper-item></div>
          <div><paper-item class="fancy">Red Beans and Rice</paper-item></div>
          <div><paper-item class="fancy">White Beans and Rice</paper-item></div>
          <div><paper-item class="fancy">Mac & Cheese</paper-item></div>
          <div><paper-item class="fancy">Broccoli and Cheese</paper-item></div>
          <div><paper-item class="fancy">Corn</paper-item></div>
          <div><paper-item class="fancy">Potato Salad</paper-item></div>
          <div><paper-item class="fancy">Salad</paper-item></div>
         </div>
      </div>
      <!-- Item ends -->
   </div>
   <!-- Section ends: Sides -->
</div>
          
</section>
=======
        <h2>Redux example: simple counter</h2>
        <div class="circle">${this._value}</div>
        <p>This page contains a reusable <code>&lt;counter-element&gt;</code>. The
        element is not built in a Redux-y way (you can think of it as being a
        third-party element you got from someone else), but this page is connected to the
        Redux store. When the element updates its counter, this page updates the values
        in the Redux store, and you can see the current value of the counter reflected in
        the bubble above.</p>
        <br><br>
      </section>
      <section>
        <p>
          <counter-element
              value="${this._value}"
              clicks="${this._clicks}"
              @counter-incremented="${this._counterIncremented}"
              @counter-decremented="${this._counterDecremented}">
          </counter-element>
        </p>
      </section>
>>>>>>> 14bf54a... Merge pull request #352 from darvid7/patch-1
    `;
  }

  _counterIncremented() {
    store.dispatch(increment());
  }

  _counterDecremented() {
    store.dispatch(decrement());
  }

  // This is called every time something is updated in the store.
  stateChanged(state) {
    this._clicks = state.counter.clicks;
    this._value = state.counter.value;
  }
}

window.customElements.define('my-view2', MyView2);
