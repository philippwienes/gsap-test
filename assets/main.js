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
})

/*
.fromTo(rows[0], {opacity:0}, {opacity:1})
.to(rows[0], {opacity:0})
.fromTo(rows[2], {opacity:0}, {opacity:1})
.to(rows[2], {opacity:0})
.fromTo(rows[3], {opacity:0}, {opacity:1}, '-=400%')
.to(rows[3], {opacity:0}, '-=300%')

gsap.set(rows, {
  position: 'fixed',
  opacity: 0,
});
*/


rows.forEach(function (row,i) {

  var myStartTime = row.dataset.startpercent/100 * totalDuration;
  const myDur = (row.dataset.endpercent - row.dataset.startpercent)/100 * totalDuration;
  var myOverlap = row.dataset.overlap;
  var myEndTime;

  if(myOverlap){
    myStartTime = '-=' +  rows[i-1].dataset.startpercent/100 * totalDuration / 2 + '%';
    myEndTime = '-=' +  ((rows[i-1].dataset.startpercent/100 * totalDuration / 2) - 100) + '%';
    console.log(myStartTime);
    console.log(myEndTime);
  }

  console.log(myStartTime);
  console.log(myDur);

  gsap.set(row, {
    position: 'fixed',
    opacity: 0,
  });

  tl.fromTo(row, {autoAlpha: 0}, {autoAlpha:1, duration: myDur / 2}, myStartTime)
  tl.to(row, {opacity:0, duration: myDur / 2}, myEndTime)

});
