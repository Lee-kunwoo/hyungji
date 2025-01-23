document.addEventListener('DOMContentLoaded', () => {
    const our_brand = document.getElementById('our_brand');
    let y1 = window.scrollY;

    // wheel 이벤트 처리
    window.addEventListener('wheel', () => {
        const y2 = window.scrollY;
        const y3 = y2 - y1;

        if (y3 > 0 && y2 > 200) {
            our_brand.querySelector('div').classList.add('active');
        } else if (y3 < 0) {
            console.log('위로 스크롤 중');
        }

        y1 = y2;
    });

    // scroll 이벤트 처리
    window.addEventListener('scroll', () => {
        const ourBrandTop = our_brand.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        if (ourBrandTop <= viewportHeight && ourBrandTop >= 0) {
            our_brand.querySelector('div').classList.add('active');
        } else {
            our_brand.querySelector('div').classList.remove('active');
        }
    });
});