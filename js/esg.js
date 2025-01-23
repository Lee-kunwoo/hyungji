    const sections = [
        document.querySelector('#esg1st'),
        document.querySelector('#esg2nd'),
        document.querySelector('#esg3rd')
    ];
    const esgContainer = document.querySelector('#esg');
    let currentIndex = 0; // 현재 활성화된 섹션 인덱스

    // 초기 섹션 상태 설정
    sections.forEach(section => {
        section.style.top = '150'; // 모든 섹션을 초기 상태에서 화면 아래에 위치
    });

    // Intersection Observer로 #esg 감지
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // #esg 영역에 도달하면 첫 번째 섹션 활성화
                    sections[currentIndex].classList.add('active');
                    document.addEventListener('wheel', handleScroll);
                } else {
                    // #esg 영역을 벗어나면 모든 이벤트 초기화
                    sections.forEach(section => section.classList.remove('active'));
                    document.removeEventListener('wheel', handleScroll);
                }
            });
        },
        { threshold: 0.5 } // #esg 영역의 50%가 화면에 보이면 실행
    );

    observer.observe(esgContainer);

    // 스크롤 이벤트 처리
    function handleScroll(e) {
        if (e.deltaY > 0) {
            // 아래로 스크롤
            if (currentIndex < sections.length - 1) {
                sections[currentIndex].classList.remove('active');
                currentIndex++;
                sections[currentIndex].classList.add('active');
            }
        } else if (e.deltaY < 0) {
            // 위로 스크롤
            if (currentIndex > 0) {
                sections[currentIndex].classList.remove('active');
                currentIndex--;
                sections[currentIndex].classList.add('active');
            }
        }
    }