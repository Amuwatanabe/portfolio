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
	//HOMEへ戻る
	$("#HOME a").click(function () {
		$("html,body").animate(
			{
				scrollTop: 0
			},
			800
		);
		return false;
	});
	//ABOUTへ戻る
	$("#ABOUT a").click(function () {
		$("html,body").animate(
			{
				scrollTop: 632
			},
			800
		);
		return false;
	});

	//SKILLへ戻る
	$("#SKILL a").click(function () {
		$("html,body").animate(
			{
				scrollTop: 1332
			},
			800
		);
		return false;
	});

	//WORKSへ戻る
	$("#WORKS a").click(function () {
		$("html,body").animate(
			{
				scrollTop: 2034
			},
			800
		);
		return false;
	});

	//CONTACTへ戻る
	$("#CONTACT a").click(function () {
		$("html,body").animate(
			{
				scrollTop: 2574
			},
			800
		);
		return false;
	});

});
