$(document).on("mousemove", function (e) {
    $(".cursor").css({ left:e.clientX - 25 + "px", top:e.clientY - 25 + "px" });
});


$(document).ready(function () {
    $(".menu-toggle").click(function () {
        $("nav").toggleClass("active");
    });
});