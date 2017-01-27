

(function(){
  'use strict';

  $(document).on('onStepChange', onStepChangeHandler);

  const $wrapper = $('#wrapper');
  let stagesArray = [];
  const NUMBER_OF_WATER_PARTICLES = 8;
  const ATTRACTION_SPEED = 1;
  const PARTICLES_TWEEN_TIME = 2000;

  
  function init() {
    setStepOnWrapper(1);

    startAnimation({
      selector: 'canvas-O',
      type: 'O',
      id: 'O' 
    });
    startAnimation({
      selector: 'canvas-H',
      type: 'H',
      id: 'H' 
    });    

    addListnerToStage();
    $(document).trigger('onContentLoaded');
  };
  init();


  function onStepChangeHandler(e, data) {
    setStepOnWrapper(data.currentStep);

    if(data.currentStep > 1) {
      combineParticles_O();
      combineParticles_H();
    } else {
      resetHs();
      resetOs();
    }
  };


  function setStepOnWrapper(index) {
    $wrapper.attr({
      'data-step': index
    });
  };


  Snap.load('assets/images/anim_01.svg', function (f) {
    Snap('#svg-wrapper').append(f);
  });


  function startAnimation(configObj) {
    let stageSelector = document.getElementById(configObj.selector);
    let stage = new createjs.Stage(stageSelector);

    stage.width = stageSelector.width;
    stage.height = stageSelector.height;

    stage.type = configObj.type;
    stage.id = configObj.id;

    createParticles({
      image : 'O',
      width: 36,
      height: 36,
      max : NUMBER_OF_WATER_PARTICLES,
      type : 'H2O',
      stage: stage
    });
    
    addHToO(stage);

    stagesArray.push(stage);
  };


  function addListnerToStage() {
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener('tick', onTick);
  };


  function addHToO(selectedStage) {
    let max = selectedStage['H2O'].length;
    let pathToH = 'assets/images/' + 'H' + '.png';
    let hWidth = 19;
    let hHeight = 19;
    let type = 'H';
    
    for (let i = 0; i < max; i++) {
      let parent = selectedStage['H2O'][i];
      let particlesArray = [];

      for (let j = 0; j < 2; j++) {
        let container = new createjs.Container();
        let img = new createjs.Bitmap(pathToH);
        
        container.regX = hWidth / 2;
        container.regY = hHeight / 2;
        
        container.width = hWidth;
        container.height = hHeight;
        container.type = type;

        if (j === 0) {
          container.x = 22;
          container.y = -2;
        } else {
          container.x = parent.width + 0;
          container.y = parent.height / 2 - 2;
        }

        container.startX = container.x;
        container.startY = container.y;

        particlesArray.push(container);

        container.addChild(img);
        parent.addChild(container);
      }
      parent[type] = particlesArray;
    }
  };


  function createParticles(configObj) {
    let max = configObj.max;
    let path = 'assets/images/' + configObj.image + '.png';
    let type = configObj.type;
    let widthHalf = configObj.width * 0.5;
    let heightHalf = configObj.height * 0.5;
    let particlesH2OArray = [];
    let width = configObj.width;
    let height = configObj.height;

    for (var i = 0; i < configObj.max; i++) {
      let containerH2O = new createjs.Container();
      let containerO = new createjs.Container();
      let img = new createjs.Bitmap(path);
      let particlesArray = [];

      containerO.type = configObj.image;
      
      containerH2O.regX = widthHalf;
      containerH2O.regY = heightHalf;

      containerH2O.width = width;
      containerH2O.height = height;

      containerH2O.x = parseInt(getRandomInRange(configObj.width, configObj.stage.width - configObj.width).toFixed(1));
      containerH2O.y = parseInt(getRandomInRange(configObj.height, configObj.stage.height - configObj.height).toFixed(1));
      
      containerH2O.startX = containerH2O.x;
      containerH2O.startY = containerH2O.y;

      containerH2O.boundWidth = widthHalf;
      containerH2O.boundHeight = heightHalf;

      containerH2O.rotationSpeed = parseFloat(getRandomInRange(-2, 2).toFixed(2));
      
      containerH2O.moveSpeedX = parseFloat(getRandomInRange(-2, 2).toFixed(2));
      containerH2O.moveSpeedY = parseFloat(getRandomInRange(-2, 2).toFixed(2));

      particlesH2OArray.push(containerH2O);
      particlesArray.push(containerO);

      containerH2O[configObj.image] = particlesArray;
      
      containerO.addChild(img);
      containerH2O.addChild(containerO);
      configObj.stage.addChild(containerH2O);
    }
    configObj.stage[type] = particlesH2OArray;
  };


  function onTick(e) {
    let numOfStages = stagesArray.length;
    for (let i = 0; i < numOfStages; i++) {
      let currentStage = stagesArray[i];
      let len = currentStage.children.length;
      
      if(!currentStage.follow) {
        for (let i = 0; i < len; i++) {
          move(currentStage.getChildAt(i));
        }
        currentStage.update();
      } else {
        for (let i = 0; i < len; i++) {
          if(i % 2 === 0) {
            move(currentStage.getChildAt(i));
            follow( currentStage.getChildAt(i), currentStage.getChildAt(i+1) );
          }
        }
        currentStage.update();
      }
    }

  };


  function move(p) {
    p.x += p.moveSpeedX;
    p.y += p.moveSpeedY;
    p.rotation += p.rotationSpeed;

    if(p.x > 170 - p.boundWidth || p.x < 0 + p.boundWidth) {
      p.moveSpeedX = p.moveSpeedX * -1;
      randomizeRotation(p);
    }

    if(p.y > 170 - p.boundHeight || p.y < 0 + p.boundHeight) {
      p.moveSpeedY = p.moveSpeedY * -1;
      randomizeRotation(p);
    }
  };

  function follow(p, r) {
    r.x += ((p.x + p.width/2+4) - r.x) * ATTRACTION_SPEED;
    r.y += ((p.y +p.height/2+4) - r.y) * ATTRACTION_SPEED;
    r.rotation = p.rotation *-1;
  };


  function randomizeRotation(p) {
    p.rotationSpeed = (Math.random() > 0.5) ? p.rotationSpeed:p.rotationSpeed * -1;
  }
  

  function getRandomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }


  function hideParticlesByType(type) {
    let len = stage.children.length;
    for (let i = len-1; i >= 0; i--) {
      let innerLen = stage.children[i].children.length;
      for (let j = 0; j < innerLen; j++) {
        let _type = stage.children[i].getChildAt(j).type;
        if(_type === type) {
          createjs.Tween.get( stage.children[i].getChildAt(j) ).to({ alpha : 0 }, 1000);
        }
      }
    }
  };


  function combineParticles_O() {
    let stageToUse;
    let typeToUse = 'O';
    for (var i = 0; i < stagesArray.length; i++) {
      if(stagesArray[i].type === typeToUse) {
        stageToUse = stagesArray[i];
        stageToUse.follow = true;
      }
    }
    
    let arrayToUse = stageToUse['H2O'];
    let maxParticles = arrayToUse.length;
    for (let i = 0; i < maxParticles; i++) {
      let particleH2O = arrayToUse[i];
      let arrayToHide = particleH2O['H'];
      for (let j = 0; j < arrayToHide.length; j++) {
        createjs.Tween.get( arrayToHide[j], {override:true} ).to({ alpha: 0 }, PARTICLES_TWEEN_TIME/10);
      }
    }
  };


  function resetOs() {
    let stageToUse;
    let typeToUse = 'O';
    for (var i = 0; i < stagesArray.length; i++) {
      if(stagesArray[i].type === typeToUse) {
        stageToUse = stagesArray[i];
        stageToUse.follow = null;
      }
    }
    
    let arrayToUse = stageToUse['H2O'];
    let maxParticles = arrayToUse.length;
    for (let i = 0; i < maxParticles; i++) {
      let particleH2O = arrayToUse[i];
      let arrayToHide = particleH2O['H'];
      for (let j = 0; j < arrayToHide.length; j++) {
        createjs.Tween.get( arrayToHide[j], {override:true} ).to({ alpha: 1 }, PARTICLES_TWEEN_TIME/10);
      }
    }
  };


  function combineParticles_H() {
    let stageToUse;
    let typeToUse = 'H';

    for (var i = 0; i < stagesArray.length; i++) {
      if(stagesArray[i].type === typeToUse) {
        stageToUse = stagesArray[i];
      }
    }
    
    let arrayToUse = stageToUse['H2O'];
    let maxParticles = arrayToUse.length;
    for (let i = 0; i < maxParticles; i++) {
      let particleH2O = arrayToUse[i];
      let arrayToHide = particleH2O['O'];
      for (let j = 0; j < arrayToHide.length; j++) {
        // arrayToHide[j].alpha = 0;
        createjs.Tween.get( arrayToHide[j], {override:true} ).to({ alpha: 0 }, PARTICLES_TWEEN_TIME/10);
      }
      let arrayToCombine = particleH2O[typeToUse];

      createjs.Tween.get( arrayToCombine[0], {override:true} ).to({ x : 0, y: 0 }, PARTICLES_TWEEN_TIME);
      createjs.Tween.get( arrayToCombine[1], {override:true} ).to({ x : arrayToCombine[1].width/2+3, y: arrayToCombine[1].height/2+3 }, PARTICLES_TWEEN_TIME);
    }
  };


  function resetHs() {
    let stageToUse;
    let typeToUse = 'H';
    for (var i = 0; i < stagesArray.length; i++) {
      if(stagesArray[i].type === typeToUse) {
        stageToUse = stagesArray[i];
      }
    }

    let arrayToUse = stageToUse['H2O'];
    let maxParticles = arrayToUse.length;
    for (let i = 0; i < maxParticles; i++) {
      let particleH2O = arrayToUse[i];
      let arrayToHide = particleH2O['O'];
      for (let j = 0; j < arrayToHide.length; j++) {
        createjs.Tween.get( arrayToHide[j], {override:true} ).to({ alpha: 1 }, PARTICLES_TWEEN_TIME/10);
      }

      let arrayToCombine = particleH2O[typeToUse];
      createjs.Tween.get( arrayToCombine[0], {override:true} ).to({ x : arrayToCombine[0].startX, y: arrayToCombine[0].startY }, PARTICLES_TWEEN_TIME/10);
      createjs.Tween.get( arrayToCombine[1], {override:true} ).to({ x : arrayToCombine[1].startX, y: arrayToCombine[1].startY }, PARTICLES_TWEEN_TIME/10);
    }
  };


})();