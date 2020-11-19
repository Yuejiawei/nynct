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
        _ft -= 2;
    }else if(cName === 'm'){
        _ft = 16;
    }
    _el.css("font-size", _ft );
    // console.log(_ft );
})
function preview () {

}