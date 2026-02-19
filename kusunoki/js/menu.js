$(function () {
	let op = $("header");
	$(".toggle").click(function () {
		console.log("OK");
		//クラス名を付けたり外したりする
		op.toggleClass("open");
	});

	// nav
	$(".nav a").click(function () {
		console.log("OK");
		//クラス名を付けたり外したりする
		op.toggleClass("open");
	});
});