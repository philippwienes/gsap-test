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

rows.forEach(function (row,i) {

  const myStartTime = row.dataset.startpercent/100 * totalDuration;
  const myDur = (row.dataset.endpercent - row.dataset.startpercent)/100 * totalDuration;
  const imageControl = row.dataset.controlimage;
  let animationSteps = 2;

  if(imageControl){
    animationSteps = 4;
  }

  gsap.set(row, {
    position: 'fixed',
    opacity: 0,
  });

  tl.to(row, {opacity:1, duration: myDur / animationSteps}, myStartTime)
  if(imageControl == "zoomInAndOut"){
    tl.fromTo('img',{scale:1}, {scale:2, duration: myDur / animationSteps}, '<')
  }
  tl.to(row, {opacity:0, duration: myDur / animationSteps})
  if(imageControl == "zoomInAndOut"){
    tl.to('img', {scale:1, duration: myDur / animationSteps}) 
  }
});

