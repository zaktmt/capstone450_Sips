//change website to darkmode
// Author:

// ==UserScript==
// @name         Darkmode
// @namespace    http://
// @version      1
// @description  try to take over the world!
// @match        http://
// @grant        none
// ==/UserScript==
//
function darkmode() {
    var x = document.getElementById("darkmode");
    if (x.innerHTML === "Darkmode") {
        x.innerHTML = "Lightmode";
    } else {
        x.innerHTML = "Darkmode";
    }
}
//

