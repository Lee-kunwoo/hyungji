$(document).ready( ()=> {
    //왼쪽방향 화살표 클릭
    const no = $('#contentsSlide').find('.active').index();
    let active = true;
    $("#btn button").eq(0).click( ()=>{
        if( active ){
            active= false;
            $('#contentsSlide').css('transition', 'left 1s');
            $('#contentsSlide').css('left', 0);
            $('#contentsSlide section').eq(no - 1).addClass('active').siblings().removeClass('active');
            setTimeout(callback_1, 1000);
        }
    });
    const callback_1 = () => {
        $('#contentsSlide').css('transition', 'none');
        $('#contentsSlide').css('left', '-1300px');
        $('#contentsSlide').prepend($('#contentsSlide').children().last());
        active = true;
    }

    //오른쪽방향 화살표 클릭
    $("#btn button").eq(1).click(() => {
        if (active) {
            active = false;
            $('#contentsSlide').css('transition', 'left 1s');
            $('#contentsSlide').css('left', '-2600px');
            $('#contentsSlide section').eq(no + 1).addClass('active').siblings().removeClass('active');
            setTimeout(callback_2, 1000);
        }
    });
    const callback_2 = () => {
        $('#contentsSlide').css('transition', 'none');
        $('#contentsSlide').css('left', '-1300px');
        $('#contentsSlide').append($('#contentsSlide').children().first());
        active = true;
    }    

});//............js end