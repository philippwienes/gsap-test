

let rows = document.querySelectorAll("h1 div");

rows.forEach(function (row,i) {

  let rowTL = gsap.timeline({
    scrollTrigger: {
      trigger: row,
      scrub: .9,
      markers:true,
      pinSpacing: false,
      pin: true,
      start: 'top top',
      end: "+=100%",
    }
  })
  .fromTo(row, {rotateX:'45deg'}, {rotateX:'0'})

});
