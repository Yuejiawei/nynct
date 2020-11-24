// 登录
function submitlogin(){
    var result = $("#login").val(); //获取检索词
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