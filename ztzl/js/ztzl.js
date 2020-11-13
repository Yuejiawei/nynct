// 分页
$('.ztzl-item-wrapper').paginathing({
    perPage: 1,
    insertAfter: '.ztzl-item-wrapper',
    pageNumbers:true,
    containerClass: 'ztzl_page',
    prevNext:true,
    firstLast:true,
    prevText: " < 上一页",
    nextText: "下一页 > ",
    firstText:'首页',
    lastText:'尾页',
    limitPagination:false,
});