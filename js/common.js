// 记录首页下划线导航栏的index，默认为0
var topIndex = 0;
// 寻找正确的index
function findIndex (index) {
    switch(index){
        case 0: index = 0;break;
        case 2: index = 1;break;
        case 4: index = 2;break;
        default: index = 0;
    }
    return index;
}



// 网址导航
$('.linknav>li').hover(function(){
    // var index = $(this).index();
    $(this).addClass('cur').siblings().removeClass('cur');
    // $('.linkbox').hide().eq(index).show();
},function(){
    $(this).removeClass('cur');
});
// 首页banner导航
function getCurrentIndex() {
    $('.top-nav ul li').hover(function (){
        var index = $(this).index();
        if (index === topIndex) {
            return true;
        }else{
            $(this).children().filter('.bottomline').show();
        }
    },function (){
        var index = $(this).index();
        if (index === topIndex) {
            $(this).siblings().eq(index).filter('.bottomline').show();
        }else{
            $(this).children().filter('.bottomline').hide();
        }
    });
}
getCurrentIndex()


// 检索
function submitsearch(){
    var result = $("#textfield").val(); //获取检索词
    result = $.trim(result); //去掉空格

    //判断检索词
    var reg = /[`~!@#$%^&*_+<>{}\/'[\]]/im;
    if (reg.test(result)) {
        alert('您输入的信息包含非法字符!');
        return false;
    }
    if (result === "请输入关键字" || result === "" || result === null) {
        alert("请输入检索条件!");
        return false;
    } else {
        result = result.replace("-", "\-");
        result = result.replace("(", "\(");
        result = result.replace(")", "\)");
        result = result.replace(/‘/g, '');
        result = result.replace(/’/g, '');
        result = result.replace(/"/g, '');
        result = result.replace(/”/g, '');
        result = result.replace(/“/g, '');
    }

    //跳转搜索页面
    window.location.href = "/";
}

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
        space:40,
        breakpoints: {
            // 若宽度小于768
            768: {
                previewNum: 2,
                space: 0
            }
        }
    })
});
browserRedirect()
// 手机端的导航栏切换
function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) === "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) === "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) === "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) === "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) === "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) === "android";
    var bIsCE = sUserAgent.match(/windows ce/i) === "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) === "windows mobile";
    if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) ){
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
    } else {
        // 云农快讯、信息联播选项卡切换
        $('.swiper-tab span').click(function () {
            var index = findIndex($(this).index());
            $(this).addClass('active').siblings().removeClass('active');
            $(this).siblings().children().children('.tab-line').addClass('dn')
            $(this).children().children('.tab-line').removeClass('dn')
            $('.tab-text-wrapper').hide().eq(index).show();
            e.stopPropagation()
        });
        // 政务公开
        $('.zwgk-tab-title span').click(function () {
            var index = findIndex($(this).index());
            $(this).addClass('zwgk-active').siblings().removeClass('zwgk-active');
            $('.zwgk-content-list').hide().eq(index).show();
            return false;
        });
    }
}