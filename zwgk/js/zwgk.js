// 记录首页下划线导航栏的index，默认为0,政务公开为1
topIndex = 1

// 网址导航
$('.linknav>li').hover(function(){
    // var index = $(this).index();
    $(this).addClass('cur').siblings().removeClass('cur');
    // $('.linkbox').hide().eq(index).show();
},function(){
    $(this).removeClass('cur');
});