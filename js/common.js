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
$('.swiper-tab span').hover(function () {
    var index = findIndex($(this).index());
    $(this).addClass('active').siblings().removeClass('active');
    $(this).siblings().children().children('.tab-line').addClass('dn')
    $(this).children().children('.tab-line').removeClass('dn')
    $('.tab-text-wrapper').hide().eq(index).show();
});

// 政务公开
$('.zwgk-tab-title span').hover(function () {
    var index = findIndex($(this).index());
    $(this).addClass('zwgk-active').siblings().removeClass('zwgk-active');
    $('.zwgk-content-list').hide().eq(index).show();
});
// 网址导航
$('.linknav>li').hover(function(){
    // var index = $(this).index();
    $(this).addClass('cur').siblings().removeClass('cur');
    // $('.linkbox').hide().eq(index).show();
},function(){
    $(this).removeClass('cur');
});
// 首页banner导航
$('.top-nav ul li').hover(function (){
    var index = $(this).index()
    if (index === 0) {
        return true
    }
    // $(this).siblings().children().filter('.bottomline').hide()
    $(this).children().filter('.bottomline').show();
},function (){
    var index = $(this).index()
    if (index === 0) {
        return true
    }
    $(this).children().filter('.bottomline').hide();
});

// 简繁切换
function fycninit()
{
    fycnbtnObject = document.getElementById(fy_cn);

    if ( fycnbtnObject )
    {
        with( fycnbtnObject )
        {
            if(typeof(document.all)!="object")
            {
                href="javascript:fycnPage();";
            }
            else
            {
                href="#";
                onclick = new Function( "fycnPage(); return false;");
            }
        }

        if ( currentEncoding != targetEncoding )
        {
            setTimeout("translateBody()",translateDelay);
            if( targetEncoding == 1 ){
                fycnbtnObject.innerHTML = msgToSimplifiedChinese;
            }

        }
    }
}


function fytwinit()
{
    fytwbtnObject = document.getElementById(fy_tw);

    if ( fytwbtnObject )
    {
        with( fytwbtnObject )
        {
            if(typeof(document.all)!="object")
            {
                href="javascript:fytwPage();";
            }
            else
            {
                href="#";
                onclick = new Function( "fytwPage(); return false;");
            }
        }

        if ( currentEncoding != targetEncoding )
        {
            setTimeout("translateBody()",translateDelay);
            if( targetEncoding == 2 ){
                fytwbtnObject.innerHTML = msgToTraditionalChinese;
            }

        }
    }
}
// 首页banner轮播图
$(function () {
    var scroll = new zScroll({
        container:'#swiper',
        autoplay:true
    })
});

// 专题导航轮播
$(function () {
    var scroll = new zScroll({
        container: '#special-list',
        previewNum: 4,
        autoplay: true,
        pagination: false,
        space:33,
        breakpoints: {
            // 若宽度小于768
            768: {
                previewNum: 2,
                space: 0
            }
        }
    })
});