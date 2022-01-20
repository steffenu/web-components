/*
 * @Author: Steffen U.
 * @Date: 2022-01-18 12:21:52
 * @Last Modified by: Steffen U.
 * @Last Modified time: 2022-01-20 14:25:08
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
<nav>
<ul class="nav-list">
  <img id="lc-logo" src="assets/img/logo.svg" alt="" />
  <li class="nav-list__item">projekte</li>
  <li class="nav-list__item">teams</li>
  <li class="nav-list__item">agentur</li>
</ul>
</nav>
<img src="" alt="" />

`; */

// Custom-Element my-element anlegen
class lcHeader extends HTMLElement {
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

    const nav = document.createElement("nav");

    const ul = document.createElement("ul");

    const img = document.createElement("img");

    const li_1 = document.createElement("li");
    const li_2 = document.createElement("li");
    const li_3 = document.createElement("li");

    // #################### CONFIGURING ELEMENTS ########################
    // ##################################################################

    ul.classList.add("lc-header-list");
    img.classList.add("lc-header-logo");

    /*     var location = window.location;
    let foldersAndFile = location.pathname.split("/");
    console.log("location:", foldersAndFile[1]); */

    img.setAttribute("src", "../web-components/lc-header/assets/img/logo.svg");

    li_1.classList.add("lc-header-list__item");
    li_2.classList.add("lc-header-list__item");
    li_3.classList.add("lc-header-list__item");

    li_1.innerText = "projekte";
    li_2.innerText = "teams";
    li_3.innerText = "agentur";

    // #################### APPENDING ###################################
    // ##################################################################

    ul.appendChild(img);
    ul.appendChild(li_1);
    ul.appendChild(li_2);
    ul.appendChild(li_3);

    nav.appendChild(ul);

    shadow.appendChild(nav);

    // CSS anlegen und ins Schatten-Dom einhängen
    // :host selektiert das Custom Element
    const style = document.createElement("style");
    style.textContent = `
    /* fredoka-one-regular - latin */
    @font-face {
      font-family: 'Fredoka One';
      font-style: normal;
      font-weight: 400;
      src: url('assets/fonts/fredoka-one-v8-latin-regular.eot'); /* IE9 Compat Modes */
      src: local(''),
          url('assets/fonts/fredoka-one-v8-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('assets/fonts/fredoka-one-v8-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
          url('assets/fonts/fredoka-one-v8-latin-regular.woff') format('woff'), /* Modern Browsers */
          url('assets/fonts/fredoka-one-v8-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
          url('assets/fonts/fredoka-one-v8-latin-regular.svg#FredokaOne') format('svg'); /* Legacy iOS */
    }


        /* barlow-condensed-100 - latin */
    @font-face {
      font-family: 'Barlow Condensed';
      font-style: normal;
      font-weight: 100;
      src: url('assets/fonts/barlow-condensed-v5-latin-100.eot'); /* IE9 Compat Modes */
      src: local(''),
          url('assets/fonts/barlow-condensed-v5-latin-100.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('assets/fonts/barlow-condensed-v5-latin-100.woff2') format('woff2'), /* Super Modern Browsers */
          url('assets/fonts/barlow-condensed-v5-latin-100.woff') format('woff'), /* Modern Browsers */
          url('assets/fonts/barlow-condensed-v5-latin-100.ttf') format('truetype'), /* Safari, Android, iOS */
          url('assets/fonts/barlow-condensed-v5-latin-100.svg#BarlowCondensed') format('svg'); /* Legacy iOS */
    }
    /* barlow-condensed-regular - latin */
    @font-face {
      font-family: 'Barlow Condensed';
      font-style: normal;
      font-weight: 400;
      src: url('assets/fonts/barlow-condensed-v5-latin-regular.eot'); /* IE9 Compat Modes */
      src: local(''),
          url('assets/fonts/barlow-condensed-v5-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('assets/fonts/barlow-condensed-v5-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
          url('assets/fonts/barlow-condensed-v5-latin-regular.woff') format('woff'), /* Modern Browsers */
          url('assets/fonts/barlow-condensed-v5-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
          url('assets/fonts/barlow-condensed-v5-latin-regular.svg#BarlowCondensed') format('svg'); /* Legacy iOS */
    }
    /* barlow-condensed-700 - latin */
    @font-face {
      font-family: 'Barlow Condensed';
      font-style: normal;
      font-weight: 700;
      src: url('assets/fonts/barlow-condensed-v5-latin-700.eot'); /* IE9 Compat Modes */
      src: local(''),
          url('assets/fonts/barlow-condensed-v5-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('assets/fonts/barlow-condensed-v5-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
          url('assets/fonts/barlow-condensed-v5-latin-700.woff') format('woff'), /* Modern Browsers */
          url('assets/fonts/barlow-condensed-v5-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
          url('assets/fonts/barlow-condensed-v5-latin-700.svg#BarlowCondensed') format('svg'); /* Legacy iOS */
    }
    /* barlow-condensed-900 - latin */
    @font-face {
      font-family: 'Barlow Condensed';
      font-style: normal;
      font-weight: 900;
      src: url('assets/fonts/barlow-condensed-v5-latin-900.eot'); /* IE9 Compat Modes */
      src: local(''),
          url('assets/fonts/barlow-condensed-v5-latin-900.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('assets/fonts/barlow-condensed-v5-latin-900.woff2') format('woff2'), /* Super Modern Browsers */
          url('assets/fonts/barlow-condensed-v5-latin-900.woff') format('woff'), /* Modern Browsers */
          url('assets/fonts/barlow-condensed-v5-latin-900.ttf') format('truetype'), /* Safari, Android, iOS */
          url('assets/fonts/barlow-condensed-v5-latin-900.svg#BarlowCondensed') format('svg'); /* Legacy iOS */
    }

		 .lc-header-list{
       display : flex;
       list-style : none;
       justify-content: space-between;
       height: 175px;
       align-items:center;
       font-family: "Barlow Condensed", sans-serif;
       font-weight : 700;
       font-size:32px;
       line-height:47.5px;
       color:#900811;

       padding: 0 60px;
       padding-right:100px;
       
       box-shadow: 0 2px 2px 0 rgb(0 0 41 / 30%);
     }

     .lc-header-list__item:before{
      content: '#';
      font-family: 'Fredoka One';
      color: #900811;
      padding-right: .03rem;
      font-size: 32px;
     }


     .lc-header-logo{
       height: 57px;
     }

     .darkmode{
       background-color:#181A1B;
     }

     @media (max-width: 1200px) {
      .lc-header-list__item{
        display:none;
        
      }
      .lc-header-list{
        justify-content:center;
        padding-right:0;
        
      }
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
customElements.define("lc-header", lcHeader);

/* var lc_header = document.createElement("lc-header");
// Add it to the page
document.body.appendChild(lc_header); */
