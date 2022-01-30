let rows = document.querySelectorAll("h1 div");
let totalDuration = 300;
let longDuration = 600;

document.body.classList.add('has-js');

rows.forEach(function (row,i) {

let child = row.querySelector("span");

  i === 3 ? totalDuration = longDuration : totalDuration = 300;

  let rowTL = gsap.timeline({
    scrollTrigger: {
      trigger: row,
      scrub: .9,
      pinSpacing: false,
      pin: true,
      start: 'top top',
      end: "+=" + totalDuration + '%',
    }
  })
  .fromTo(child, {y:550}, {y:0})
  .fromTo(child, {rotateX:'85deg'}, {rotateX:'0'}, '<80%')
  .to(child, {opacity:0})
});

   
const imageTimeline = gsap.timeline()

imageTimeline.fromTo('img', { opacity: 1 }, { opacity: 0.5, duration: 1 })
.to('img', { scale: 2, opacity: 1, duration: 1 }, '+=5')
.to('img', { scale: 1, opacity: 0.5, duration: 1 }, '+=1')
.to('img', { opacity: 0, duration: 7 }, '+=2')


ScrollTrigger.create({
  trigger: 'img',
  scrub: .9,
  markers:true,
  pinSpacing: false,
  pin: true,
  start: 'top top',
  end: "+=" + ((totalDuration * rows.length) + longDuration) + "%",
  animation: imageTimeline
})

