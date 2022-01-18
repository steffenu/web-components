/*
 * @Author: Steffen U.
 * @Date: 2022-01-18 12:21:52
 * @Last Modified by: Steffen U.
 * @Last Modified time: 2022-01-18 15:55:15
 */
/* 


DESCRIPTION
################################

1. Add webc_lc-header.js to your html document
   <script src="webc_lc-header.js"></script>
*/

//  ########## VISUALISATION ##############
// Just for visualation ... Elements get created with javscript
const template = `
<footer>
<div className="left-side">
<img id="lc-logo" src="assets/img/logo.svg" alt="" />

<ul className="adress">
<li className="company"></li>
<li className="street"></li>
<li className="plz"></li>
<li className="phone"></li>
<li className="email"></li>
</ul>

<ul className="icons">
<li className="icon1"></li>
<li className="icon2"></li>
<li className="icon3"></li>
</ul>
</div>

<div className="right-side">
  <h2 className="headline_text">Jetzt Kontak aufnehmen</h2>
  <p className="paragraph_text">Sie haben Fragen zu unseren Leistungen oder wollen einen Termin vereinbaren? Dann nutzen Sie einfach unser Kontaktformular.</p>

  <ul className="footer-list">
  <li className="webmailer">Webmailer</li>
  <li className="online-meeting">Online-Meeting</li>
  <li className="datenschutz">Datenschutz</li>
  <li className="impressum">Impressum</li>
  </ul>
</div>



`;

// Custom-Element my-element anlegen
class lcFooter extends HTMLElement {
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

    const footer = document.createElement("footer");

    // LEFT SIDE
    const div_left_side = document.createElement("div");
    const img = document.createElement("img");
    const ul_adress = document.createElement("ul");
    const li_company = document.createElement("li");
    const li_street = document.createElement("li");
    const li_plz = document.createElement("li");
    const li_phone = document.createElement("li");
    const li_email = document.createElement("li");

    const ul_icons = document.createElement("ul");
    const icon1 = document.createElement("li");
    const icon2 = document.createElement("li");
    const icon3 = document.createElement("li");

    // RIGHT SIDE
    const div_right_side = document.createElement("div");
    const headline_text = document.createElement("h2");
    const paragraph_text = document.createElement("p");
    const footer_list = document.createElement("ul");
    const webmailer = document.createElement("li");
    const online_meeting = document.createElement("li");
    const datenschutz = document.createElement("li");
    const impressum = document.createElement("li");

    // #################### CONFIGURING ELEMENTS ########################
    // ##################################################################

    // LEFT SIDE
    div_left_side.classList.add("div-left-side");

    img.setAttribute("src", "assets/img/logo.svg");

    li_company.innerText = "LUPCOM media GmbH";
    li_street.innerText = "Rahnstädter Weg 33";
    li_plz.innerText = "18069 Rostock";
    li_phone.innerText = "+49 381 20 35 49 33";
    li_email.innerText = "info@lupcom.de";

    ul_adress.classList.add("adress-list");
    li_company.classList.add("adress_item");
    li_street.classList.add("adress_item");
    li_plz.classList.add("adress_item");
    li_phone.classList.add("adress_item");
    li_email.classList.add("adress_item");

    ul_icons.classList.add("icons-list");
    icon1.classList.add("icon_item");
    icon2.classList.add("icon_item");
    icon3.classList.add("icon_item");

    // RIGHT SIDE
    div_right_side.classList.add("div-right-side");

    headline_text.innerText = "Jetzt Kontakt aufnehmen";
    paragraph_text.innerText =
      "Sie haben Fragen zu unseren Leistungen oder wollen einen Termin vereinbaren? Dann nutzen Sie einfach unser Kontaktformular.";

    footer_list.classList.add("footer-list");
    webmailer.classList.add("webmailer");
    online_meeting.classList.add("online_meeting");
    datenschutz.classList.add("datenschutz");
    impressum.classList.add("impressum");

    webmailer.innerText = "Webmailer";
    online_meeting.innerText = "Online Meeting";
    datenschutz.innerText = "Datenschutz";
    impressum.innerText = "Impressum";

    // #################### APPENDING ###################################
    // ##################################################################

    // LEFT SIDE
    div_left_side.appendChild(img);

    ul_adress.appendChild(li_company);
    ul_adress.appendChild(li_street);
    ul_adress.appendChild(li_plz);
    ul_adress.appendChild(li_phone);
    ul_adress.appendChild(li_email);

    div_left_side.appendChild(ul_adress);

    ul_icons.appendChild(icon1);
    ul_icons.appendChild(icon2);
    ul_icons.appendChild(icon3);
    div_left_side.appendChild(ul_icons);

    footer.appendChild(div_left_side);
    footer.appendChild(div_right_side);

    // RIGHT SIDE
    div_right_side.appendChild(headline_text);
    div_right_side.appendChild(paragraph_text);

    footer_list.appendChild(webmailer);
    footer_list.appendChild(online_meeting);
    footer_list.appendChild(datenschutz);
    footer_list.appendChild(impressum);
    div_right_side.appendChild(footer_list);

    //ul.appendChild(img);

    shadow.appendChild(footer);

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

    .adress-list{
      list-style:none;
    }
    .icons-list{
      list-style:none;
    }

		 .lc-header-list{
       display : flex;
       list-style : none;
       justify-content: space-between;
       height: 175px;
       align-items:center;
       font-family: "Barlow Condensed", sans-serif;
       font-weight : 700;
       font-size:26px;
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
customElements.define("lc-footer", lcFooter);

var lc_footer = document.createElement("lc-footer");
// Add it to the page
document.body.appendChild(lc_footer);
