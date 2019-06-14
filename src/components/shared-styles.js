/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { css } from 'lit-element';

export const SharedStyles = css`
  :host {
    display: block;
    box-sizing: border-box;
  }

  section {
    padding: 24px;
    background: var(--app-section-odd-color);
  }

  section > * {
    max-width: 600px;
    margin-right: auto;
    margin-left: auto;
  }

  section:nth-of-type(even) {
    background: var(--app-section-even-color);
  }

  h2 {
    font-size: 24px;
    text-align: center;
    color: var(--app-dark-text-color);
  }

  @media (min-width: 460px) {
    h2 {
      font-size: 36px;
    }
  }

  .circle {
    display: block;
    width: 64px;
    height: 64px;
    margin: 0 auto;
    text-align: center;
    border-radius: 50%;
    background: var(--app-primary-color);
    color: var(--app-light-text-color);
    font-size: 30px;
    line-height: 64px;
  }

  p {
    text-indent: 4em;
  }
  .menu-body {
    max-width: 680px;
    margin: 0 auto;
    display: block;
    color: rgb(92, 92, 92);
  }
   
  .menu-section {
    margin-bottom: 80px;
  }
   
  .menu-section-title {
    font-family: georgia;
    font-size: 50px;
    display: block;
    font-weight:normal;
    margin: 20px 0; 
    text-align: Center;
  }
   
  .menu-item {
    margin: 35px 0;
    font-size: 18px;
  }
   
  .menu-item-name{
    font-family: helvetica;
    font-weight: bold;
    border-bottom: 2px dotted rgb(213, 213, 213);
  }
   
  .menu-item-description {
    font-style: italic;
    font-size: .9em;
    line-height: 1.5em;
  }
   
  .menu-item-price{
    float: right;
    font-weight: bold;
    font-family: arial;
    margin-top: -22px;
  }
`;
