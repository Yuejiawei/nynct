// 记录首页下划线导航栏的index，默认为0,办事服务为2
topIndex = 2
getCurrentIndex()

// 办事服务鼠标悬浮操作
$('.bsfw .bsfw_item').hover(function (){
    if(isPhone()){
        return true;
    }else {
        var index = $(this).index()
        switch (index) {
            case 0: $(this).find('img').attr('src',"img/ztbs_1.png");break;
            case 1: $(this).find('img').attr('src',"img/bmbs_1.png");break;
            case 3: $(this).find('img').attr('src',"img/grbs_1.png");break;
            case 4: $(this).find('img').attr('src',"img/frbs_1.png");break;
            default: return true;
        }
    }

},function (){
    if(isPhone()){
        return true;
    }else{
        var index = $(this).index()
        switch (index) {
            case 0: $(this).find('img').attr('src',"img/ztbs.png");break;
            case 1: $(this).find('img').attr('src',"img/bmbs.png");break;
            case 3: $(this).find('img').attr('src',"img/grbs.png");break;
            case 4: $(this).find('img').attr('src',"img/frbs.png");break;
            default: return true;
        }
    }

})