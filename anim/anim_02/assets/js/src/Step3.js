

kem8_ani_04_anim_02.Step3 = () => {

  'use strict';
  const instance = {};

  let timeline;


  const play = () => {
    timeline = new TimelineMax({
      onStart: onStartCallback,
      onComplete: onCompleteCallback
    });
  };


  const onStartCallback = () => {
    console.log('onStartCallback Step3');
  };


  const onCompleteCallback = () => {
    console.log('onCompleteCallback Step3');
  };


  const kill = () => {
    if(timeline) {
      timeline.kill();
    }
    console.log('Step3 KILLED');
  };


  /* API */
  instance.init = () => {};
  instance.play = () => {
    play();
  };
  instance.kill = () => {
    kill();
  };


  console.log('kem8_ani_04_anim_02.Step3');
  return instance;
};