
$(document).ready( ()=> {
    //오른쪽방향 자동이동
    const toRight = () => {
        $('#partner_slide_1').css('transition' , '0.2s');
        $('#partner_slide_1').css('left' , '+=10px');          
        $('#partner_slide_1').position().left >= -250 ? call_2() : null;         
    }
    const call_2 = ()=> {
        $('#partner_slide_1').css('transition' , 'none');
        $('#partner_slide_1').css('left' , '-500px');
        $('#partner_slide_1').prepend( $('#partner_slide_1').children().last() );
    }
    setInterval( toRight , 10);

    //왼쪽방향 자동이동
    const toLeft = () => {
        $('#partner_slide_2').css('transition' , '0.2s');
        $('#partner_slide_2').css('left' , '-=10px');    
        $('#partner_slide_2').position().left <= -500 ? call_3() : null;         
    }
    const call_3 = ()=> {
        $('#partner_slide_2').css('transition' , 'none');
        $('#partner_slide_2').css('left' , '-250px');
        $('#partner_slide_2').append( $('#partner_slide_2').children().first() );
    }
    setInterval( toLeft , 10);


});// js end....................