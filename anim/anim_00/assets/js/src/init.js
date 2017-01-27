
(function() {
  
  'use strict';

  let canvas, stage, stage_1, exportRoot, anim_container, dom_overlay_container;
  $(document).on('onStepChange', onStepChangeHandler);


  function init() {
    startAnimation_0();
    startAnimation_1();
    $(document).trigger('onContentLoaded');
  };
  init();


  function onStepChangeHandler(e, data) {
    let newFps = 0;
    if(data.currentStep === 1) {
      newFps = 18;
    }
    if(data.currentStep === 2) {
      newFps = 60;
    }
    createjs.Ticker.setFPS(newFps);
  };
  

  function startAnimation_0() {
    canvas = document.getElementById('step-0');
    anim_container = document.getElementById('animation_container');
    dom_overlay_container = document.getElementById('dom_overlay_container');
    
    exportRoot = new lib.anim_00();
    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot); 

    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener('tick', stage);
  };


  function startAnimation_1() {
    let canvas1 = document.getElementById('step-1');
    stage_1 = new createjs.Stage(canvas1);
    stage_1.width = canvas1.width - 8;
    stage_1.height = canvas1.height - 8;

    createParticles({
      image : 'mol_0',
      width: 78,
      height: 81,
      max : 2,
      type : 'mol_0'
    });

    createParticles({
      image : 'mol_1',
      width: 87,
      height: 80,
      max : 2,
      type : 'mol_1'
    });

    createParticles({
      image : 'mol_2',
      width: 36,
      height: 36,
      max : 4,
      type : 'mol_2'
    });

    // createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener('tick', onTick);
  }


  function createParticles(configObj) {
    let max = configObj.max;
    let path = 'assets/images/molecules/' + configObj.image + '.png';
    let type = configObj.type;
    let widthHalf = configObj.width * 0.5;
    let heightHalf = configObj.height * 0.5;
    let particlesArray = [];

    for (var i = 0; i < configObj.max; i++) {
      let p = new createjs.Bitmap(path);
      
      p.regX = widthHalf;
      p.regY = heightHalf;

      p.x = parseInt(getRandomInRange(configObj.width, stage_1.width - configObj.width).toFixed(1));
      p.y = parseInt(getRandomInRange(configObj.height, stage_1.height - configObj.height).toFixed(1));
      
      p.initX = p.x;
      p.initY = p.y;

      p.boundWidth = widthHalf;
      p.boundHeight = heightHalf;
      p.type = type;
      p.rotationSpeed = parseFloat(getRandomInRange(-0.92, 0.92).toFixed(2));
      
      p.moveSpeedX = parseFloat(getRandomInRange(-0.92, 0.92).toFixed(2));
      p.moveSpeedY = parseFloat(getRandomInRange(-0.92, 0.92).toFixed(2));

      particlesArray.push(p);

      stage_1.addChild(p);
    }

    stage_1[type] = particlesArray;
  };


  function onTick(e) {
    let len = stage_1.children.length;
    for (let i = len-1; i >= 0; i--) {
      move(stage_1.getChildAt(i));
    }
    stage_1.update();
  };


  function move(p) {
    p.x += p.moveSpeedX;
    p.y += p.moveSpeedY;
    p.rotation += p.rotationSpeed;

    if(p.x > stage_1.width - p.boundWidth || p.x < 0 + p.boundWidth) {
      p.moveSpeedX = p.moveSpeedX * -1;
      randomizeRotation(p);
    }

    if(p.y > stage_1.height - p.boundHeight || p.y < 0 + p.boundHeight) {
      p.moveSpeedY = p.moveSpeedY * -1;
      randomizeRotation(p);
    }
  };


  function randomizeRotation(p) {
    p.rotationSpeed = (Math.random() > 0.5) ? p.rotationSpeed:p.rotationSpeed * -1;
  }
  

  function getRandomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

})();