

kem8_ani_04_anim_02.Step3 = () => {

  'use strict';
  const instance = {};

  let timeline;

  let $jarSalt;
  let $plateSalt;

  let $jarSaltParticles;
  let $plateSaltParticles;

  let $stick;
  let $jar;

  let $plate;

  let bubblesTimeout;

  const PARTICLES_TWEEN_TIME = 7;

  let bubblesTimeoutArray = [];

  let $circle3;

  let c_3_Cl2Ba;

  let c_3_NH3_0;
  let c_3_NH3_1;

  let supportTweensArray = [];

  let circleData;

  const elementsInCircleSpeedArray = [
    30,
    12,
    10
  ];

  let $smallElementsInCircle;



  const init = () => {
    $plate = $( '#wrapper #svg-wrapper #plate' );
    // TweenMax.set($plate, {opacity: 0});

    $plateSaltParticles = $( '#wrapper #svg-wrapper #plateSalt g[id*="saltParticle"]' );
    $jarSaltParticles = $( '#wrapper #svg-wrapper #jar #jarSalt g[id*="jarSaltParticle"]' );

    $plateSalt = $( '#wrapper #svg-wrapper #plateSalt' );
    $jarSalt = $( '#wrapper #svg-wrapper #jar #jarSalt' );

    $stick = $('#wrapper #svg-wrapper #stick');

    $jar = $('#wrapper #svg-wrapper #jar');

    $circle3 = $('#wrapper #svg-wrapper #circle-2');

    c_3_Cl2Ba = $('#c-3-Cl2Ba');

    c_3_NH3_0 = $('#c-3-NH3-0');
    c_3_NH3_1 = $('#c-3-NH3-1');

    
    circleData = Snap('#c-2-stroke').getBBox();
    circleData.radius = circleData.width / 2;

    $smallElementsInCircle = $('[id*=c-3-H20-]');

    animateInCircleFirstElement();
    animateInCircleSecondElements();
    animateInCircleThirdElements();
  };


  const play = () => {

    // $plate.hide();
    TweenMax.set($plate, {opacity: 0});
    // $circle3.show();
    TweenMax.set($plateSalt, {opacity: 1});
    TweenMax.set($stick, {opacity: 1});

    timeline = new TimelineMax({
      onStart: onStartCallback,
      onComplete: onCompleteCallback
    });
    

    timeline.to($jar, 2, {
      ease: Power2.easeOut,
      // x: -172,
      onComplete: function() {
        let jarData = Snap('#jar').getBBox();
        let minX = Math.floor(jarData.x + 40);
        let maxX = Math.floor(jarData.x + jarData.width - 50);
        let minY = Math.floor(jarData.y + jarData.height - 40);
        let maxY = Math.floor(jarData.y + jarData.height - 20);
        makeBubbles(minX, maxX, minY, maxY);
      }
    });

    for (let i = 0; i < 4; i++) {
      const newSkewX = ( i % 2 === 0 ) ? -10:20;
      const tweenTime = Math.abs(newSkewX) / 10;
      timeline.to($stick, tweenTime, {
        ease: Power0.easeNone,
        skewX: newSkewX,
        x: newSkewX,
        transformOrigin: '50% 100%'
      });
    }

    for (let i = 0; i < $plateSaltParticles.length; i++) {
      let _newX = Math.floor(kem8_ani_04_anim_02.getRandomInRange(-20, 15));
      let _newY = Math.floor(kem8_ani_04_anim_02.getRandomInRange(-5, 10));
      let particle = $($plateSaltParticles[i]);
      timeline.to(particle, PARTICLES_TWEEN_TIME, {
        y: _newY,
        x: _newX,
        ease: Power0.easeNone
      }, '-=' + PARTICLES_TWEEN_TIME.toString());
    }

    for (let i = 0; i < $jarSaltParticles.length; i++) {
      let _newX = Math.floor(kem8_ani_04_anim_02.getRandomInRange(-20, 15));
      let _newY = Math.floor(kem8_ani_04_anim_02.getRandomInRange(-5, 10));
      let particle = $($jarSaltParticles[i]);
      timeline.to(particle, PARTICLES_TWEEN_TIME, {
        y: _newY,
        x: _newX,
        ease: Power0.easeNone
      }, '-=' + PARTICLES_TWEEN_TIME.toString());
    }

    // reset stick back to orig state
    timeline.to($stick, 1, {
      ease: Power0.easeNone,
      skewX: 0,
      x: 0,
      transformOrigin: '50% 100%'
    });
  };


  const makeBubbles = (minX, maxX, minY, maxY) => {
    for (let i = 0; i < 42; i++) {
      const newTime = i * 100 + 500;
      let bubblesTimeout = setTimeout(() => {
        const left = Math.floor(kem8_ani_04_anim_02.getRandomInRange(minX, maxX));
        const top = Math.floor(kem8_ani_04_anim_02.getRandomInRange(minY, maxY));
        const bubble = 
        `
        <div class="blueBubble" style="left: ${left}px; top: ${top}px; "></div>
        `;
        $('#wrapper').append(bubble);
      },  newTime);
      bubblesTimeoutArray.push(bubblesTimeout);
    }
  };

  const killBubbles = () => {
    for (let i = 0; i < bubblesTimeoutArray.length; i++) {
      clearTimeout(bubblesTimeoutArray[i]);
    }
    bubblesTimeoutArray.length = 0;
    $( '.blueBubble' ).remove();
  };

  const burstBubble = () => {
    // $( '.blueBubble' ).remove();
  };

  const animateInCircleFirstElement = () => {

    let angle = kem8_ani_04_anim_02.getRandomInRange(0, 2 * Math.PI);
    let newX = (circleData.radius - 85) * Math.cos(angle);
    let newY = (circleData.radius - 85) * Math.sin(angle);

    TweenMax.to(c_3_Cl2Ba, elementsInCircleSpeedArray[0], {
      ease: Power0.easeNone,
      transformOrigin: '50% 50%',
      x: newX,
      y: newY,
      rotation: 360,
      onComplete: function() {
        TweenMax.set(c_3_Cl2Ba, {rotation: 0});
        animateInCircleFirstElement();
      }
    });
  };

  const animateInCircleSecondElements = () => {

    let angle = kem8_ani_04_anim_02.getRandomInRange(0, 2 * Math.PI);
    let newX = (circleData.radius - 32) * Math.cos(angle);
    let newY = (circleData.radius - 32) * Math.sin(angle);

    TweenMax.to(c_3_NH3_1, elementsInCircleSpeedArray[1], {
      ease: Power0.easeNone,
      transformOrigin: '50% 50%',
      x: newX,
      y: newY,
      rotation: 360,
      onComplete: function() {
        TweenMax.set(c_3_NH3_1, {rotation: 0});
      }
    });

    angle = kem8_ani_04_anim_02.getRandomInRange(0, 2 * Math.PI);
    newX = (circleData.radius - 32) * Math.cos(angle);
    newY = (circleData.radius - 32) * Math.sin(angle);
    
    TweenMax.to(c_3_NH3_0, elementsInCircleSpeedArray[1], {
      ease: Power0.easeNone,
      transformOrigin: '50% 50%',
      x: newX,
      y: newY,
      rotation: 360,
      onComplete: function() {
        TweenMax.set(c_3_NH3_0, {rotation: 0});
        animateInCircleSecondElements();
      }
    });
  };

  const animateInCircleThirdElements = () => {

    for (let i = 0, max = $smallElementsInCircle.length; i < max; i++) {
      let angle = kem8_ani_04_anim_02.getRandomInRange(0, 2 * Math.PI);
      let newX = (circleData.radius - 21) * Math.cos(angle);
      let newY = (circleData.radius - 21) * Math.sin(angle);
      let element = $($smallElementsInCircle[i]);
      
      TweenMax.to(element, elementsInCircleSpeedArray[2], {
        ease: Power0.easeNone,
        transformOrigin: '50% 50%',
        x: newX,
        y: newY,
        rotation: 360,
        onComplete: function() {
          TweenMax.set(element, {rotation: 0});
          if(i === max-1) {
            animateInCircleThirdElements();
          }
        }
      });
    }
  };


  const onStartCallback = () => {
    console.log('onStartCallback Step3');
  };


  const onCompleteCallback = () => {
    console.log('onCompleteCallback Step3');
    // $circle3.show();
    TweenMax.set($circle3, {opacity: 1});
  };


  const reset = () => {
    killBubbles();

    TweenMax.set($jar, {
      x: 0
    });
    // $circle3.hide();
    TweenMax.set($circle3, {opacity: 0});
    TweenMax.set($plateSalt, {opacity: 0});
    TweenMax.set($stick, {opacity: 0});
  };


  const killTweens = () => {
    if(timeline) {
      timeline.kill();
    }
    console.log('Step3 KILLED');
  };


  /* API */
  instance.init = () => {
    init();
  };
  instance.play = () => {
    play();
  };
  instance.kill = () => {
    killTweens();
    reset();
  };


  console.log('kem8_ani_04_anim_02.Step3');
  return instance;
};