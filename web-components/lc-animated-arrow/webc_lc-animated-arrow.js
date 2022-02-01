/*
 * @Author: Steffen U.
 * @Date: 2022-01-18 12:21:52
 * @Last Modified by: steffenu
 * @Last Modified time: 2022-02-01 16:05:40
 */
/* 


DESCRIPTION
################################

1. Add webc_lc-header.js to your html document
   <script src="webc_lc-header.js"></script>
*/

//  ########## VISUALISATION ##############
// Just for visualation ... Elements get created with javscript
/* const template = `

  <body>
    <div>
      <a class="lc-animated-arrow" href="https://google.com">
        <img src="assets/img/button_bubble.svg" alt="" />
        <img src="assets/img/button_pfeil.svg" alt="" />
      </a>
    </div>
  </body>

  <style>
    body {
      background-color: bisque;
    }

    .lc-animated-arrow {
      display: flex;
      gap: 2px;
      align-items: center;
      transition: gap 0.3s ease;
    }
    .lc-animated-arrow:hover {
      gap: 5px;
    }
  </style>




`; */

// Custom-Element my-element anlegen
class lcAnimatedArrow extends HTMLElement {
  // Festlegen, welche Attribute überwacht werden solle

  static get observedAttributes() {
    return ["attribut1", "attribut2"];
  }

  constructor() {
    // Element wird anlgelegt

    // super muss als erstes im constructor aufgerufen werden, super ruft den construcor der Elternklasse auf
    super();

    // Schatten-Dom anlegen
    // mode: 'open' : Vom Dokument aus ist der Zugriff auf das Schatten-Dom möglich.
    // mode: 'closed' : Der Zugriff auf das Schatten-Dom ist nicht möglich.

    const shadow = this.attachShadow({
      mode: "open",
    });

    // #################### CREATING ELEMENTS ########################
    // ###############################################################

    const arrow_link = document.createElement("a");
    const bubble = document.createElement("img");
    const arrow = document.createElement("img");

    // #################### ADDING CLASSES ############################
    // ################################################################

    arrow_link.classList.add("lc-animated-arrow");

    bubble.classList.add("bubble");
    arrow.classList.add("arrow");

    // #################### SETTING LINK ##############################
    // ################################################################

    arrow_link.setAttribute("href", this.getAttribute("url_link"));

    // #################### SETTING IMAGE PATHS #######################
    // ################################################################

    bubble.setAttribute("src", "assets/img/button_bubble.svg");
    arrow.setAttribute("src", "assets/img/button_pfeil.svg");

    // #################### APPENDING ##################################
    // #################################################################

    arrow_link.appendChild(bubble);
    arrow_link.appendChild(arrow);

    shadow.appendChild(arrow_link);

    // CSS anlegen und ins Schatten-Dom einhängen
    // :host selektiert das Custom Element
    const style = document.createElement("style");
    style.textContent = `

    *,
    *:before,
    *:after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    .lc-animated-arrow {
      display: flex;
      gap: 2px;
      align-items: center;
      transition: gap 0.3s ease;
    }
    .lc-animated-arrow:hover {
      gap: 5px;
    }

  

		`;
    shadow.appendChild(style);

    // Weiterer Code
  }

  connectedCallback() {
    // Element wurde ins DOM eingehängt
  }

  disconnectedCallback() {
    // Element wurde entfernt
  }

  adoptedCallback() {
    // Element ist in ein anderes Dokument umgezogen
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // Elementparameter wurden geändert
    // Achtung attributeChangedCallback wird vor connectedCallback aufgerufen
  }
}
customElements.define("lc-animated-arrow", lcAnimatedArrow);

//var lc_news = document.createElement("lc-news");
// Add it to the page
//document.body.appendChild(lc_news);
