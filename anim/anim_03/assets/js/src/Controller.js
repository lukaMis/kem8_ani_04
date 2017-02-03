

kem8_ani_04_anim_03.Controller = () => {

  'use strict';
  const instance = {};

  let fire_0;
  let fire_1;

  let fireArray = [];

  let rightCircleArray = [];
  let leftCircleArray = [];

  let circlesArray = [];

  const circleMoleculesSpeedArray = [
    8, 
    8
  ];

  const SHOW_CIRCLE_DELAY = 3;


  const getDomReferences = () => {
    circlesArray[0] = $('#circle-0');
    circlesArray[1] = $('#circle-1');
    setInitialStateForCircles();

    fireArray[0] = $('#fire-0');
    fireArray[1] = $('#fire-1');
    setInitialStateForFire();

    for (let i = 0; i < 5; i++) {
      rightCircleArray[i] = { target: $('#circle-1-molecule-' + i) };
      TweenMax.set(rightCircleArray[i].target, {
        transformOrigin: '50% 50%'
      });
    }

    for (let i = 0; i < 6; i++) {
      leftCircleArray[i] = { target: $('#circle-0-molecule-' + i) };
      TweenMax.set(leftCircleArray[i].target, {
        transformOrigin: '50% 50%'
      });
    }
  };


  const startAnimation = () => {
    // fireAimation();
    setTimeout(fireAimation, SHOW_CIRCLE_DELAY * 1000 / 3);

    rightCircleAnimation();
    leftCircleAnimation();

    circlesAnimation();
  };

  const setInitialStateForCircles = () => {
    TweenMax.set(circlesArray[0], {
      transformOrigin: '100% 25%',
      scale: 0
    });
    TweenMax.set(circlesArray[1], {
      transformOrigin: '0% 7%',
      scale: 0
    });
  };


  const circlesAnimation = () => {
    TweenMax.to(circlesArray[0], 1, {
      scale: 1,
      delay: SHOW_CIRCLE_DELAY,
      onComplete: function() {
        TweenMax.to(circlesArray[1], 1, { scale: 1 });
      }
    });
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


  const rightCircleAnimation = () => {
    for (let i = 1; i < rightCircleArray.length; i++) {
      getPointInCircle(rightCircleArray[i]);
      TweenMax.to(rightCircleArray[i].target, circleMoleculesSpeedArray[0], {
        ease: Power0.easeNone,
        x: rightCircleArray[i].newX,
        y: rightCircleArray[i].newY,
        rotation: '+=360'
      });
    }

    getPointInCircle(rightCircleArray[0]);
    TweenMax.to(rightCircleArray[0].target, circleMoleculesSpeedArray[0], {
      ease: Power0.easeNone,
      x: rightCircleArray[0].newX,
      y: rightCircleArray[0].newY,
      rotation: '+=360',
      onComplete: function() {
        rightCircleAnimation();
      }
    });
  };


  const leftCircleAnimation = () => {
    for (let i = 1; i < leftCircleArray.length; i++) {
      getPointInCircle(leftCircleArray[i]);
      TweenMax.to(leftCircleArray[i].target, circleMoleculesSpeedArray[1], {
        ease: Power0.easeNone,
        x: leftCircleArray[i].newX,
        y: leftCircleArray[i].newY,
        rotation: '+=360'
      });
    }

    getPointInCircle(leftCircleArray[0]);
    TweenMax.to(leftCircleArray[0].target, circleMoleculesSpeedArray[1], {
      ease: Power0.easeNone,
      x: leftCircleArray[0].newX,
      y: leftCircleArray[0].newY,
      rotation: '+=360',
      onComplete: function() {
        leftCircleAnimation();
      }
    });
  };


  const getPointInCircle = (molecule) => {
    let angle = getRandomNumber(0, 2 * Math.PI);
    let newX = Math.floor(72 * Math.cos(angle));
    let newY = Math.floor(72 * Math.sin(angle));
    molecule.newX = newX;
    molecule.newY = newY;
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