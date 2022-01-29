/*let rows = document.querySelectorAll("h1 div");

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
})*/

let rows = document.querySelectorAll("h1 div");



/*var totalDuration = 5000;
var singleDuration = totalDuration / headlines.length;
   
*/     


rows.forEach(function (row,i) {

  let rowTL = gsap.timeline({
    scrollTrigger: {
      trigger: row,
      scrub: .9,
      markers:true,
      start: '-=1',
      end: "+=100%",
    }
  })
  .fromTo(row, {fontSize:'3200%',opacity:0, y: 0}, {fontSize:'1200%', opacity:1, y:0})
  //.fromTo(row, {fontSize:'1200%'}, {fontSize:'60%', xPercent: - 40 + i*10}, '+=1')
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

