// 切换字体大小
$('.fsw span').click(function(){
    var _el = $('.format p');
    var _ft = parseFloat(_el.css('font-size'));
    var cName = $(this).attr("class");
    if(cName === "b"){
        if( _ft<= 22 ){
            _ft += 2;
        }
    }else if(cName === "s"){
        if(_ft >= 14) {
            _ft -= 2;
        }
    }else if(cName === 'm'){
        _ft = 16;
    }
    _el.css("font-size", _ft );
    // console.log(_ft );
})
// 打印本页面
function preview(oper){
    if (oper < 10){
        bdhtml=window.document.body.innerHTML;//获取当前页的html代码
        sprnstr="<!--startprint"+oper+"-->";//设置打印开始区域
        eprnstr="<!--endprint"+oper+"-->";//设置打印结束区域
        prnhtml=bdhtml.substring(bdhtml.indexOf(sprnstr)+18); //从开始代码向后取html
        prnhtml=prnhtml.substring(0,prnhtml.indexOf(eprnstr));//从结束代码向前取html
        window.document.body.innerHTML=prnhtml;
        window.print();
        window.document.body.innerHTML=bdhtml;
    } else {
        window.print();
    }
}