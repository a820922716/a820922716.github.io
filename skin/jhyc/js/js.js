$(function () {

    //下拉菜单
    $(".navigation li").hover(function () {
        $(this).find(".xiala").stop(true, false).slideToggle();
    });
    //左菜单点击跳转
    $(".zong_left ul li").click(function () {
        var index = $(this).index();
        $(".zong_left ul li").removeClass("hover").eq(index).addClass("hover");
        $(".zong_right").hide().eq(index).show();
    });

    //首页常见问题
    var _dd = $(".five_faq_bottom");
    var _dt = $(".five_faq_top");
    var _dtlength = _dt.length;
    _dd.eq(0).show();
    _dt.click(function () {
        if ($(this).next().css("display") == "none") {
            _dt.removeClass("hover");
            _dd.stop().slideUp();
            $(this).addClass("hover");
            $(this).next().stop().slideDown();
            $(this).find('a').toggleClass("hover");
        } else {
            $(this).removeClass("hover");
            if (_dt.index(this) == _dtlength - 1) {
                $(this).addClass("hover");
            }
            $(this).removeClass("hover");
            $(this).next().stop().slideUp();
        }
    });

    $(".environ ul li").click(function () {
        var index = $(this).index();
        $(".environ ul li").removeClass("hover").eq(index).addClass("hover");
        $(".environ_left").hide().eq($(this).attr("data")).show();
    })

    //新闻显示更多资讯
    //	$(".yincang .yincangs").click(function(){
    //        $(".yincang_ny").stop(true,false).slideDown();
    //		$(this).stop(true,false).slideUp();
    //    });

    //知识学院
    var _dds = $(".in_f_c");
    var _dts = $(".in_f_add");
    var _dtslength = _dts.length;
    _dds.eq(0).hide();
    _dts.click(function () {

    });
    $(".in_f_add").live("click", function () {
        if ($(this).next().css("display") == "none") {
            _dts.removeClass("hover");
            _dds.stop().slideUp();
            $(this).addClass("hover");
            $(this).next().stop().slideDown();
            $(this).find('a').toggleClass("hover");
        } else {
            $(this).removeClass("hover");
            if (_dts.index(this) == _dtslength - 1) {
                $(this).addClass("hover");
            }
            $(this).removeClass("hover");
            $(this).next().stop().slideUp();
        }
    })

    //QQ客服
    $(".qq_kf").hover(function () {
        $(this).stop(true, true).animate({ "right": "0px" }, 500);
    }, function () {
        $(this).stop(true, true).animate({ "right": "-135px" }, 500);
    });

    //合作伙伴
    $(".partner li").hover(function () {
        $(this).find(".cover").stop(true, true).animate({ "opacity": "1" });
        $(this).find(".cover img").stop(true, true).animate({ "margin-top": "60px" }, 600);
        $(this).find(".cover p").stop(true, true).animate({ "margin-top": "5px" }, 500);
    }, function () {
        $(this).find(".cover").stop(true, true).animate({ "opacity": "0" });
        $(this).find(".cover img").stop(true, true).animate({ "margin-top": "-60px" }, 500);
        $(this).find(".cover p").stop(true, true).animate({ "margin-top": "-50px" }, 7000);
    });
    //美学工作室
    $(".studio_ny1 li").hover(function () {
        $(this).find(".studio_cover").stop(true, true).animate({ "opacity": "1" });
    }, function () {
        $(this).find(".studio_cover").stop(true, true).animate({ "opacity": "0" });
    });





    $(".bo").click(function () {
        $(this).next(".czem_a_cont").slideToggle();
        $(this).find(".a span").toggleClass("cz_current");
    });


    $(".in_cont li").click(function () {
        var index = $(this).index();
        $(".four_right").hide().eq(index).show();
    });
    //btn跳转
    $(".pro_top a").hover(function () {
        var index = $(this).index();
        $(".pro_top a").removeClass("hover").eq(index).addClass("hover");
        $(".tiaoz").hide().eq(index).show();
    });
    //btn跳转
    $(".tiao_zy h2").hover(function () {
        var index = $(this).index();
        $(".tiao_zy h2").removeClass("hover").eq(index).addClass("hover");
        $(".sorllMenu").hide().eq(index).show();
    });




    //客服
    $(".qqkefu .top,#nav p a").click(function () {
        $("html,body").animate({ "scrollTop": 0 }, 1000);
    })
    $(window).scroll(function () {
        var scrollTop = document.body.scrollTop;
        //        if(scrollTop>78){
        //            $(".top").css({"opacity":"http://www.jhteeth.com/skin/jhyc/js/0.95","filter":"alpha(opacity=95)"})
        //        }else{
        //            $(".top").css({"opacity":"1","filter":"alpha(opacity=100)"})
        //        }
    })

    //QQ
    $(".qq_czaa").hover(function () {
        var idw = this.id;
        if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE7.0") {
            $(this).stop(true, false).animate({ width: idw, "left": "-85px" }, 300);
        } else {
            $(this).stop(true, false).animate({ "width": "160px" }, 300);
        }
    }, function () {
        if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE7.0") {
            $(this).stop(true, false).animate({ "width": "45px", "left": "0" }, 300);
        } else {
            $(this).stop(true, false).animate({ "width": "45px" }, 300);
        }
    })

    $(".qq_czb").hover(function () {
        $(".erweima").show(50)
    }, function () {
        $(".erweima").hide(50)
    })

});



	
	