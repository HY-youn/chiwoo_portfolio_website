document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.defaults({
    toggleActions: "play reverse none none",
  })
  // gsap.utils.toArray('.txt-panel').forEach((panel, i) => {
  //   ScrollTrigger.create({
  //     trigger : panel,
  //     start : 'top top',
  //     pin : true,
  //     pinSpacing : false,
  //     end : 'bottom top',

  //   });
  let animation1 = gsap.timeline();
  let animationForlag = gsap.timeline();
  let animation2 = gsap.timeline();
// 첫 번째 타임라인 - cw-swiper-container 스크롤 후 section-tit1 등장
animation1
  .from('section.section-tit1', {
    y: 400,
    opacity: 0,
    duration: 1.5,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.cw-swiper-container', 
      start: 'bottom center',
      end: '+=300',
      scrub: 1,
      id : 'section-1',
    }
  }).to('.section-tit1  ', {
    opacity: 0,
    duration: 1,
    delay: 1,
    ease: 'power2.out'
  })

// 두 번째 타임라인 - section-tit1 고정 후 section-tit2 등장
ScrollTrigger.create({
  trigger: 'section.section-tit1',
  start: 'top top',
  end: '+=100% top',
  pin: true,
  pinSpacing: false,
  id: 'section-1-pin',
})

animationForlag.from('.tit2-list > li:first-child', {
  y: 400,
  opacity: 0,
  duration: 1.5,
  ease: 'power2.out',
}).from('.tit2-list > li:nth-child(2)', {
  y: 400,
  opacity: 0,
  duration: 1.5,
  ease: 'power2.out',
}, '>-1.3')
.from('.tit2-list > li:nth-child(3)', {
  y: 400,
  opacity: 0,
  duration: 1.5,
  ease: 'power2.out',
}, '>-1.3')
.from('.tit2-list > li:nth-child(4)', {
  y: 400,
  opacity: 0,
  duration: 1.5,
  ease: 'power2.out',
}, '>-1.3')

ScrollTrigger.create({
  animation : animationForlag,
  trigger:'section.section-tit2',
  start: 'top+=100px center',
  end: 'bottom center',
  id: 'section-2',
  scrub:1,
})


animation2.from('.section-tit4',{
  y: 400,
  opacity: 0,
  duration: 1.5,
  ease: 'power2.out',
}, '>-1.3')

ScrollTrigger.create({
  animation: animation2,
  trigger: 'section.section-tit3',
  start: 'top center',
  end: 'bottom center', 
  scrub: 1,
  id: 'section-3'
});

const pinSec3Sec4 = gsap.timeline();

pinSec3Sec4.from('.section-tit5', {
  y: 400,
  opacity: 0,
  duration: 1.5,
  ease: 'power2.out'
});
pinSec3Sec4.to('.section-tit3, .section-tit4', {
  opacity: 0,
  duration: 0.5,
  delay: 0.5,
  ease: 'power2.out'
});

ScrollTrigger.create({
  animation: pinSec3Sec4,
  trigger: '.pin-sec3-sec4',
  start: 'top top',
  end: '+=80% top',
  pin: true,
  pinSpacing: false,
  scrub: 1,
  id: 'pin-section'
});

const pinSec5Sec6 = gsap.timeline();

pinSec5Sec6.from('section.section-tit6', {
  y: 400,
  opacity: 0, 
  duration: 1.5,
  ease: 'power2.out'
});

pinSec5Sec6.to('section.section-tit5', {
  opacity: 0,
  duration: 0.5,
  delay: 0.5,
  ease: 'power2.out'
});

ScrollTrigger.create({
  animation: pinSec5Sec6,
  trigger: 'section.section-tit5',
  start: 'top top',
  end: '+=80% top',
  pin: true,
  pinSpacing: false,
  scrub: 1,
  id: 'pin-section-5-6'
});

// gsap.from('section.section-tit1', {
//   y: 1000,
//   opacity: 0,
//   duration: 2,
//   ease: 'power2.inOut',
//   scrollTrigger: {
//     trigger: 'section.section-tit1',
//     start: 'top-=1000px top',
//     end: 'top-=1000px -20%',
//     scrub:1,
//     pin: true,
//     pinSpacing: false,
//   }
// })

// ScrollTrigger.create({
//   animation : animation1,
//   trigger: 'section.section-tit2',
//   start: 'top top',
//   end: 'bottom top',
//   pin: true,
//   pinSpacing: false,
// })  


});