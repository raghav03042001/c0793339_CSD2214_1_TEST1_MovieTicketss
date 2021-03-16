var $ = function (id) { return document.getElementById(id); };

var change = function() {
    var h2 = this;
    h2.style.background="red";
    innerHTML="kiddaaaa";
};

window.onload = function () {
    var listNode = $("line");
    var boxex = listNode.getElementsByTagName("a");

    var i, boxcolor, image;
    for (i = 0; i< boxes.length; i++) {

        boxes[i].onclick = change;
    };
}