// textarea 自适应高度，可随文字数量的增加高度自动加高
$.fn.extend({
    autoHeight: function() {
        return this.each(function() {
            var $this = jQuery(this);
            if(!$this.attr('_initAdjustHeight')) {
                $this.attr('_initAdjustHeight', $this.outerHeight());
            }
            _adjustH(this).on('input', function() {
                _adjustH(this);
            });
        });
        // 重置高度
        function _adjustH(elem) {
            var $obj = jQuery(elem);
            return $obj.css({
                height: $obj.attr('_initAdjustHeight'),
                'overflow-y': 'hidden'
            }).height(elem.scrollHeight);
        }
    }
});

// 使用自动适应高度
$('textarea').autoHeight();

var uploadDir = 'file'
// 文件上传
layui.use(['upload','layer'], function(){
    var upload = layui.upload;
    var layer = layui.layer;
    //执行实例
    var uploadInst = upload.render({
        elem: '#choicefile' //绑定元素
        ,url: uploadDir //上传接口
        ,accept: 'file' //
        ,multiple: true
        ,before: function(obj){
            layer.load(); //上传loading
        }
        ,done: function(res){
            //上传完毕回调
            layer.closeAll('loading'); //关闭loading
            // console.log(res+'1')
            //layer.msg('1111');
        }
        ,error: function(res){
            layer.closeAll('loading'); //关闭loading
            // console.log(res)
            //layer.msg('上传失败，请联系管理员')
        }
    });
});

// 验证码生成
var captcha = new GVerify({
    id: 'captcha_container',
    width: 100,
    height: 48
});
// 刷新验证码
$('.refresh').click(function () {
    captcha.refresh();
})
// 关闭移动端的row属性
if(isPhone()) {
    $('.wyxx-content-input').attr('row',0)
}
