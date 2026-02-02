$(function () {
	$('.fade-left').on('inview', function (event, isInView) {
		if (isInView) {
			//表示領域に入った時
			$(this).addClass('animate__fadeInLeft');
		} else {
			//表示領域から出た時
			$(this).removeClass('animate__fadeInLeft');
			$(this).css('opacity', 0); //非表示にしておく
		}
	});
	$('.fade-right').on('inview', function (event, isInView) {
		if (isInView) {
			//表示領域に入った時
			$(this).addClass('animate__fadeInRight');
		} else {
			//表示領域から出た時
			$(this).removeClass('animate__fadeInRight');
			$(this).css('opacity', 0); //非表示にしておく
		}
	});
	$('.fadeup').on('inview', function (event, isInView) {
		if (isInView) {
			//表示領域に入った時
			$(this).addClass('animate__fadeInUp');
		} else {
			//表示領域から出た時
			$(this).removeClass('animate__fadeInUp');
			$(this).css('opacity', 0); //非表示にしておく
		}
	});
	$('.fadein').on('inview', function (event, isInView) {
		if (isInView) {
			//表示領域に入った時
			$(this).addClass('animate__fadeIn');
		} else {
			//表示領域から出た時
			$(this).removeClass('animate__fadeIn');
			$(this).css('opacity', 0); //非表示にしておく
		}
	});
});