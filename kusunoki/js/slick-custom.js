$(function() {
    $('.slide-item').slick({
        mobileFirst: true,     //モバイルファーストに変更
        autoplay: true,        // 自動再生
        centerMode: true,      // 前後スライドを部分表示
        centerPadding: '12vw', // 両端の見切れるスライド幅
        arrows: false,          // 矢印
        dots: true,            // インジケーター
        speed: 700,            // アニメーション速度
        slidesToShow: 1,
		slidesToScroll: 1,


        // レスポンシブ設定
        responsive: [
            {
                // 768px「以上」の場合
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    arrows: true,
                }
            },
            {
                // 900px「以上」の場合
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    arrows: true,
                }
            },
            {
                // 1100px「以上」の場合
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    arrows: true,
                }
            }
        ]
    });
});