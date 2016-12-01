window.addEventListener('load', function () {
    // bind after window loaded
    var CM = new CommentManager($('#my-comment-stage'));
    CM.init();
    // start the plops
    CM.start();
    // open cm object to whole
    window.CM = CM;

    // socket send msg to show
    var socket = io();
    socket.on('plop show', function (msg) {
        console.log(msg);
        $('#messages').append($('<li>').text(msg));
        var plop = JSON.parse(msg);
        CM.send(polp);
    });
});
