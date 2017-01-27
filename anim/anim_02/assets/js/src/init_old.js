

(function() {
  'use strict';

  let jarSaltParticleArray;

  // $(document).trigger('onContentLoaded');
  console.log('inner');



  function init() {
    setDataStep(1);
    loadSnapContent();
    addStepperEventListner();
  };


  function loadSnapContent() {
    Snap.load('assets/images/anim_02.svg', function (f) {
      // Note that we traversre and change attr before SVG
      // is even added to the page
      // f.selectAll("polygon[fill='#09B39C']").attr({fill: "#bada55"});
      // g = f.select("g");

      // hideCircles(f);
      Snap('#svg-wrapper').append(f);

      // hideCircles(f);

      loadComplete();
      // startAnimation();
    });
  };

  function hideCircles(svgStuff) {
    console.log(svgStuff);
    svgStuff.selectAll('[id*="circle"]').attr({class: 'hidden'});
    svgStuff.selectAll('[id="stick"]').attr({class: 'hidden'});
    svgStuff.selectAll('[id="plate"]').attr({class: 'hidden'});
    svgStuff.selectAll('[id*="saltParticle"]').attr({class: 'hidden'});

    svgStuff.selectAll('[id*="jarSaltParticle"]').attr({class: 'inAir opacity0'});
  };


  function startAnimation() {
    let _getItems = Snap.selectAll('[id*="jarSaltParticle"]');
    let _itemsCount = _getItems.length;
    _getItems.forEach((item, index) => {
      setTimeout(() => {
        Snap(item).removeClass('inAir opacity0');
        if(index === _itemsCount-1) {
          console.log('end of salt animation');
          Snap('#circle-0').removeClass('hidden');
          // TweenLite.to('#c-0-mol', 2, { 
          //   y: '+=42px', 
          //   onComplete: function(e) {
          //     TweenLite.to('#c-0-mol', 1, { y:0 });
          //   }
          // });
          
        }
      }, 16 * index);
    });
  };


  function animateElement(configObj) {
    let selector = configObj.selector;
    let tweenTime = configObj.tweenTime;
    let tweenDelay = configObj.tweenDelay;
    let xMax = configObj.xMax;
    let yMax = configObj.yMax;
    let rotationMax = configObj.rotationMax;
    let _onComplete = configObj.onComplete;

    TweenLite.to(selector, tweenTime, {
      x : xMax, 
      y : yMax,
      rotation : rotationMax,
      onComplete : onComplete
    });
  };


  function loadComplete() {
    $(document).trigger('onContentLoaded');
  };

  function addStepperEventListner() {
    $(document).on('onStepChange', onStepChangeHandler);
  };

  function onStepChangeHandler(e, data) {
    console.log('on step change:', data.currentStep);
    setDataStep(data.currentStep);
  };

  function setDataStep(step) {
    $(wrapper).attr({
      'data-step' : step
    });
  };

  init();
})();