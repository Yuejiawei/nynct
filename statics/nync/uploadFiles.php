<?php

//解决跨域
header("Access-Control-Allow-Origin: *");
// 响应类型
header('Access-Control-Allow-Methods:post');
//获取当前时间
date_default_timezone_set('PRC');

$dir = getUploadDir();
$file = $_FILES['file'];
$file_info = $file['name'];
$file_dir = $dir.$file_info;
$file_error = $file['error'];
$file_tmp_name = $file['tmp_name'];
// 初始化返回数组
$returnArr = array(
    'code' => 0,
    'msg' => '',
    'data' => array(
        'src' => $file_info
    )
);

// 上传文件目录获取，返回
function getUploadDir(){
    $month = date('Ym', time());
    define('BASE_PATH', str_replace('\\', '/', realpath(dirname(__FILE__).'/'))."/");
    $dir = BASE_PATH."file/".$month."/";
    return $dir;
}

// 校验上传文件
function getUploadFiles() {
  dirIsExist();
  if(!file_exists($GLOBALS['file_dir'])) {
    if($GLOBALS['file_error'] == 0) {
      if(move_uploaded_file($GLOBALS['file_tmp_name'],$GLOBALS['file_dir'])) {
        $GLOBALS['returnArr']['msg'] = '上传成功';
      } else {
        $GLOBALS['returnArr']['msg'] = '上传失败';
      }
    }else {
      switch ($GLOBALS['file_error']) {
        case 1:
          $arr['msg'] ='上传文件超过了PHP配置文件中upload_max_filesize选项的值';
          break;
        case 2:
          $arr['msg'] ='超过了表单max_file_size限制的大小';
          break;
        case 3:
          $arr['msg'] ='文件部分被上传';
          break;
        case 4:
          $arr['msg'] ='没有选择上传文件';
          break;
        case 6:
          $arr['msg'] ='没有找到临时文件';
          break;
        case 7:
        case 8:
          $arr['msg'] = '系统错误';
          break;
      }
    }
  }else{
    $GLOBALS['returnArr']['code'] = 1;
    $GLOBALS['returnArr']['msg'] = "当前目录中，文件".$GLOBALS['file_info']."已存在";
  }
}

// 判断目录是否存在
function dirIsExist () {
  if(!is_dir($GLOBALS['dir'])) {
    mkdir($GLOBALS['dir'], 0777, true);
  }
}

getUploadFiles();
echo json_encode($returnArr);