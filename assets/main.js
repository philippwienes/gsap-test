let rows = document.querySelectorAll("h1 div");
let main = document.querySelector("main");
let totalDuration = main.dataset.animationduration;
if(totalDuration <= main.offsetHeight) totalDuration = main.offsetHeight;

const tl = gsap.timeline({
  scrollTrigger: { 
    trigger: 'img',
    scrub: .9,
    markers: true,
    pinSpacing: false,
    pin: true,
    start: 'top top',
    end: "+=" + totalDuration + "%"
  }
});
const TLDur = tl.duration();
rows.forEach(function (row,i) {

  var myStartTime = row.dataset.startpercent/100 * totalDuration;
  const myDur = (row.dataset.endpercent - row.dataset.startpercent)/100 * totalDuration;
  var myOverlap = row.dataset.overlap;

  //myOverlap ? myStartTime = 'start-' + (i - 1)  : '';

  console.log(myStartTime);
  console.log(myDur);

  gsap.set(row, {
    position: 'fixed',
    opacity: 0,
  });
  tl.add("start-" + i)
  tl.fromTo(row, {autoAlpha: 0}, {autoAlpha:1, duration: myDur / 2}, myStartTime)
  tl.to(row, {opacity:0, duration: myDur / 2}, "start-" + i)

});

