//load webpage fade in
$(document).ready(function() {
    $("body").fadeIn(1000);
}

);
//hover over button
$(document).ready(function() {
    $("#darkmode").hover(function() {
        $("#darkmode").css("background-color", "black");
    }, function() {
        $("#darkmode").css("background-color", "white");
    });
}
);
//click button
$(document).ready(function() {
    $("#darkmode").click(function() {
        $("body").fadeOut(1000);
        setTimeout(function() {
            window.location.href = "darkmode.html";
        }, 1000);
    });
}
);





