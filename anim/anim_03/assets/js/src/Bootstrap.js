

kem8_ani_04_anim_03.Bootstrap = () => {

  'use strict';
  const instance = {};

  const svgLoader = kem8_ani_04_anim_03.SvgLoader();
  $(svgLoader).one('svgLoaded', () => {
    console.log('svg loaded');
    // controller.init();

    // parent iframe removes preloader on this event
    $(document).trigger('onContentLoaded');
  });

  const init = () => {
    svgLoader.load();
  };
  init();  
  /* API */

  console.log('Bootstrap works');
  return instance;
};