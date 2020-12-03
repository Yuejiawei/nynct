// 记录首页下划线导航栏的index，默认为0,政务公开为1
topIndex = 1

// 政府信息公开指南和目录默认展开
$('.dl_nav01 .sideMenu ul').css('display','block')
// 点击证信息公开指南和目录
$('.dl_nav01 .sideMenu h3').click(function () {
    if($(this).next("ul").is(":hidden")){
        $('h3').removeClass('on').siblings().filter('ul').hide()
        $(this).addClass('on')
        $(this).siblings().filter('ul').show()
        $('.scroll_main').hide().siblings('.scroll_main').eq(0).show()
    } else {
        return true
    }
})
// 政府信息公开指南和目录 点击展开的子项
$('.dl_nav01 .sideMenu ul li').click(function (){
    $(this).siblings().removeClass('active')
    $(this).addClass('active')
    var index = $(this).index()
    $('.scroll_main').hide().siblings('.scroll_main').eq(index).show()
})
// 点击政府信息公开制度
$('.dl_nav01 h3:nth-last-child(1)').click(function () {
    $('h3').removeClass('on').siblings().filter('ul').hide()
    $(this).addClass('on')
    $('.scroll_main').hide().siblings('.scroll_main').eq(2).show()
})
// 点击法定主动公开内容
$(".dl_nav02 .sideMenu h3:nth-of-type(1)").click(function () {
    $(".dl_nav01 h3").removeClass("on").next("ul").hide();
    if ($(this).next("ul").is(":hidden")) {
        $(this).addClass("on").siblings("h3").removeClass("on");
        $(this).next("ul").slideDown().siblings("ul").slideUp();
        $(this).next("ul").find('.secondli').show()
        $('.scroll_main').hide().siblings('.scroll_main').eq(3).show()
    }else {
        return true ;
    }
})

// 点击点击法定主动公开内容中的某一个子项
$(".dl_nav02 .sideMenu ul:nth-of-type(1) li").click(function (){
    if($(this).hasClass('active')){
        return true
    }else {
        var index = $(this).index()

        if(index === 0){
            $(this).find('.secondli').show()
            $('.scroll_main').hide().siblings('.scroll_main').eq(3+index).show()
        }else{
            $(this).siblings('li').find('.secondli').hide()
            // 因为index = 0 时里面的子项占据了两个scroll_main,
            // 所以index=0之后需要多加上一个scroll_main
            $('.scroll_main').hide().siblings('.scroll_main').eq(4+index).show()
        }
        $(this).addClass('active').siblings('li').removeClass('active')
    }

})
// 点击法定主动公开内容中的政策法规中的某一个
$('.secondli dt').click(function (e){
    if($(this).hasClass('selected')){
        return true
    }else {
        var index = $(this).index()
        if(index === 0) {
            $('.scroll_main').hide().siblings('.scroll_main').eq(3).show()
        }else {
            $('.scroll_main').hide().siblings('.scroll_main').eq(4).show()
        }
        $(this).siblings().removeClass('selected').siblings().addClass('selected')
    }
    e.preventDefault()
    e.stopPropagation()
})
// 点击政府信息公开年报
$(".dl_nav02 .sideMenu h3:nth-of-type(2)").click(function () {
    $(".dl_nav01 h3").removeClass("on").next("ul").hide();
    $(this).siblings('h3').removeClass("on").next("ul").hide();
    if ($(this).next("ul").is(":hidden")) {
        console.log($(this).next("ul").is(":hidden"))
        $(this).addClass("on").siblings("h3").removeClass("on");
        $(this).next("ul").slideDown().siblings("ul").slideUp();
        $('.scroll_main').hide().siblings('.scroll_main').eq(20).show()
    }else {
        return true
    }
})

// 点击政府信息公开年报中的子项
$(".dl_nav02 .sideMenu ul:nth-of-type(2) li").click(function (e){
    if($(this).hasClass('active')){
        return true
    }else {
        var index = $(this).index()
        $(this).addClass('active').siblings('li').removeClass('active')
        $('.scroll_main').hide().siblings('.scroll_main').eq(20+index).show()
    }
    e.preventDefault()
    e.stopPropagation()
})

// 分页
paginate('.table tbody','.table', 10)
paginate('.table1 tbody','.table1', 10)
paginate('.wjtz-list','.wjtz-list',10)


// 网址导航
$('.linknav>li').hover(function(){
    // var index = $(this).index();
    $(this).addClass('cur').siblings().removeClass('cur');
    // $('.linkbox').hide().eq(index).show();
},function(){
    $(this).removeClass('cur');
});
// 针对跳转的参数对指定的页面进行相应的回显
function getResponse (index1, index2){
    $(".dl_nav01 .sideMenu h3").removeClass("on").next("ul").hide();
    var obj = $(".dl_nav02 .sideMenu h3:nth-of-type(1)")
    obj.next("ul").slideDown().siblings("ul").slideUp();
    obj.next('ul').children('li').siblings().eq(index1).addClass('active').siblings('li').removeClass('active')
    $('.scroll_main').hide().siblings('.scroll_main').eq(index2).show()
}
// 获取其他页面传过来的name参数
function getJumpParam (name) {
    if (typeof(name) != 'string') {
        return false;
    }else {
        var nameStr = name.split('=')[1]
        switch (nameStr) {
            case 'ldzc':
                getResponse(2, 6)
                break;
            case 'znpz':
                getResponse(11, 15)
                break;
            case 'nsjg':
                getResponse(12, 16)
                break;
            case 'zsdw':
                getResponse(13, 17)
                break;
            case 'czgk':
                getResponse(4, 8)
                break;
            case 'cggk':
                getResponse(9, 13)
                break;
            case 'ssjygk':
                getResponse(10, 14)
                break;
            default:
                break
        }
    }
}

// 查找是否是由其他页面跳转过来的
$(function () {
    var param = location.search
    if (param === "") {
        return true
    }else {
        getJumpParam(param)
    }
})
