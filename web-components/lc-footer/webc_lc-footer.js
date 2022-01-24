/*
 * @Author: Steffen U.
 * @Date: 2022-01-18 12:21:52
 * @Last Modified by: Medy
 * @Last Modified time: 2022-01-24 16:20:35
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
    const icon1 = document.createElement("a");
    const icon2 = document.createElement("a");
    const icon3 = document.createElement("a");

    // RIGHT SIDE
    const div_right_side = document.createElement("div");
    const text_wrapper = document.createElement("div");
    const headline_text = document.createElement("h2");
    const paragraph_text = document.createElement("p");
    const footer_list = document.createElement("ul");
    const webmailer = document.createElement("li");
    const online_meeting = document.createElement("li");
    const datenschutz = document.createElement("li");
    const impressum = document.createElement("li");

    // #################### CONFIGURING ELEMENTS ########################
    // ##################################################################

    footer.style.display = "flex";
    footer.classList.add("lc-footer");
    img.style.height = "28px";
    img.style.marginBottom = "2rem";

    // LEFT SIDE
    div_left_side.classList.add("div-left-side");

    img.setAttribute(
      "src",
      "../web-components/lc-footer/assets/img/Google-logo.png"
    );

    li_company.innerText = "Random media GmbH";
    li_street.innerText = "Random Weg 33";
    li_plz.innerText = "123567 Random";
    li_phone.innerText = "+49 111 111 111 11 11";
    li_email.innerText = "info@Random.de";

    ul_adress.classList.add("adress-list");
    li_company.classList.add("adress_item");
    li_street.classList.add("adress_item");
    li_plz.classList.add("adress_item");
    li_phone.classList.add("adress_item");
    li_email.classList.add("adress_item");

    ul_adress.style.display = "flex";
    ul_adress.style.flexDirection = "column";

    li_company.style.paddingLeft = "50px";
    li_company.style.background =
      "url(data:image/svg+xml;base64,PHN2ZyBpZD0iR3J1cHBlXzQxODQiIGRhdGEtbmFtZT0iR3J1cHBlIDQxODQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNC45OSIgdmlld0JveD0iMCAwIDI1IDI0Ljk5Ij4KICA8ZGVmcz4KICAgIDxjbGlwUGF0aCBpZD0iY2xpcC1wYXRoIj4KICAgICAgPHJlY3QgaWQ9IlJlY2h0ZWNrXzI2MSIgZGF0YS1uYW1lPSJSZWNodGVjayAyNjEiIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNC45OSIgZmlsbD0iIzkwMDgxMSIvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CiAgPGcgaWQ9IkdydXBwZV80MTg0LTIiIGRhdGEtbmFtZT0iR3J1cHBlIDQxODQiIGNsaXAtcGF0aD0idXJsKCNjbGlwLXBhdGgpIj4KICAgIDxwYXRoIGlkPSJQZmFkXzUyNyIgZGF0YS1uYW1lPSJQZmFkIDUyNyIgZD0iTTIyLjcyMiwyLjgwNnEyLjI3MiwyLjI3MiwyLjI3Miw5LjM1NHYuNTM0YTQwLjQxNiw0MC40MTYsMCwwLDEtLjIsNC43NDQsMTAuNjQ4LDEwLjY0OCwwLDAsMS0xLjQsMy42NzVRMjEuMzg2LDI0Ljk5LDEzLjMsMjQuOTlUMi42MSwyMi40NTFRMCwxOS45MTIsMCwxMi44Mjl2LS41MzRBNDAuNjU5LDQwLjY1OSwwLDAsMSwuMiw3LjYxOGExMC42NjQsMTAuNjY0LDAsMCwxLDEuMjctMy42MDlRMy40NzksMCwxMS41NjQsMFQyMi43MjIsMi44MDYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiIGZpbGw9IiM5MDA4MTEiLz4KICAgIDxwYXRoIGlkPSJQZmFkXzUyOCIgZGF0YS1uYW1lPSJQZmFkIDUyOCIgZD0iTTM0LjczNiwzMC43MzVhNC45NTEsNC45NTEsMCwwLDEtLjQyOS41MzdsLTQuNDMzLDMuNDM2LTQuNC0zLjQzNmE0LjkzMSw0LjkzMSwwLDAsMS0uNDMtLjUzNyw2Ljk0OCw2Ljk0OCwwLDAsMS0xLjQ4OC0yLjIwOSw2LjgxOSw2LjgxOSwwLDAsMSwuMDA3LTUuMzIzLDYuODY4LDYuODY4LDAsMCwxLDEyLjY1NiwwLDYuODIxLDYuODIxLDAsMCwxLC4wMDgsNS4zMjMsNi45NTYsNi45NTYsMCwwLDEtMS40ODcsMi4yMW0tNC44NDgtOS4zMjhhNC4zNTUsNC4zNTUsMCwwLDAtMi4yMzkuNiw0LjQ2MSw0LjQ2MSwwLDAsMC0xLjYyNSwxLjYyNSw0LjQ3OCw0LjQ3OCwwLDAsMCwwLDQuNDc4LDQuNDgxLDQuNDgxLDAsMCwwLDcuNzI3LDAsNC40NzQsNC40NzQsMCwwLDAsMC00LjQ3OCw0LjQ1Niw0LjQ1NiwwLDAsMC0xLjYyNS0xLjYyNSw0LjM2Niw0LjM2NiwwLDAsMC0yLjIzOS0uNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3LjI2MyAtMTQuMjUyKSIgZmlsbD0iI2ZmZiIvPgogIDwvZz4KPC9zdmc+Cg==) left center / 20px 20px no-repeat";

    //li_company.style.backgroundSize = "20px 20px";
    li_phone.style.paddingLeft = "50px";
    li_phone.style.background =
      "url(data:image/svg+xml;base64,PHN2ZyBpZD0iY2FsbGNlbnRlciIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjUiIGhlaWdodD0iMjQuOTk1IiB2aWV3Qm94PSIwIDAgMjUgMjQuOTk1Ij4KICA8cGF0aCBpZD0iUGZhZF81MTQiIGRhdGEtbmFtZT0iUGZhZCA1MTQiIGQ9Ik0xMy4zNTYtMTUuNzkzcTIuMjcsMi4yNywyLjI3LDkuMzU1Vi01LjlhNDAuNCw0MC40LDAsMCwxLS4yLDQuNzQ3LDEwLjY1MSwxMC42NTEsMCwwLDEtMS40LDMuNjc1UTEyLjAyLDYuNCwzLjkzNCw2LjRULTYuNzU3LDMuODUzUS05LjM2MywxLjMxMy05LjM2My01Ljc3Vi02LjNhNDAuNjU4LDQwLjY1OCwwLDAsMSwuMi00LjY3OCwxMC42NjYsMTAuNjY2LDAsMCwxLDEuMjctMy42MDlRLTUuODg3LTE4LjYsMi4yLTE4LjZUMTMuMzU2LTE1Ljc5M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkuMzY4IDE4LjYpIiBmaWxsPSIjOTAwODExIi8+CiAgPGcgaWQ9IkdydXBwZV80MTcxIiBkYXRhLW5hbWU9IkdydXBwZSA0MTcxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3LjAwMiA1Ljc0OCkiPgogICAgPHBhdGggaWQ9IlBmYWRfNTE1IiBkYXRhLW5hbWU9IlBmYWQgNTE1IiBkPSJNMTAsLjkxNkE0LjU4Miw0LjU4MiwwLDAsMCw1LjQxNiw1LjVWOS42MjJINC41VjUuNWE1LjUsNS41LDAsMSwxLDExLDBWOS42MjJIMTQuNThWNS41QTQuNTgyLDQuNTgyLDAsMCwwLDEwLC45MTZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNC41KSIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIi8+CiAgICA8cGF0aCBpZD0iUGZhZF81MTYiIGRhdGEtbmFtZT0iUGZhZCA1MTYiIGQ9Ik0xMi43NDcsMTYuNjY2YS45MTYuOTE2LDAsMCwxLC45MTYtLjkxNkgxNS41djMuNjY0YS45MTYuOTE2LDAsMCwxLS45MTYuOTE2aC0uOTE2YS45MTYuOTE2LDAsMCwxLS45MTctLjkxNlptLTUuNSwwYS45MTYuOTE2LDAsMCwwLS45MTYtLjkxNkg0LjV2My42NjRhLjkxNi45MTYsMCwwLDAsLjkxNi45MTZoLjkxN2EuOTE2LjkxNiwwLDAsMCwuOTE2LS45MTZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNC41IC05LjMzNSkiIGZpbGw9IiNmZmYiLz4KICAgIDxwYXRoIGlkPSJQZmFkXzUxNyIgZGF0YS1uYW1lPSJQZmFkIDUxNyIgZD0iTTIyLjM4MiwxOS4xMjVhLjQ1OC40NTgsMCwwLDEsLjQ1OC40NTh2Mi43NDlhMi4yOTEsMi4yOTEsMCwwLDEtMi4yOTEsMi4yODlIMTcuMzQyYS40NTguNDU4LDAsMCwxLDAtLjkxNmgzLjIwN2ExLjM3NSwxLjM3NSwwLDAsMCwxLjM3NS0xLjM3NVYxOS41ODNhLjQ1OC40NTgsMCwwLDEsLjQ1OC0uNDU4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExLjg0NCAtMTEuMzM2KSIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIi8+CiAgICA8cGF0aCBpZD0iUGZhZF81MTgiIGRhdGEtbmFtZT0iUGZhZCA1MTgiIGQ9Ik0xNC42MjUsMzAuMTY2YS45MTYuOTE2LDAsMCwxLC45MTYtLjkxNmguOTE2YS45MTYuOTE2LDAsMSwxLDAsMS44MzNoLS45MTZBLjkxNi45MTYsMCwwLDEsMTQuNjI1LDMwLjE2NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMC41MDEgLTE3LjMzNykiIGZpbGw9IiNmZmYiLz4KICA8L2c+Cjwvc3ZnPgo=) left center / 20px 20px no-repeat";

    //li_phone.style.backgroundPosition = "0 -10px";
    li_email.style.paddingLeft = "50px";
    li_plz.style.paddingLeft = "50px";
    li_street.style.paddingLeft = "50px";
    li_email.style.background =
      "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNC45OSIgdmlld0JveD0iMCAwIDI1IDI0Ljk5Ij4KICA8ZyBpZD0ia29udGFrdGFuZnJhZ2UiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03ODEuOTgyIC01MDkpIj4KICAgIDxwYXRoIGlkPSJQZmFkXzY5OCIgZGF0YS1uYW1lPSJQZmFkIDY5OCIgZD0iTTEzLjM1NC0xNS43OTRxMi4yNzIsMi4yNzIsMi4yNzIsOS4zNTR2LjUzNGE0MC4zOTQsNDAuMzk0LDAsMCwxLS4yLDQuNzQ0LDEwLjY1LDEwLjY1LDAsMCwxLTEuNCwzLjY3NVExMi4wMTgsNi4zOSwzLjkzMyw2LjM5VC02Ljc1OCwzLjg1MVEtOS4zNjQsMS4zMTItOS4zNjQtNS43NzFWLTYuM2E0MC42NTYsNDAuNjU2LDAsMCwxLC4yLTQuNjc3LDEwLjY2NSwxMC42NjUsMCwwLDEsMS4yNy0zLjYwOXEyLTQuMDA5LDEwLjA5LTQuMDA5VDEzLjM1NC0xNS43OTRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3OTEuMzUgNTI3LjYpIiBmaWxsPSIjOTAwODExIi8+CiAgICA8ZyBpZD0ibWFpbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzg3LjczNCA1MTUuOTk3KSI+CiAgICAgIDxwYXRoIGlkPSJQZmFkXzEzIiBkYXRhLW5hbWU9IlBmYWQgMTMiIGQ9Ik00LjUwOCw4LjAyMWEuNzY0Ljc2NCwwLDAsMSwuNzYzLS43NjRoMTIuMjFhLjc2NC43NjQsMCwwLDEsLjc2NC43NjR2OC42NDZhMS41MjcsMS41MjcsMCwwLDEtMS41MjcsMS41MjdINi4wMjdBMS41MjcsMS41MjcsMCwwLDEsNC41LDE2LjY2N3YtOC40YS43MzkuNzM5LDAsMCwxLC4wMDgtLjEwN1ptMS41MiwxLjd2Ni45NDdoMTAuNjlWOS43MTlsLTMuNzI1LDMuNzI1YTIuMjkxLDIuMjkxLDAsMCwxLTMuMjM5LDBMNi4wMjcsOS43MTdabTEuMi0uOTU5aDguMjlsLTMuNiwzLjZhLjc2NC43NjQsMCwwLDEtMS4wODEsMGwtMy42LTMuNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00LjUgLTcuMjU3KSIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K) left center / 20px 20px no-repeat";

    //li_email.style.backgroundSize = "25px 25px";

    ul_icons.classList.add("icons-list");
    icon1.classList.add("icon_item");
    icon2.classList.add("icon_item");
    icon3.classList.add("icon_item");

    icon1.style.background =
      "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNC44NDgiIHZpZXdCb3g9IjAgMCAyNSAyNC44NDgiPgogIDxnIGlkPSJmYWNlYm9vayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSI+CiAgICA8cGF0aCBpZD0iUGZhZF81MDQiIGRhdGEtbmFtZT0iUGZhZCA1MDQiIGQ9Ik0yNSwxMi41QTEyLjUsMTIuNSwwLDEsMCwxMC41NDcsMjQuODQ4VjE2LjExM0g3LjM3NVYxMi41aDMuMTc0VjkuNzQ2YzAtMy4xMzMsMS44NjYtNC44NjQsNC43MjEtNC44NjRhMTkuMjA3LDE5LjIwNywwLDAsMSwyLjguMjQ0VjguMkgxNi40OWExLjgwNywxLjgwNywwLDAsMC0yLjAzNywxLjk1M1YxMi41SDE3LjkybC0uNTU0LDMuNjEzSDE0LjQ1M3Y4LjczNUExMi41LDEyLjUsMCwwLDAsMjUsMTIuNVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiIGZpbGw9IiNmZmYiLz4KICA8L2c+Cjwvc3ZnPgo=) center center no-repeat";
    icon2.style.background =
      "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSIgdmlld0JveD0iMCAwIDI1IDI1Ij4KICA8ZyBpZD0iaW5zdGFncmFtIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIj4KICAgIDxwYXRoIGlkPSJQZmFkXzUwNiIgZGF0YS1uYW1lPSJQZmFkIDUwNiIgZD0iTTE3LjU1MiwwSDcuNDQ4QTcuNDU2LDcuNDU2LDAsMCwwLDAsNy40NDd2MTAuMUE3LjQ1Niw3LjQ1NiwwLDAsMCw3LjQ0OCwyNWgxMC4xQTcuNDU2LDcuNDU2LDAsMCwwLDI1LDE3LjU1MlY3LjQ0N0E3LjQ1Niw3LjQ1NiwwLDAsMCwxNy41NTIsMFptNC45MzMsMTcuNTUyYTQuOTMzLDQuOTMzLDAsMCwxLTQuOTMyLDQuOTMzSDcuNDQ4YTQuOTMzLDQuOTMzLDAsMCwxLTQuOTMyLTQuOTMyVjcuNDQ3QTQuOTMyLDQuOTMyLDAsMCwxLDcuNDQ4LDIuNTE1aDEwLjFhNC45MzIsNC45MzIsMCwwLDEsNC45MzMsNC45MzNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIiBmaWxsPSIjZmZmIi8+CiAgICA8cGF0aCBpZD0iUGZhZF81MDciIGRhdGEtbmFtZT0iUGZhZCA1MDciIGQ9Ik0xMDMuMDE2LDk2LjU1YTYuNDY2LDYuNDY2LDAsMSwwLDYuNDY2LDYuNDY2QTYuNDY2LDYuNDY2LDAsMCwwLDEwMy4wMTYsOTYuNTVabTAsMTAuNDE2YTMuOTUxLDMuOTUxLDAsMSwxLDMuOTUxLTMuOTUxQTMuOTUxLDMuOTUxLDAsMCwxLDEwMy4wMTYsMTA2Ljk2NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05MC41MTYgLTkwLjUxNikiIGZpbGw9IiNmZmYiLz4KICAgIDxlbGxpcHNlIGlkPSJFbGxpcHNlXzIyIiBkYXRhLW5hbWU9IkVsbGlwc2UgMjIiIGN4PSIxLjU0OSIgY3k9IjEuNTQ5IiByeD0iMS41NDkiIHJ5PSIxLjU0OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTcuNDI5IDQuNTMzKSIgZmlsbD0iI2ZmZiIvPgogIDwvZz4KPC9zdmc+Cg==) center center no-repeat";
    icon3.style.background =
      "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNS4wMDEiIHZpZXdCb3g9IjAgMCAyNSAyNS4wMDEiPgogIDxwYXRoIGlkPSJwaW50ZXJlc3QiIGQ9Ik0yNC45ODksMTIuODQ2QTEyLjUsMTIuNSwwLDEsMCw3LjAzNSwyMy43M2EuMzUzLjM1MywwLDAsMCwuNTA3LS4zMzFBOS4zOTIsOS4zOTIsMCwwLDEsNy43LDIxLjA0NGMuMTU5LS42ODEuNzgtMy4zMTIsMS4xODctNS4wNDFhNi4xNzUsNi4xNzUsMCwwLDAsLjA2Mi0yLjU2Miw1LjI1NSw1LjI1NSwwLDAsMS0uMDkxLS45NzFjMC0xLjg0NywxLjA3MS0zLjIyNywyLjQtMy4yMjdhMS42NjksMS42NjksMCwwLDEsMS42ODEsMS44NzFjMCwxLjE0LS43MjYsMi44NDQtMS4xLDQuNDI0YTEuOTI5LDEuOTI5LDAsMCwwLDEuOTY3LDIuNGMyLjM2MiwwLDQuMTc3LTIuNDksNC4xNzctNi4wODRhNS4yNDUsNS4yNDUsMCwwLDAtNS41NS01LjQwNSw1Ljc1MSw1Ljc1MSwwLDAsMC02LDUuNzY2LDUuMTU1LDUuMTU1LDAsMCwwLC45ODksMy4wMzIuNC40LDAsMCwxLC4wOTIuMzgxYy0uMS40Mi0uMzI1LDEuMzIyLS4zNjksMS41MDctLjA1OC4yNDMtLjE5Mi4yOTUtLjQ0NC4xNzgtMS42NTktLjc3Mi0yLjctMy4yLTIuNy01LjE0NywwLTQuMiwzLjA0OS04LjA0Niw4Ljc4LTguMDQ2LDQuNjA5LDAsOC4xOTEsMy4yODQsOC4xOTEsNy42NzQsMCw0LjU3OS0yLjg4Nyw4LjI2NC02Ljg5NCw4LjI2NGEzLjkxMSwzLjkxMSwwLDAsMS0yLjY2Mi0xLjAxOS4zMzIuMzMyLDAsMCwwLS41NTYuMTVjLS4yMDkuOC0uNTQ3LDIuMDg0LS42NTYsMi41YTExLjU4MywxMS41ODMsMCwwLDEtMS4wMjIsMi4zOTUuMzUzLjM1MywwLDAsMCwuMjI1LjUxMSwxMi41NDcsMTIuNTQ3LDAsMCwwLDMuMi4zODZBMTIuNzEyLDEyLjcxMiwwLDAsMCwyNC45ODksMTIuODQ2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDYgMC4wMjEpIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo=) center center no-repeat";

    icon1.style.height = "25px";
    icon2.style.height = "25px";
    icon3.style.height = "25px";

    icon1.style.width = "25px";
    icon2.style.width = "25px";
    icon3.style.width = "25px";

    ul_icons.style.display = "flex";
    ul_icons.style.gap = "10px";

    icon1.setAttribute("href", "https://www.facebook.com/LUPCOM");
    icon2.setAttribute("href", "https://www.instagram.com/lupcom.media");
    icon3.setAttribute("href", "https://www.pinterest.de/LUPCOM/");

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

    footer_list.style.listStyle = "none";
    footer_list.style.display = "flex";

    text_wrapper.classList.add("text-wrapper");

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

    div_right_side.appendChild(text_wrapper);

    text_wrapper.appendChild(headline_text);
    text_wrapper.appendChild(paragraph_text);

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

    .div-right-side{
      display:flex;
      flex-direction:column;
      justify-content:space-between;
    }

    footer{
      justify-content:space-between;
      flex-wrap:wrap;
      margin: 0 4rem;
    }

    .footer-list{

      font-family: "Barlow Condensed", sans-serif;

      justify-content:space-between;
      font-size:1.6rem;

    }

    .text-wrapper {
      font-family: "Barlow Condensed", sans-serif;
    }

    .adress-list{
      list-style:none;
      font-size:1.6rem;
      line-height: 1.4;
      font-family: "Barlow Condensed", sans-serif;

      margin-bottom:2rem;
    }
    .icons-list{
      list-style:none;
    }

    .lc-logo{
      margin-bottom:2rem;
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

/* var lc_footer = document.createElement("lc-footer");
// Add it to the page
document.body.appendChild(lc_footer); */
