let rows = document.querySelectorAll("h1 div");

rows.forEach(function (row,i) {

let child = row.querySelector("span");

/*
var totalDuration = 5000;
var singleDuration = totalDuration / headlines.length;
        
start: "top -=" + ( singleDuration * i ),
end: "+=" + singleDuration,
*/

  let rowTL = gsap.timeline({
    scrollTrigger: {
      trigger: row,
      scrub: .9,
      markers:true,
      pinSpacing: false,
      pin: true,
      start: 'top top',
      end: "+=200%",
    }
  })
  .fromTo(child, {y:550}, {y:0})
  .fromTo(child, {rotateX:'85deg'}, {rotateX:'0'}, '<80%')
  .to(child, {opacity:0})
});
