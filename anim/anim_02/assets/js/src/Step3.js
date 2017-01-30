

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


  const init = () => {
    $plateSaltParticles = $( '#wrapper #svg-wrapper #plateSalt g[id*="saltParticle"]' );
    $jarSaltParticles = $( '#wrapper #svg-wrapper #jar #jarSalt g[id*="jarSaltParticle"]' );

    $plateSalt = $( '#wrapper #svg-wrapper #plateSalt' );
    $jarSalt = $( '#wrapper #svg-wrapper #jar #jarSalt' );

    $stick = $('#wrapper #svg-wrapper #stick');

    $jar = $('#wrapper #svg-wrapper #jar');
  };


  const play = () => {
    timeline = new TimelineMax({
      onStart: onStartCallback,
      onComplete: onCompleteCallback
    });

    timeline.to($jar, 2, {
      ease: Power2.easeOut,
      x: -172
    });

    for (let i = 0; i < 4; i++) {
      const newSkewX = ( i % 2 === 0 ) ? -10:30;
      // const newX = ( i % 2 === 0 ) ? -10:20;
      const tweenTime = Math.abs(newSkewX) / 10;
      timeline.to($stick, tweenTime, {
        ease: Power0.easeNone,
        skewX: newSkewX,
        x: newSkewX * 1.5,
        transformOrigin: '50% 100%'
      });
    }

    for (let i = 0; i < $plateSaltParticles.length; i++) {
      let _newX = Math.floor(kem8_ani_04_anim_02.getRandomInRange(-20, 15));
      let _newY = Math.floor(kem8_ani_04_anim_02.getRandomInRange(-5, 10));
      let particle = $($plateSaltParticles[i]);
      timeline.to(particle, 7, {
        y: _newY,
        x: _newX,
        ease: Power0.easeNone
      }, '-=8');
    }

    for (let i = 0; i < $jarSaltParticles.length; i++) {
      let _newX = Math.floor(kem8_ani_04_anim_02.getRandomInRange(-20, 15));
      let _newY = Math.floor(kem8_ani_04_anim_02.getRandomInRange(-5, 10));
      let particle = $($jarSaltParticles[i]);
      timeline.to(particle, 7, {
        y: _newY,
        x: _newX,
        ease: Power0.easeNone
      }, '-=8');
    }

    // reset stick back to orig state
    timeline.to($stick, 1, {
      ease: Power0.easeNone,
      skewX: 0,
      x: 0,
      transformOrigin: '50% 100%'
    });

  };


  const onStartCallback = () => {
    console.log('onStartCallback Step3');
  };


  const onCompleteCallback = () => {
    console.log('onCompleteCallback Step3');
  };


  const kill = () => {
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
    kill();
  };


  console.log('kem8_ani_04_anim_02.Step3');
  return instance;
};