var animation = new TimelineMax();
animation.to("svg", 7, {strokeDashoffset: 0, ease: Power1.easeInOut})
  .to("svg", 2, {fillOpacity: 1, ease: Power1.easeIn, delay: -3});
  
