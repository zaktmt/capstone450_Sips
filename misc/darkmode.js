//this doesn't work yet
function darkmode() {
    var x = document.getElementById("darkmode");
    if (x.innerHTML === "Darkmode") {
        x.innerHTML = "Lightmode";
    } else {
        x.innerHTML = "Darkmode";
    }
}

darkmode();
