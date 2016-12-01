window.addEventListener('load', function () {
    // bind after window loaded
    var CM = new CommentManager($('#my-comment-stage'));
    CM.init();
    // start the plops
    CM.start();
    // open cm object to whole
    window.CM = CM;
});
