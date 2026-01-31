$(function () {
	$("#btt").hide();

	$(window).scroll(function () {
		// スクロール量を表示する
		// $("#pos").text($(this).scrollTop());

		// スクロール量が700px超えたら
		if ($(this).scrollTop() > 700) {
			// #bttをフェードインさせる
			$("#btt").fadeIn();
			// スクロール量が700px未満だったら
		} else {
			//#bttをフェードアウトさせる
			$("#btt").fadeOut();
		}
	});

	$("#btt a").click(function () {
		$("html,body").animate(
			{
				scrollTop: 0
			},
			1000
		);
		return false;
	});
});