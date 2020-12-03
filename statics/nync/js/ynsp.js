if(isPhone()){
    paginate('.ynsp-video-wrapper3','.ynsp-video-wrapper3');
}else {
    paginate('.ynsp-video-wrapper1','.ynsp-video-wrapper1');
}

// 云农视频顶部选项卡切换
$('.ynsp-guide span').click(function (){
    if($(this).hasClass('active')){
        return true
    }else{
        $(this).addClass('active').siblings().removeClass('active')
        var index = $(this).index()
        $('nav.zxwj-list-page').remove()
        if(index === 1) {
            $(this).children('img').attr('src','../../../../statics/nync/img/rjhjpic_1.png')
            $(this).siblings().children('img').attr('src','../../../../statics/nync/img/kyqcsc.png')
            if(isPhone()){
                $('.ynsp-video-wrapper3').hide().siblings('.ynsp-video-wrapper4').show()
                paginate('.ynsp-video-wrapper4','.ynsp-video-wrapper4')
            }else{
                $('.ynsp-video-wrapper1').hide().siblings('.ynsp-video-wrapper2').show()
                paginate('.ynsp-video-wrapper2','.ynsp-video-wrapper2')
            }

        }else {
            $(this).children('img').attr('src','../../../../statics/nync/img/kyqcsc_1.png')
            $(this).siblings().children('img').attr('src','../../../../statics/nync/img/rjhjpic.png')
            if(isPhone()){
                $('.ynsp-video-wrapper4').hide().siblings('.ynsp-video-wrapper3').show()
                paginate('.ynsp-video-wrapper3','.ynsp-video-wrapper3')
            }else{
                $('.ynsp-video-wrapper2').hide().siblings('.ynsp-video-wrapper1').show()
                paginate('.ynsp-video-wrapper1','.ynsp-video-wrapper1')
            }
        }
    }
})
