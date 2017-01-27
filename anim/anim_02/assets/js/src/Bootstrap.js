

kem8_ani_04_anim_02.Bootstrap = () => {

  'use strict';
  const instance = {};


  const step_1 = kem8_ani_04_anim_02.Step1();
  const step_2 = kem8_ani_04_anim_02.Step2();
  const step_3 = kem8_ani_04_anim_02.Step3();
  const controller = kem8_ani_04_anim_02.Controller();


  const svgLoader = kem8_ani_04_anim_02.SvgLoader();
  $(svgLoader).one('svgLoaded', () => {
    console.log('svg is loaded');
    controller.init([step_1, step_2, step_3]);
  });
  

  const init = () => {
    svgLoader.load();
  };


  init();


  /* API */
  instance.init = () => {};

  console.log('kem8_ani_04_anim_02.Bootstrap');
  return instance;
};