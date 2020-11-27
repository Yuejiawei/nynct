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

var fileStr = "";
// 文件上传
layui.use(['upload','layer'], function(){
    var upload = layui.upload;
    var layer = layui.layer;
    //执行实例
    var uploadInst = upload.render({
        elem: '#choicefile' //绑定元素
        ,url: 'uploadFiles.php' //上传接口
        ,accept: 'file' //
        ,multiple: true
        // ,before: function(obj){
        //     layer.load(1); //上传loading
        // }
        // 在文件被选择后触发，该回调会在 before 回调之前
        ,choose:function (obj){
            layer.load(1); //上传loading
            var files = obj.pushFile();
            //预读本地文件，如果是多文件，则会遍历。(不支持ie8/9)
            obj.preview(function(index, file){
                fileStr += file.name+" ";
           })
        }
        // 屏蔽掉done，选择allDone
        ,done: function(res){
            //上传完毕回调
            layer.closeAll('loading'); //关闭loading
            $('#filename').val(fileStr)
        }
        // 因为可能产生多文件，所以选择全部上传完在进行回调
        ,allDone: function(res){ //当文件全部被提交后，才触发
            layer.closeAll('loading');
            // 全部上传完毕一起回调
            if(res.aborted === 0){
                layer.msg(res.successful+'个文件上传成功', {
                    time: '2500'
                })
            }else{
                layer.msg('您有'+res.aborted+'上传失败', {
                    time: '2500'
                })
            }
        }
        ,error: function(){
            //关闭loading
            layer.closeAll('loading');
            layer.msg('上传失败，请联系管理员')
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
// 校验验证码
// captcha.validate(code);
// 关闭移动端的row属性
if(isPhone()) {
    $('.wyxx-content-input').attr('row',0)
}
