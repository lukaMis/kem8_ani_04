

kem8_ani_04_anim_02.Step1 = () => {

  'use strict';
  const instance = {};

  let timeline;

  let $plate;
  let $jarSaltParticles;
  let $circle0;
  
  let $circle_0_Mol;
  
  let $circle_0_Mol_0;
  let $circle_0_Mol_1;

  let supportTweensArray = [];

  const circlePos = {
    x: 0,
    y: 0
  };

  const MAX_CIRCLE_OFFSET = 14;
  const CIRCLE_WOOBLE_TWEEN_TIME = 10;
  const CIRCLE_ROTATION_TWEEN_TIME = 30;
  const ANIMATION_START_DELAY = 1;


  const init = () => {
    $plate = $( '#wrapper #svg-wrapper #plate' );
    $jarSaltParticles = $( '#wrapper #svg-wrapper #jar #jarSalt g[id*="jarSaltParticle"]' );
    $circle0 = $( '#wrapper #svg-wrapper #circle-0' );
    
    $circle_0_Mol = $( '#wrapper #svg-wrapper #circle-0 #c-0-mol' );
    TweenMax.to($circle_0_Mol, 0, {
      ease: Power0.easeNone,
      x: '0',
      y: '0',
      transformOrigin: '50% 50%',
      onComplete: function(e) {
        circlePos.x = Math.floor($circle_0_Mol[0].getBoundingClientRect().left);
        circlePos.y = Math.floor($circle_0_Mol[0].getBoundingClientRect().top);
      }
    });

    $circle_0_Mol_0 = $( '#wrapper #svg-wrapper #circle-0 #c-0-mol #BA' );
    $circle_0_Mol_1 = $( '#wrapper #svg-wrapper #circle-0 #c-0-mol #H2O' );
  };


  const play = () => {
    timeline = new TimelineMax({
      onStart: onStartCallback,
      onComplete: onCompleteCallback,
      delay: ANIMATION_START_DELAY
    });

    timeline.to($plate, 0.35, {
      ease: Power0.easeNone,
      rotation: -72,
      y: -20,
      transformOrigin: '100% 0%',
      onStart: function() {
        // $plate.show();
      },
      onComplete: function() {
        // $plate.hide();
      }
    });

    for (let i = 0; i < $jarSaltParticles.length; i++) {
      let _newX = Math.floor(kem8_ani_04_anim_02.getRandomInRange(-20, 20));
      let _newY = Math.floor(kem8_ani_04_anim_02.getRandomInRange(230, 248));
      let particle = $($jarSaltParticles[i]);
      timeline.to(particle, 0.35, {
        y: _newY,
        x: _newX,
        ease: Power0.easeNone
      }, '-=0.42');
    }

    // timeline.to($circle0, 0, {
    //   ease: Power0.easeNone,
    //   onStart: function (e) {
    //     $circle0.show();
    //   },
    //   onComplete: function() {
    //     loopAtomsFix();
    //   }
    // });
  };


  const loopAtomsFix = () => {
    var tween = TweenMax.to($circle_0_Mol_0, CIRCLE_ROTATION_TWEEN_TIME, {
      ease: Power0.easeNone,
      rotation: 360,
      repeat: -1,
      transformOrigin: '50% 50%'
    });
    supportTweensArray.push(tween);

    tween = TweenMax.to($circle_0_Mol_1, CIRCLE_ROTATION_TWEEN_TIME, {
      ease: Power0.easeNone,
      rotation: 360,
      repeat: -1,
      transformOrigin: '50% 50%'
    });
    supportTweensArray.push(tween);

    bounceAtomsTween();
  };


  const bounceAtomsTween = () => {

    let newX = (Math.random() > 0.5) ? MAX_CIRCLE_OFFSET:-MAX_CIRCLE_OFFSET;
    let newY = (Math.random() > 0.5) ? MAX_CIRCLE_OFFSET:-MAX_CIRCLE_OFFSET;

    var tween = TweenMax.to($circle_0_Mol, CIRCLE_WOOBLE_TWEEN_TIME, {
      ease: Power0.easeNone,
      x: newX,
      y: newY,
      transformOrigin: '50% 50%',
      onComplete: function(e) {
        console.log('call bounceAtomsTween ******');
        bounceAtomsTween();
      }
    });
    supportTweensArray.push(tween);
  };


  const onStartCallback = () => {
    console.log('onStartCallback Step1');
    $plate.show();
  };


  const onCompleteCallback = () => {
    console.log('onCompleteCallback Step1');
    $circle0.show();
    loopAtomsFix();
    $plate.hide();
  };


  const reset = () => {
    TweenMax.to($plate, 0, {
      ease: Power0.easeNone,
      rotation: 0,
      y: 0,
      transformOrigin: '100% 0%'
    });
    TweenMax.to($jarSaltParticles, 0, {
      ease: Power0.easeNone,
      y: 0,
      x: 0
    });

    TweenMax.to($circle_0_Mol_0, 0, {
      ease: Power0.easeNone,
      rotation: 0,
      transformOrigin: '50% 50%'
    });

    TweenMax.to($circle_0_Mol_1, 0, {
      ease: Power0.easeNone,
      rotation: 0,
      transformOrigin: '50% 50%'
    });

    TweenMax.to($circle_0_Mol, 0, {
      ease: Power0.easeNone,
      x: 0,
      y: 0,
      transformOrigin: '50% 50%'
    });

    $circle0.hide();
    console.log('$circle0 HIDDEN');
    $plate.show();
    supportTweensArray.length = 0;
    console.log('Step1 reset');
  };


  const killTweens = () => {
    if(timeline) {
      timeline.kill();
    }
    for (let i = 0; i < supportTweensArray.length; i++) {
      supportTweensArray[i].kill();
    }
    console.log('Step1 KILLED');
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


  console.log('kem8_ani_04_anim_02.Step1');
  return instance;
};