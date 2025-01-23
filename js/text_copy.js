document.addEventListener("scroll", () => {
    let scrollY = window.scrollY;
    let p1 = document.getElementById("p1");
    let p2 = document.getElementById("p2");
    let p3 = document.getElementById("p3");
  
    let calWidth = (scroll, start, end) => {
      if (scroll < start) return 0;
      if (scroll > end) return 100;
      return ((scroll - start) / (end - start)) * 100;
    };
  
    p1.style.width = `${calWidth(scrollY, 482, 595)}%`;
  
    p2.style.width = `${calWidth(scrollY, 596, 709)}%`;
  
    p3.style.width = `${calWidth(scrollY, 710, 832)}%`;
  });
  
  console.log(window.scrollY); 
  