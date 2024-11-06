document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  // gsap.utils.toArray('.txt-panel').forEach((panel, i) => {
  //   ScrollTrigger.create({
  //     trigger : panel,
  //     start : 'top top',
  //     pin : true,
  //     pinSpacing : false,
  //     end : 'bottom top',

  //   });
  let fadeInOut = gsap.timeline();
  // let fadeInOutImg = gsap.timeline();

  fadeInOut
  .from('header .header-title1 .header-tit-img1', {
    opacity: 0,
    duration: 8,
  },)
    .from('header .header-title1 > h3', {
      opacity: 0,
      duration: 8,
    }, ">3")
    .to('header .header-title1', {
      autoAlpha: 0,
      x: 500,
      duration: 2
    }, ">2")
    .from('header .header-title2 .header-tit-img2', {
      opacity: 0,
      duration: 8,
    },)
      .from('header .header-title2 > h3', {
        opacity: 0,
        duration: 8,
      }, ">3")
    .to('.header-title2', {
      autoAlpha:0,
      duration: 2,
    }, ">2")
    .from('header .header-title3 .header-tit-img22', {
      opacity: 0,
      duration: 8,
    },)
      .from('header .header-title3 > h3', {
        opacity: 0,
        duration: 8,
      }, ">3")
    .to('.header-title3', {
      autoAlpha : 0,
      duration: 2,
    }, ">2")
    .from('header .header-title4 .header-tit-img1', {
      opacity: 0,
      duration: 8,
    },)
      .from('header .header-title4 > h3', {
        opacity: 0,
        duration: 8,
      }, ">3")
    .to('.header-title4', {
      autoAlpha : 0,
      duration: 2,
    }, ">2")
    .to('.header-title5', {
      opacity: 1,
      duration: 15,
    }, ">-1")
    .to('.header-title5', {
      x : 500,
      autoAlpha: 0,
      duration :5,
    },)
    .to('.header-title6', {
      opacity: 1,
      duration: 5,
    })
    .to('.header-title6', {
      autoAlpha: 0,
      duration:5,
    })
    .to('.header-title7', {
      opacity: 1,
      duration: 14,
    })
    .to('.header-title7', {
      autoAlpha: 0,
      duration : 7,
    }, ">3")
    .to('.header-title8', {
      opacity: 1,
      duration: 14,
    })
    .to('.header-title8', {
      autoAlpha: 0,
      duration:7,
    }, ">3")
    .from('.header-title9 .header-tit-img3',{
      opacity: 0,
      duration :7,
    })
    .from('.header-title9 .header-tit-img4',{
      opacity: 0,
      duration :7,
    }, ">-7")
    .from('.header-title9 h3', {
      opacity: 0,
      duration: 7,
    }, ">3")
    .to('.header-title9', {
      x :500,
      autoAlpha: 0,
      duration:7,
    }, )
    .to('.header-title10', {
      opacity: 1,
      duration: 14,
    })
    .to('.header-title10', {
      autoAlpha: 0,
      y: -500,
      duration: 7,
    }, ">-3")
    .to('.header-title11', {
      opacity: 1,
      duration: 14,
    })
    .to('.header-title11', {
      autoAlpha: 0,
      duration:7,
    }, ">-3")
    .to('.header-title12', {
      opacity: 1,
      duration: 14,
    })
    .to('.header-title12', {
      autoAlpha: 0,
      duration: 10,
      y:500,
    })
    .from('.header-title13 h3', {
      opacity: 0,
      duration: 14,
    })
    .from('.header-title13 .header-tit-img5', {
      opacity:0,
      duration:14
    }, "<-20")
    .from('.header-title13 .header-tit-img6', {
      opacity:0,
      duration:16
    }, ">-2")
    .from('.header-title13 .header-tit-img7', {
      opacity:0,
      duration:16
    }, ">-2")


  // fadeInOutImg.from('.header-tit-img1', {
  //   opacity: 0,
  //   duration: 3
  // }).
  //   to('.header-tit-img1', {
  //     opacity: 1,
  //     duration: 3,
  //   })
  //   .from('.header-tit-img2', {
  //     y: 1000,
  //     opacity: 1,
  //     duration: 5,
  //   }, "<3")
  //   .from('.header-tit-img3', {
  //     y: 1000,
  //     duration: 5,
  //   })
  //   .to('.header-tit-img3', {
  //     autoAlpha: 1,
  //   })
  //   .from('.header-tit-img4', {
  //     x: 1500,
  //     duration : 5,
  //   }).from('.header-tit-img5', {
  //     x: 1500,
  //     opacity: 0,
  //     duration: 2,
  //   })
  //   .to('.header-tit-img5', {
  //     opacity: 1,
  //     duration: 5,
  //   })
  //   .to('.header-tit-img6', {
  //     opacity: 1,
  //     duration: 2,
  //   }).to('.header-tit-img6', {
  //     opacity: 1,
  //     duration : 15,
  //   })
  //   .to('.header-tit-img7', {
  //     opacity: 1,
  //     duration: 7,
  //   }, ">-11")    
  //   .to('.header-tit-img7', {
  //     autoAlpha:0,
  //     duration: 5,
  //   },)
  //   .from('.header-tit-img8', {
  //     y : 1000,
  //     duration : 5,
  //   })
  //   .to('.header-tit-img8', {
  //     autoAlpha : 0,
  //     duration : 3,
  //   })
  //   .from('.header-tit-img9', {
  //     y : 1500,
  //     duration : 3,})
  //     .to('.header-tit-img9', {
  //     opacity: 1,
  //     duration: 5,
  //   })
  //   .from('.header-tit-img10', {
  //     y: 1500, 
  //     duration : 3,
  //     ease: "elastic.out(1,0.3)",
  //   }).to('.header-tit-img10', { 
  //     y : -1500,
  //     autoAlpha: 0,
  //     duration: 2,
  //   }).from('.header-tit-img11',{
  //     scale: 0,
  //     borderRadius: 200,
  //     duration : 10,
  //   })
  //   .to('.header-tit-img11', {
  //     scale: 1,
  //     borderRadius: 0,
  //     opacity: 1,
  //     duration: -1,
  //   }).to('.header-tit-img12', {
  //     opacity: 1,
  //     duration: 2,
  //   }).to('.header-tit-img12', {
  //     autoAlpha: 0,
  //   })
  //   .to('.header-tit-img13', {
  //     opacity: 1,
  //     duration: 2,
  //   }).to('.header-tit-img13', {
  //     autoAlpha: 0,
  //   })
  //   .to('.header-tit-img14', {
  //     opacity: 1,
  //     duration: 2,
  //   }).to('.header-tit-img14', {
  //     autoAlpha: 0,
  //   })
  //   .to('.header-tit-img15', {
  //     opacity: 1,
  //     duration: 2,
  //   }).to('.header-tit-img15', {
  //     autoAlpha: 0,
  //   })
  //   .to('.header-tit-img16', {
  //     opacity: 1,
  //     duration: 2,
  //   }).to('.header-tit-img16', {
  //     autoAlpha: 0,
  //   })

  if (window.innerWidth >= 554){
  ScrollTrigger.create({
    animation: fadeInOut,
    trigger: 'header .header-panel',
    start: '0% top',
    end: '+=6000',
    pin: true,
    scrub: true,
    // markers: true,
    toggleActions: "play none resume none",
    id: "title1"
  })
  // ScrollTrigger.create({
  //   animation: fadeInOutImg,
  //   trigger: 'header .header-img-panel',
  //   start: '15% top',
  //   end: '+=6000',
  //   pin: true,
  //   scrub: true,
  //   // markers: true,
  //   pinSpacing: true,
  //   toggleActions: "play none resume none",
  //   id: "title-img"
  // })
}
else {
  ScrollTrigger.create({
    animation: fadeInOut,
    trigger: 'header .header-panel',
    start: '0% top',
    end: '0',
    pin: false,
    scrub: false,
    // markers: true,
    toggleActions: "play none resume none",
    id: "title1"
  
})
}



ScrollTrigger.create({
    trigger: 'section .about-me',
    start: '0% top',
    end: '0',
    pin: true,
    scrub: true,
    // markers: true,
    pinSpacing: true,
    toggleActions: "play none resume none",
    id: "title-img"
})

  // gsap.to('.header-title1', {
  //   scrollTrigger : {
  //     trigger : '.header_title1',
  //     pin:true,
  //     start : 'top top',
  //     scrub : 1,
  //   }
  // const $header_tit1 = $('.header_tit1');
  // const $header_tit2 = $('.header_tit2');
  // const $header_tit3 = $('.header_tit3');
  // const $header_tit4 = $('.header_tit4');
  // const $header_tit5 = $('.header_tit5');

});
