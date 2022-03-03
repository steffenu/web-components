/*
 * @Author: Steffen U.
 * @Date: 2022-01-18 12:21:52
 * @Last Modified by: steffenu
 * @Last Modified time: 2022-02-18 15:39:47
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
class lcModal extends HTMLElement {
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

    const loader = document.createElement("div");

    // #################### ADDING CLASSES ############################
    // ################################################################

    loader.classList.add("loader");

    // #################### APPENDING ##################################
    // #################################################################

    shadow.appendChild(loader);

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

    .loader {
      background-color: #b9d8ec;
      border: 4px solid #f3f3f3; /* Light grey */
      border-top: 4px solid #3498db; /* Blue */
      border-radius: 50%;
      width: 24px;
      height: 24px;
      animation: spin 2s linear infinite;
    }

    .loader {
      border-top: 4px solid #5c8296;
      border-right: 4px solid #3a6b86;
      border-bottom: 4px solid #9b2924;
      border-left: 4px solid #c93931;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
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
customElements.define("lc-modal", lcModal);

//var lc_news = document.createElement("lc-news");
// Add it to the page
//document.body.appendChild(lc_news);
