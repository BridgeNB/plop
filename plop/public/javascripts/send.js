var socket = io();

$('#popupMenu_font a').click(function(e){
    $('#size').text($(e.target).text()).attr("plop-size", $(e.target).attr("plop-size"));
});

$('#popupMenu_mode a').click(function(e){
    $('#mode').text($(e.target).text()).attr("plop-mode",$(e.target).attr("plop-mode"));
});

$('#popupMenu_color a').click(function(e){
    $('#color').text($(e.target).text()).attr("plop-color",$(e.target).attr("plop-color"));
});

$('#btnSend').click(function(e){
    e.preventDefault();
    var plop = {
        "mode": Number($("#mode").attr("plop-mode")),
        "text": $('#msg').val(),
        "stime":0,
        "size": Number($("#size").attr("plop-size")),
        "color":parseInt($("#color").attr("plop-color"),16),
        "dur":10000
    };
    var msg=JSON.stringify(plop);
    console.log(msg);
    socket.emit('plop send',msg);
    $('#msg').val("");
});
