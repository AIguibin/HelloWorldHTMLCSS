$(document).ready(function () {
    let menuSub=$('#menu-sub');
    let menuFather=$('#menu-father');
    let activeRow;
    let activeMenu;

    let timer;
    let mouseInSub = false;

    let mouseTrack = [];
    let moveHanlder = function(e){
        mouseTrack.push({
            x:e.pageX,
            y:e.pageY
        });
        if (mouseTrack.length>3){
            mouseTrack.shift()
        }
    };


    menuSub.on('mouseenter',function (e) {
        mouseInSub = true;
    }).on('mouseleave',function (e) {
        mouseInSub = false;
    });

    menuFather.on('mouseenter',function (e) {
        menuSub.removeClass('none')
    }).on('mouseleave',function (e) {
        menuSub.addClass('none');
        if (activeRow){
            activeRow.removeClass('active');
            activeRow = null;
        }
        if (activeMenu){
            activeMenu.removeClass('none');
            activeMenu = null;
        }

        $(document).unbind('mousemove',moveHanlder)

    }).on('mouseenter','li',function (e) {
        if (!activeRow){
            activeRow=$(e.target).addClass('active');
            activeMenu =$('#'+activeRow.data('id'));
            activeMenu.removeClass('none');
            return
        }

        if (timer){
            clearTimeout(timer)
        }

        let currMousePos = mouseTrack[mouseTrack.length - 1];
        let leftCorner = mouseTrack[mouseTrack.length - 2];

        let delay = needDelay(menuSub,leftCorner,currMousePos);

        if (delay) {
            timer = setTimeout(function () {
                if (mouseInSub){
                    return;
                }
                activeRow.removeClass('active');
                activeMenu.addClass('none');
                activeRow = $(e.target);
                activeRow.addClass('active');
                activeMenu = $('#' + activeRow.data('id'));
                activeMenu.removeClass('none');
            },300);
        } else {
            let prevActiveRow = activeRow;
            let preActiveMenu = activeMenu;

            activeRow = $(e.target);
            activeMenu = $('#' + activeRow.data('id'));

            prevActiveRow.removeClass('active');
            preActiveMenu.addClass('none');

            activeRow.removeClass('active');
            activeMenu.addClass('none');
        }
    })
});