$(function () {
	$("#btt").hide();

	$(window).scroll(function () {
		// スクロール量を表示する
		//$("#pos").text($(this).scrollTop());

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

	// トップへ戻る
	$("#btt a").click(function () {
		$("html,body").animate(
			{
				scrollTop: 0
			},
			1000
		);
		return false;
	});


	// ページ内リンクへの移動
	$('a[href^="#"]:not([href="#"])').click(function () {
		let target = $($(this).attr('href')).offset().top;
		// console.log('縦の位置：' + target);
		$('html,body').animate({ scrollTop: target }, 1000);
	});

});
