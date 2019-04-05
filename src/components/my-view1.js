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

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class MyView1 extends PageViewElement {
  static get styles() {
    return [
      SharedStyles
    ];
  }

  render() {
    return html`
      <section>
<<<<<<< HEAD
        <h2>It was all a dream...</h2>
      </section>
      <section>
      <img src="images/IMG_0164.JPG" alt="Chanel" style="display:block;margin-left:auto;margin-right:auto;width:500px;height:600px;border-radius:50%"><p>Monique’s Creole Cooking was created by Chanel Farria. A New Orleans Native, with a huge family that shared most of their bonding time around the dinner table. One side of the family taught Chanel how to cook with care, while the other, taught Chanel how to prepare meals for a great number of people. Never allowing anyone to leave without a plate. Through this Chanel found a passion in preparing meals for others and the positive feedback amplified her desire to turn her passion into Monique’s Creole Cooking. The entire staff is made up of family members that enjoy being in the kitchen and providing a great service to the community. About 14 years ago Chanel realized that she wanted to do something in the food industry because when she cooked for people their smiles and affirmations filled her with great joy.</p>
      <p>Albert Farria is Chanel’s brother who serves as one of our main cooks, became interested in cooking and began to curate different sauce combinations for BBQ. Together Chanel and Albert put their fear in their back pocket and pushed to pursue their dream. With the help of family and friends we were able to create a business, that will not only provide food to those near but also those who are homesick or just love Creole cuisine. As we prepare to grow we must send a special thank you to Denisha Poplus, Kristen Clark and Tiaka Farria for aiding us in our development. Also, a Thank You for those who have ordered, plan to order, or simply expressed support!</p>
      </section>
      
=======
        <h2>Static page</h2>
        <p>This is a text-only page.</p>
        <p>It doesn't do anything other than display some static text.</p>
      </section>
      <section>
        <h2>Welcome</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac nisi orci. Maecenas sollicitudin diam in diam efficitur cursus. Morbi sollicitudin in justo tincidunt placerat. Integer tincidunt elementum nisi, eu ornare dolor lacinia eget. Fusce pulvinar massa eget odio placerat, commodo molestie ipsum tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse porttitor id purus eu cursus. Suspendisse arcu nulla, mattis vel hendrerit et, malesuada a elit. Nam at diam ornare, aliquet est sed, malesuada metus. Cras nec enim vel nibh tincidunt euismod ut et enim. Etiam pharetra eros in sodales iaculis. Duis sagittis urna et cursus mollis. Cras tempor rutrum est. Praesent sollicitudin ligula at laoreet placerat. Praesent tortor dui, semper in sapien non, pharetra luctus turpis.</p>
      </section>
      <section>
        <p>Vestibulum at est ex. Aenean id ligula id nibh dictum laoreet. Etiam non semper erat. Pellentesque eu justo rhoncus diam vulputate facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat metus ex, vel fringilla massa tincidunt sit amet. Nunc facilisis bibendum tristique. Mauris commodo, dolor vitae dapibus fermentum, odio nibh viverra lorem, eu cursus diam turpis et sapien. Nunc suscipit tortor a ligula tincidunt, id hendrerit tellus sollicitudin.</p>
      </section>
>>>>>>> 14bf54a... Merge pull request #352 from darvid7/patch-1
    `;
  }
}

window.customElements.define('my-view1', MyView1);
