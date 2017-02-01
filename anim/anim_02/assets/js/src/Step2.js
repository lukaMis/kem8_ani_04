

kem8_ani_04_anim_02.Step2 = () => {

  'use strict';
  const instance = {};

  const ANIMATION_START_DELAY = 5;

  let timeline;

  let supportTweensArray = [];

  let $plate;
  let $saltParticles;

  let $jarSaltParticles;
  let $circle0;
  let $circle1;

  let $circle_0_Mol;
  
  let $circle_0_Mol_0;
  let $circle_0_Mol_1;

  const circlePos = {
    x: 0,
    y: 0
  };

  let $circle_1_Mol_0;
  let $circle_1_Mol_1;

  const MAX_CIRCLE_OFFSET = 14;
  const CIRCLE_WOOBLE_TWEEN_TIME = 10;
  const CIRCLE_ROTATION_TWEEN_TIME = 30;
  
  const CIRCLE_1_WOOBLE_TWEEN_TIME = 4;
  const MAX_CIRCLE_1_OFFSET = 4;
  const CIRCLE_1_ROTATION_TWEEN_TIME = 20;


  const init = () => {
    $plate = $( '#wrapper #svg-wrapper #plate' );
    $saltParticles = $( '#wrapper #svg-wrapper #plateSalt g[id*="saltParticle"]' );

    $jarSaltParticles = $( '#wrapper #svg-wrapper #jar #jarSalt g[id*="jarSaltParticle"]' );

    $circle0 = $( '#wrapper #svg-wrapper #circle-0' );

    $circle_0_Mol_0 = $( '#wrapper #svg-wrapper #circle-0 #c-0-mol #BA' );
    $circle_0_Mol_1 = $( '#wrapper #svg-wrapper #circle-0 #c-0-mol #H2O' );

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

    $circle1 = $( '#wrapper #svg-wrapper #circle-1' );

    $circle_1_Mol_0 = $( '#wrapper #svg-wrapper #circle-1 #c-1-mol-0' );
    $circle_1_Mol_1 = $( '#wrapper #svg-wrapper #circle-1 #c-1-mol-1' );
  };


  const play = () => {

    $circle0.show();
    loopAtomsCircle0Fix();

    timeline = new TimelineMax({
      onStart: onStartCallback,
      onComplete: onCompleteCallback,
      delay: ANIMATION_START_DELAY
    });

    // timeline.to($jarSaltParticles, 0, {
    //   ease: Power0.easeNone,
    //   y: 242
    // });
    // TweenMax.set($jarSaltParticles, {
    //   y: 242
    // });

    randomizeSaltInJar();

    timeline.to($plate, 0.35, {
      ease: Power0.easeNone,
      rotation: -72,
      y: -20,
      transformOrigin: '100% 0%',
      onStart: function() {
        // $plate.show();
        purInTheSalt();
      },
      onComplete: function() {
        // $plate.hide();
      }
    });


    var tween = TweenMax.to($circle1, 0, {
      ease: Power0.easeNone,
      onComplete: function() {
        $circle1.show();
        loopAtomsCircle1Fix();
      }
    });
    supportTweensArray.push(tween);
  };

  const randomizeSaltInJar = () => {
    // TweenMax.set($jarSaltParticles, {
    //   y: 242
    // });

    for (let i = 0; i < $jarSaltParticles.length; i++) {
      let _newX = Math.floor(kem8_ani_04_anim_02.getRandomInRange(-10, 10));
      let _newY = Math.floor(kem8_ani_04_anim_02.getRandomInRange(242 - 12, 242 + 8));
      let particle = $($jarSaltParticles[i]);
      TweenMax.set(particle, {
        y: _newY,
        x: _newX,
      });
    }
  };

  const purInTheSalt = () => {
    for (let i = 0; i < $saltParticles.length; i++) {
      let _newX = Math.floor(kem8_ani_04_anim_02.getRandomInRange(-20, 20));
      let _newY = Math.floor(kem8_ani_04_anim_02.getRandomInRange(230, 248));
      let particle = $($saltParticles[i]);
      timeline.to(particle, 0.05, {
        y: _newY,
        x: _newX,
        ease: Power0.easeNone
      }, '-=' + (i/100));
    }
  };


  const loopAtomsCircle0Fix = () => {
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


  const loopAtomsCircle1Fix = () => {
    var tween = TweenMax.to($circle_1_Mol_0, CIRCLE_1_ROTATION_TWEEN_TIME, {
      ease: Power0.easeNone,
      rotation: 360,
      repeat: -1,
      transformOrigin: '50% 50%'
    });
    supportTweensArray.push(tween);

    tween = TweenMax.to($circle_1_Mol_1, CIRCLE_1_ROTATION_TWEEN_TIME, {
      ease: Power0.easeNone,
      rotation: 360,
      repeat: -1,
      transformOrigin: '50% 50%'
    });
    supportTweensArray.push(tween);

    bounceAtomsInCircle1Tween();
  };

  const bounceAtomsInCircle1Tween = () => {

    var newX = (Math.random() > 0.5) ? MAX_CIRCLE_1_OFFSET:-MAX_CIRCLE_1_OFFSET;
    var newY = (Math.random() > 0.5) ? MAX_CIRCLE_1_OFFSET:-MAX_CIRCLE_1_OFFSET;

    var tween = TweenMax.to($circle_1_Mol_0, CIRCLE_1_WOOBLE_TWEEN_TIME, {
      ease: Power0.easeNone,
      x: newX,
      y: newY,
      transformOrigin: '50% 50%',
      onComplete: function(e) {
        console.log('call bounceAtomsTween ******');
        // bounceAtomsInCircle1Tween();
      }
    });
    supportTweensArray.push(tween);

    var newX = (Math.random() > 0.5) ? MAX_CIRCLE_1_OFFSET:-MAX_CIRCLE_1_OFFSET;
    var newY = (Math.random() > 0.5) ? MAX_CIRCLE_1_OFFSET:-MAX_CIRCLE_1_OFFSET;

    var tween = TweenMax.to($circle_1_Mol_1, CIRCLE_1_WOOBLE_TWEEN_TIME, {
      ease: Power0.easeNone,
      x: newX,
      y: newY,
      transformOrigin: '50% 50%',
      onComplete: function(e) {
        console.log('call bounceAtomsTween ******');
        bounceAtomsInCircle1Tween();
      }
    });
    supportTweensArray.push(tween);
  };


  const onStartCallback = () => {
    console.log('onStartCallback Step2');

    $plate.show();
  };


  const onCompleteCallback = () => {
    console.log('onCompleteCallback Step2');
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

    TweenMax.to($circle_1_Mol_0, 0, {
      ease: Power0.easeNone,
      rotation: 0,
      transformOrigin: '50% 50%'
    });

    TweenMax.to($circle_1_Mol_1, 0, {
      ease: Power0.easeNone,
      rotation: 0,
      transformOrigin: '50% 50%'
    });

    TweenMax.to($circle_1_Mol_0, 0, {
      ease: Power0.easeNone,
      x: 0,
      y: 0,
      transformOrigin: '50% 50%'
    });

    TweenMax.to($circle_1_Mol_1, 0, {
      ease: Power0.easeNone,
      x: 0,
      y: 0,
      transformOrigin: '50% 50%'
    });
    $circle1.hide();

    $plate.hide();
  };


  const reset = () => {
    TweenMax.to($plate, 0, {
      ease: Power0.easeNone,
      rotation: 0,
      transformOrigin: '100% 0%'
    });

    TweenMax.to($saltParticles, 0, {
      ease: Power0.easeNone,
      y: 0,
      x: 0,
    });

    TweenMax.to($jarSaltParticles, 0, {
      ease: Power0.easeNone,
      y: 0,
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


    TweenMax.to($circle_1_Mol_0, 0, {
      ease: Power0.easeNone,
      rotation: 0,
      transformOrigin: '50% 50%'
    });

    TweenMax.to($circle_1_Mol_1, 0, {
      ease: Power0.easeNone,
      rotation: 0,
      transformOrigin: '50% 50%'
    });

    TweenMax.to($circle_1_Mol_0, 0, {
      ease: Power0.easeNone,
      x: 0,
      y: 0,
      transformOrigin: '50% 50%'
    });

    TweenMax.to($circle_1_Mol_1, 0, {
      ease: Power0.easeNone,
      x: 0,
      y: 0,
      transformOrigin: '50% 50%'
    });
    $circle1.hide();

    supportTweensArray.length = 0;
    console.log('Step2 reset');
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


  console.log('kem8_ani_04_anim_02.Step2');
  return instance;
};