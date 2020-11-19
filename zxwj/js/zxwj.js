// 注意，他妈的分页pagination.js会和zscroll.js中的pagination发生冲突，第二次出这个问题了，啊啊啊
$('.zxwj-list-wrapper').paginathing({
    perPage: 3,
    insertAfter: '.zxwj-list-wrapper',
    pageNumbers:false,
    containerClass: 'zxwj-list-page',
    prevNext:true,
    firstLast:true,
    prevText: " < 上一页",
    nextText: "下一页 > ",
    firstText:'首页',
    lastText:'尾页',
    limitPagination:5,
})