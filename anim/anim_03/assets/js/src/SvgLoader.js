

kem8_ani_04_anim_03.SvgLoader = () => {

  'use strict';
  const instance = {};


  const load = () => {
    Snap.load('assets/images/anim_03.svg', (f) => {
      console.log('snap has loaded svg fragment');

      // add svg to dom
      Snap('#svg-wrapper').append(f);

      // internal event for this animation
      $(instance).trigger('svgLoaded');
    });
  };

  
  /* API */
  instance.init = () => {};
  instance.load = () => {
    load();
  };
  

  console.log('SvgLoader works');
  return instance;
};