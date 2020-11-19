// 云农视频顶部选项卡切换
$('.ynsp-guide span').click(function (){
    if($(this).hasClass('active')){
        return true
    }else{
        $(this).addClass('active').siblings().removeClass('active')
        var index = $(this).index()
        if(index === 1) {
            $(this).children('img').attr('src','img/rjhjpic_1.png')
            $(this).siblings().children('img').attr('src','img/kyqcsc.png')
            $('.ynsp-video-wrapper').hide().siblings('.ynsp-video-wrapper1').show()
            $('nav.zxwj-list-page:nth-of-type(2)').show().siblings('nav.zxwj-list-page').hide()
        }else{
            $(this).children('img').attr('src','img/kyqcsc_1.png')
            $(this).siblings().children('img').attr('src','img/rjhjpic.png')
            $('.ynsp-video-wrapper1').hide().siblings('.ynsp-video-wrapper').show()
            $('nav.zxwj-list-page:nth-of-type(1)').show().siblings('nav.zxwj-list-page').hide()
        }
    }
})
// 云农视频分页
$('.ynsp-video-wrapper').paginathing({
    perPage: 3,
    insertAfter: '.ynsp-video-wrapper',
    pageNumbers:false,
    containerClass: 'zxwj-list-page',
    prevNext:true,
    firstLast:true,
    prevText: " < 上一页",
    nextText: "下一页 > ",
    firstText:'首页',
    lastText:'尾页',
    limitPagination:5,
})
$('.ynsp-video-wrapper1').paginathing({
    perPage: 3,
    insertAfter: '.ynsp-video-wrapper1',
    pageNumbers:false,
    containerClass: 'zxwj-list-page',
    prevNext:true,
    firstLast:true,
    prevText: " < 上一页",
    nextText: "下一页 > ",
    firstText:'首页',
    lastText:'尾页',
    limitPagination:5,
})