

kem8_ani_04_anim_02.SvgLoader = () => {

  'use strict';
  const instance = {};

  const load = () => {
    Snap.load('assets/images/anim_02.svg', function (f) {
      // Note that we traversre and change attr before SVG
      // is even added to the page
      // f.selectAll("polygon[fill='#09B39C']").attr({fill: "#bada55"});
      // g = f.select("g");
      // hideCircles(f);

      // add svg to dom
      Snap('#svg-wrapper').append(f);
      
      // internal event for this animation
      $(instance).trigger('svgLoaded');

      // parent iframe removes preloader on this event
      $(document).trigger('onContentLoaded');
    });
  };

  /* API */
  instance.init = () => {};
  instance.load = () => {
    load();
  };

  console.log('kem8_ani_04_anim_02.SvgLoader');
  return instance;
};