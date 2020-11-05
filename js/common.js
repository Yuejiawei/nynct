// 寻找正确的index
function findIndex (index) {
    switch(index){
        case 0: index = 0;break;
        case 2: index = 1;break;
        case 4: index = 2;break;
        default: index = 0;
    }
    return index
}
// 云农快讯、信息联播选项卡切换
$('.swiper-tab span').click(function () {
    var index = findIndex($(this).index());
    $(this).addClass('active').siblings().removeClass('active');
    $(this).siblings().children().children('.tab-line').addClass('dn')
    $(this).children().children('.tab-line').removeClass('dn')
    $('.tab-text-wrapper').hide().eq(index).show();
});

// 政务公开
$('.zwgk-tab-title span').click(function () {
    var index = findIndex($(this).index());
    $(this).addClass('zwgk-active').siblings().removeClass('zwgk-active');
    $('.zwgk-content-list').hide().eq(index).show();
});