$(function () {
	$(".show_menu").on("click", function () {
		var showId = $("#show");
		showId.addClass("show1").toggle(300);
	});

    var $img_l = $(".rot_l");
    var $win_l = $(window);

    $win_l.on("scroll", function () {
        var top = $win.scrollTop() / 2;
        $img_l.css({
            "transform" : "rotate("+ top + "deg )",
        })
    });

    var $img = $(".rot_r");
    var $win = $(window);

    $win.on("scroll", function () {
        var top = $win.scrollTop() / 2;
        $img.css({
            "transform" : "rotate("+  "-" +  top + "deg )",
        })
    })
});