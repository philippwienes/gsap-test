let rows = document.querySelectorAll("h1 div");

totalDuration = 4800;
var singleDuration = totalDuration / rows.length;;
gsap.timeline({
  scrollTrigger: {
    trigger: "h1",
    pinSpacing: true,
    pin:true,
    start: "top top",
    end:'+=' + totalDuration,
  }
})




rows.forEach(function (row,i) {

  gsap.set(row, {
    opacity: 0
  });
  let rowTL = gsap.timeline({
    scrollTrigger: {
      trigger: row,
      scrub: .9,
      start:  "top -=" + ( singleDuration * i ),
      end: "+=" + singleDuration,
    }
  })
  .fromTo(row,{scale:23},{
    opacity:1,
    scale:1
  })
});

/*var totalDuration = 5000;
var singleDuration = totalDuration / headlines.length;
        
start: "top -=" + ( singleDuration * i ),
end: "+=" + singleDuration,

*/