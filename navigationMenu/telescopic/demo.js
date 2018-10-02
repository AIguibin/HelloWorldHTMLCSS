window.onload = function () {
    let aA = document.getElementsByTagName('a');
    for (let i = 0; i < aA.length; i++) {
        aA[i].onmouseover = function () {
            clearInterval(this.time);
            let This = this;
            This.time = setInterval(function () {
                This.style.width = This.offsetWidth + 8 + "px";
                if (This.offsetWidth >= 160) {
                    clearInterval(This.time)
                }
            }, 30)
        };
        aA[i].onmouseout = function () {
            clearInterval(this.time);
            let This = this;
            This.time = setInterval(function () {
                This.style.width = This.offsetWidth - 8 + "px";
                if (This.offsetWidth <= 120) {
                    clearInterval(This.time)
                }
            }, 30)
        }
    }
};
$(function () {
    $('a').hover(
        function () {
            $(this).stop().animate({"width":"160px"},100)
        },
        function () {
            $(this).stop().animate({"width":"120px"},100)
        },
    )
})