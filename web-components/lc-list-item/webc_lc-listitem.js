/*
 * @Author: Steffen U.
 * @Date: 2022-01-18 12:21:52
 * @Last Modified by: Medy
 * @Last Modified time: 2022-01-24 13:53:07
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

        <div class="font-list-item">
          <ul class="labels">
            <li class="label-font-family">font-family</li>
            <li class="label-font-weight">font-weight</li>
          </ul>
          <ul class="values">
            <li class="font-family">
    
            <!-- The download attribute only works for same-originl URLs. -->
            <a style="text-decoration:none; color:#334115;" href="{{item["css"]["src"]}}" download="{{
              item["css"]["font_family"] ~ item["css"]["font_weight"]
            }}">{{ item["css"]["font_family"] }}</a>
            </li>
            <li class="font-weight">{{ item["css"]["font_weight"] }}</li>
          </ul>
        </div>




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

    const item_div = document.createElement("div");

    const lables = document.createElement("ul");
    const labels_li_1 = document.createElement("li");
    const labels_li_2 = document.createElement("li");

    const values = document.createElement("ul");
    const values_li_1 = document.createElement("li");
    const values_li_2 = document.createElement("li");

    // #################### ADDING CLASSES ############################
    // ################################################################

    item_div.classList.add("font-list-item");

    lables.classList.add("labels");
    labels_li_1.classList.add("labels-li_1");
    labels_li_2.classList.add("labels-li_2");

    values.classList.add("values");
    values_li_1.classList.add("values-li_1");
    values_li_2.classList.add("values-li_2");

    // #################### SETTING TEXT ##############################
    // ################################################################

    labels_li_1.innerText = `${this.getAttribute("label_1")}`;
    labels_li_2.innerText = `${this.getAttribute("label_2")}`;

    values_li_1.innerText = `${this.getAttribute("value_1")}`;
    values_li_2.innerText = `${this.getAttribute("value_2")}`;

    // #################### APPENDING ###################################
    // ##################################################################

    lables.appendChild(labels_li_1);
    lables.appendChild(labels_li_2);

    values.appendChild(values_li_1);
    values.appendChild(values_li_2);

    item_div.appendChild(lables);
    item_div.appendChild(values);
    //ul.appendChild(img);

    shadow.appendChild(item_div);

    // CSS anlegen und ins Schatten-Dom einhängen
    // :host selektiert das Custom Element
    const style = document.createElement("style");
    style.textContent = `

    * {
    margin: 0;
    padding: 0;
  }

  
  /* fira-code-300 - latin */
  @font-face {
    font-family: 'Fira Code';
    font-style: normal;
    font-weight: 300;
    src: url('../fonts/fira-code-v14-latin-300.eot'); /* IE9 Compat Modes */
    src: local(''),
         url('../fonts/fira-code-v14-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('../fonts/fira-code-v14-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
         url('../fonts/fira-code-v14-latin-300.woff') format('woff'), /* Modern Browsers */
         url('../fonts/fira-code-v14-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
         url('../fonts/fira-code-v14-latin-300.svg#FiraCode') format('svg'); /* Legacy iOS */
  }
  /* fira-code-700 - latin */
  @font-face {
    font-family: 'Fira Code';
    font-style: normal;
    font-weight: 700;
    src: url('../fonts/fira-code-v14-latin-700.eot'); /* IE9 Compat Modes */
    src: local(''),
         url('../fonts/fira-code-v14-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('../fonts/fira-code-v14-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
         url('../fonts/fira-code-v14-latin-700.woff') format('woff'), /* Modern Browsers */
         url('../fonts/fira-code-v14-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
         url('../fonts/fira-code-v14-latin-700.svg#FiraCode') format('svg'); /* Legacy iOS */
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



  .font-list-item {
    display: flex;
    flex-direction: column;
    border: 6px solid white;
    border-radius: 5px;
    flex-basis: 200px;
    flex-grow: 1;
    max-width: 400px;

    box-shadow: 0 0.2rem 0.2rem rgba(0, 0, 0, 0.3);

    justify-content: center;
    gap: 0.6rem;

    padding: 1rem 4rem;
  }



  .labels {
    display: flex;
    justify-content: space-between;
    list-style: none;
    font-family: 'Barlow Condensed';
    font-style: normal;
    font-weight: 100;;
    color: #334155;
    font-size: 1rem;
  }

  .label-font-family {
  }

/*   .labels-li_2 {
    margin-left: auto;
  } */

  .values {
    display: flex;
    justify-content: space-between;
    list-style: none;
    font-family: 'Barlow Condensed';
    font-style: normal;
    font-weight: 700;
    font-size: 1.2rem;
  }

  .values-li_2  {
  }
/*   .values-li_2 {
    margin-left: auto;
  } */
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
