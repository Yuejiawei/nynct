// 注意，他妈的分页pagination.js会和zscroll.js中的pagination发生冲突
// 分页
$('.ztzl-item-wrapper').paginathing({
    perPage: 3,
    insertAfter: '.ztzl-item-wrapper',
    pageNumbers:false,
    containerClass: 'ztzl_page',
    prevNext:true,
    firstLast:true,
    prevText: " < 上一页",
    nextText: "下一页 > ",
    firstText:'首页',
    lastText:'尾页',
    limitPagination:5,
});