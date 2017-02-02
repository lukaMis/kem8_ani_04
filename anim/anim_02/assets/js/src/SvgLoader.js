

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

      setDefaultVisibilityOfElements(f);

      // add svg to dom
      Snap('#svg-wrapper').append(f);
      
      // internal event for this animation
      $(instance).trigger('svgLoaded');

      // parent iframe removes preloader on this event
      $(document).trigger('onContentLoaded');
    });
  };

  const setDefaultVisibilityOfElements = (f) => {
    f.select('#circle-0').attr({opacity: 0});
    f.select('#circle-1').attr({opacity: 0});
    f.select('#circle-2').attr({opacity: 0});
    f.select('#stick').attr({opacity: 0});
    f.select('#plateSalt').attr({opacity: 0});
    f.select('#plate').attr({opacity: 0});
  };

  /* API */
  instance.init = () => {};
  instance.load = () => {
    load();
  };

  console.log('kem8_ani_04_anim_02.SvgLoader');
  return instance;
};