

kem8_ani_04_anim_03.Controller = () => {

  'use strict';
  const instance = {};

  let fire_0;
  let fire_1;

  let fireArray = [];


  const getDomReferences = () => {
    fireArray[0] = $('#fire-0');
    fireArray[1] = $('#fire-1');
  };


  const startAnimation = () => {
    setInitialStateForFire();
    fireAimation();

  };


  const setInitialStateForFire = () => {
    TweenMax.set(fireArray[0], {
      scale: 0,
      transformOrigin: '50% 100%'
    });
    TweenMax.set(fireArray[1], {
      scale: 0,
      transformOrigin: '50% 100%'
    });
  };
  
  const fireAimation = () => {
    TweenMax.set(fireArray[1], {
      scale: 1,
      skewX: 0,
      skewY: 0
    });
    TweenMax.set(fireArray[0], {
      scale: 1,
      skewX: 0,
      skewY: 0
    });

    TweenMax.to( fireArray[1], 0.1, {
      ease: Power0.easeNone,
      skewX: Math.floor(getRandomNumber(-9, 9)),
      skewY: Math.floor(getRandomNumber(-9, 9)),
      scaleY : getRandomNumber(0.5, 1.2),
    });

    TweenMax.to( fireArray[0], 0.15, {
      ease: Power0.easeNone,
      skewX: Math.floor(getRandomNumber(-10, 10)),
      skewY: Math.floor(getRandomNumber(-10, 10)),
      scaleY : getRandomNumber(0.65, 1.2),
      onComplete: fireAimation
    });
  };


  const getRandomNumber = (min, max) => {
    return kem8_ani_04_anim_03.getRandomInRange(min, max);
  };

  
  /* API */
  instance.init = () => {
    getDomReferences();
    startAnimation();
  };
  

  console.log('Controller works');
  return instance;
};