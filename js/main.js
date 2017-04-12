"use strict";

/*轮播图js*/
$(function() {
    /*获取轮播屏幕的大小*/
    function resize() {
        var screenWidth = $(window).width();
        var smallscreen = screenWidth < 768;
        var $items = $("#roll-radio div.item");
        $items.each(function(index, ele) {
            var $ele = $(ele);
            var imgsrc = smallscreen ? $ele.data('img-sm') : $ele.data('img-lg');
            $ele.css("background-image", 'url(" ' + imgsrc + '")');
            if (smallscreen) {
                $ele.html("<img src=" + imgsrc + " alt=' ' / > ");

            } else {

                $ele.empty();
            }
        });

        var ulWidth = $("#products_ul").width();
        var $lis = $("#products_ul li");
        var liWidth = 0;
        $lis.each(function(index, ele) {
            liWidth += $(ele).outerWidth();
        });
        console.log(ulWidth);
        console.log(liWidth);
        if (ulWidth < liWidth) {
            $("#products_ul").css({
                "width": (liWidth + 50) + "px",

            });
            $("#products_ul").parent().css("overflow-x", "scroll");
        }

    }

    /*网页打开是运行一次*/
    $(window).on("resize", resize).trigger("resize");


    /*工具提示初始化*/
    $('[data-toggle="tooltip"]').tooltip()



    /*移动web轮播图*/
    var startClientX;
    var endClientX;
    var difference = 50;
    $("#roll-radio").on("touchstart", function(event) {
        startClientX = event.originalEvent.touches[0].clientX;
        // console.log(event.originalEvent.touches[0].clientX);

    });
    $("#roll-radio").on('touchmove', function(event) {
        // console.log(event);
        endClientX = event.originalEvent.touches[0].clientX;
    });
    $("#roll-radio").on("touchend", function(event) {
        /*console.log(endClientX);*/

        /*获取手指滑动的差值*/
        var differ = endClientX - startClientX;
        /*console.log(differ);  */

        /*获取绝对值*/
        var differwidth = Math.abs(differ);
        if (differwidth > difference) {
            if (differ > 0) {
                $(".carousel").carousel("prev");

            } else {
                $(".carousel").carousel("next");
            }
        }

    });
    /*移动web轮播图结束*/
    /*轮播图js结束*/

    /*新闻版块*/
    $("#table_list li a").on("click", function() {
        var dataTitle = $(this).data("title");
        $(".news-title").text(dataTitle);
    });
    /*新闻版块结束*/
});
