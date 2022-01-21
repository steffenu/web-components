/*
 * @Author: Steffen U.
 * @Date: 2022-01-18 12:21:52
 * @Last Modified by: steffenu
 * @Last Modified time: 2022-01-21 09:37:50
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




`; */

// Custom-Element my-element anlegen
class lcListItem extends HTMLElement {
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

    const news_div = document.createElement("div");
    const text_container = document.createElement("div");
    const hashtag_text = document.createElement("p");
    const title_text = document.createElement("h2");
    const paragraph_text = document.createElement("p");

    // #################### ADDING CLASSES ############################
    // ################################################################

    news_div.classList.add("news-div");
    text_container.classList.add("text-container");
    hashtag_text.classList.add("hashtag-text");
    title_text.classList.add("title-text");
    paragraph_text.classList.add("paragraph-text");

    // #################### SETTING TEXT ##############################
    // ################################################################

    hashtag_text.innerText = `${this.getAttribute("hashtag_text")}`;
    title_text.innerText = `${this.getAttribute("title_text")}`;
    paragraph_text.innerText = `${this.getAttribute("paragraph_text")}`;

    // #################### APPENDING ###################################
    // ##################################################################

    text_container.appendChild(hashtag_text);
    text_container.appendChild(title_text);
    text_container.appendChild(paragraph_text);
    news_div.appendChild(text_container);
    //ul.appendChild(img);

    shadow.appendChild(news_div);

    // CSS anlegen und ins Schatten-Dom einhängen
    // :host selektiert das Custom Element
    const style = document.createElement("style");
    style.textContent = `

    * {
    margin: 0;
    padding: 0;
  }
  

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

    .news-div {
      display:flex;
      justify-content:center;
      align-items: center;
      min-height : 16rem;
      box-shadow: 0px 1px 0px 0px rgb(0 0 41 / 30%);
      margin: 2rem 0 ;
      background: #f7f7f7;
      
    }

    .text-container {
      display:flex;
      flex-direction: column;


      
    }
    .hashtag-text{
      font-family: "Barlow Condensed", sans-serif;
      font-weight : 700;
      font-size:16px;
      color: #2E3336);
      line-height: 1.4;
    }
    .title-text {
      font-family: "Barlow Condensed", sans-serif;
      font-weight : 700;
      font-size:26px;
      color: rgb(142, 199, 215);
      line-height: 1.4;
    }
    .paragraph-text {
      font-family: "Barlow Condensed", sans-serif;
      font-weight : 100;
      font-size:20px;
      color:#2E3336;
      line-height: 1.4;
      -webkit-font-smoothing: antialiased; 
    }
   
    .hashtag-text:before{
      content: '#';
      font-family: 'Fredoka One';
      color: #900811;
      padding-right: .03rem;
      font-size: 18px;
     }

     @media (max-width: 1200px) {
      .lc-header-list__item{
        display:none;
        
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
customElements.define("lc-listitem", lcListItem);

//var lc_news = document.createElement("lc-news");
// Add it to the page
//document.body.appendChild(lc_news);
