$(document).ready(function(){
    
    let hide = true;
    let top_1 = $(window).scrollTop();
	const movieTop = Math.trunc( $('#movie').offset().top ) - 300; //2207	
    $(window).on('wheel' , e => {
        const top_2 = $(window).scrollTop();
        const top_3 = top_2 - top_1 ;
        //스크롤을 내릴때
        if( $(window).scrollTop()> 100 && top_3> 0 && hide) {
            $('#bgChange').removeClass('hide'); 
        }
        if(  $(window).scrollTop()> 300 && top_3> 0 && hide ) {
            $('#movie video').addClass('big');
            hide = false;
        }
        //스크롤을 올릴때
        else if ( $(window).scrollTop()<= movieTop && top_3 < 0 && hide=== false ) {
            $('#movie video').removeClass('big'); 
            $('#bgChange').addClass('hide');			
            hide= true;
        }
        top_1 = top_2;
    });




});//................. js end