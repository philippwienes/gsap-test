

let rows = document.querySelectorAll("h1 div");

rows.forEach(function (row,i) {

  let rowTL = gsap.timeline({
    scrollTrigger: {
      trigger: row,
      scrub: .9,
      markers:true,
      start: 'top top',
      end: "+=100%",
    }
  })
  .fromTo(row, {fontSize:'3200%',opacity:0, y: 0}, {fontSize:'1200%', opacity:1, y:0})
  .to(row, {fontSize:'60%', xPercent: - 40 + i*10}, '+=1')
});

rows.forEach(function (row,i) {

  let rowTL = gsap.timeline({
    scrollTrigger: {
      trigger: row,
      pinSpacing: false,
      pin: true,
      start: 'top top',
      end: "+=" + rows.length * 100 + "%"
    }
  })
});

