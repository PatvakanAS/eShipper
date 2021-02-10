$(function () {
    $(".show_menu").on("click", function () {
        var showId = $("#show");
        showId.addClass("show1").toggle(300);
    });


});

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.177200, lng: 44.503490},
        scrollwheel: true,
        zoom: 12
    });
}