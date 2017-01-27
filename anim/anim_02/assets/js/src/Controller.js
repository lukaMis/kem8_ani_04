

kem8_ani_04_anim_02.Controller = () => {

  'use strict';
  const instance = {};

  let stepsArray = [];


  const addListnerForStepper = () => {
    $(document).on('onStepChange', onStepChangeHandler);
  };


  const onStepChangeHandler = (e, data) => {
    handleStep(data.currentStep);
  };


  const handleStep = (currentStep) => {
    console.log('currentStep', currentStep);
    // kill all animations in all the steps
    for (let i = 0; i < stepsArray.length; i++) {
      stepsArray[i].kill();
    }
    // play current step animations
    stepsArray[currentStep-1].play();
  };


  const stepsInit = () => {
    for (let i = 0; i < stepsArray.length; i++) {
      stepsArray[i].init();
    }
  };


  /* API */
  instance.init = (arrayOfSteps) => {
    stepsArray = arrayOfSteps;
    stepsInit();
    addListnerForStepper();
  };

  console.log('kem8_ani_04_anim_02.Controller');
  return instance;
};