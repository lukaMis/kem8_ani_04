

kem8_ani_04_anim_03.Controller = () => {

  'use strict';
  const instance = {};

  let fire_0;
  let fire_1;

  let fireArray = [];

  let rightCircleArray = [];

  // for transfrom value :)
  // console.log(this.target[0]._gsTransform.x );


  const getDomReferences = () => {
    fireArray[0] = $('#fire-0');
    fireArray[1] = $('#fire-1');

    rightCircleArray[0] = { target: $('#circle-1-molecule-0'), moveSpeedX: 1, moveSpeedY: 1 };
    TweenMax.set(rightCircleArray[0].target, {
      transformOrigin: '50% 50%'
    });
  };


  const startAnimation = () => {
    setInitialStateForFire();
    fireAimation();

    rightCircleAnimation();
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


    TweenMax.to(rightCircleArray[0].target, 1, {
      ease: Power0.easeNone,
      // x: rightCircleArray[0].transformX,
      // y: rightCircleArray[0].transformY,
      // x: getPointInCircle().x,
      // y: getPointInCircle().y,
      rotation: '+=1',
      onComplete: function() {
        rightCircleAnimation();
      },
      onStart: function() {
        // getDirection(this.target[0]._gsTransform, rightCircleArray[0]);
        // getPointInCircle();
      }
    });
  };

  const getPointInCircle = () => {
    // let angle = getRandomNumber(0, 2 * Math.PI);
    // let newX = Math.floor(110 - 33 * Math.cos(angle));
    // let newY = Math.floor(110 - 33 Math.sin(angle));
    console.log(newX, newY);
    // return {
    //   x: newX,
    //   y: newY
    // }
  };

  const getDirection = (currentTransform, atom) => {
    if(currentTransform.x > 78 && atom.moveSpeedX === 1) {
      atom.moveSpeedX = atom.moveSpeedX * -1;
    }
    else if(currentTransform.x < -78 && atom.moveSpeedX === -1) {
      atom.moveSpeedX = atom.moveSpeedX * -1;
    }
    // console.log( getRandomNumber(0.5, 1.5).toFixed(2) );
    let returnDirectionX = (atom.moveSpeedX > 0) ? '+=':'-=';
    returnDirectionX += Math.floor(getRandomNumber(1, 3));
    // console.log(currentTransform.x, atom.moveSpeedX, returnDirectionX);
    atom.transformX = returnDirectionX;


    // console.log('currentTransform.y', currentTransform.y);
    if(currentTransform.y > 78 && atom.moveSpeedY === 1) {
      atom.moveSpeedY = atom.moveSpeedY * -1;
      atom.moveSpeedX = atom.moveSpeedX * -1;
    }
    else if(currentTransform.y < -78 && atom.moveSpeedY === -1) {
      atom.moveSpeedY = atom.moveSpeedY * -1;
      atom.moveSpeedX = atom.moveSpeedX * -1;
    }
    let returnDirectionY = (atom.moveSpeedY > 0) ? '+=':'-=';
    // console.log(currentTransform.y, atom.moveSpeedY, returnDirectionY);
    returnDirectionY += Math.floor(getRandomNumber(1, 3));
    atom.transformY = returnDirectionY;
    // return returnDirection;
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