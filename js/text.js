$(document).ready(() => {
  const area1 = $('.textLine').eq(0);
  const area2 = $('.textLine').eq(1);
  const text1 = '혁신과 열정으로 글로벌 패션의 미래를 선도합니다.';
  const text2 = '형지엘리트';
  let isTyping1 = false;
  let isTyping2 = false;

  const typeText = (area, text, callback) => {
    area.text('');
    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length) {
        area.text(area.text() + text[index]);
        index++;
      } else {
        clearInterval(interval);
        if (callback) callback();
      }
    }, 100);
  };

  $(window).on('scroll', () => {
    const scrollTop = $(window).scrollTop();
    const textOffsetTop = $('#textSection').offset().top;
    const windowHeight = $(window).height();

    if (
      scrollTop + windowHeight > textOffsetTop &&
      scrollTop < textOffsetTop + $('#textSection').outerHeight()
    ) {
      if (!isTyping1) {
        isTyping1 = true;
        typeText(area1, text1, () => (isTyping1 = false));
      }
      if (!isTyping2) {
        isTyping2 = true;
        typeText(area2, text2, () => (isTyping2 = false));
      }
    } else {
      // 초기화
      area1.text('');
      area2.text('');
      isTyping1 = false;
      isTyping2 = false;
    }
  });
});
