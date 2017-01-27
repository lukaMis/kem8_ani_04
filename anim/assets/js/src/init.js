
(function() {
  'use strict';

  $(document).one('onContentLoaded', onContentLoadedHandler);
  console.log('Shared');

  const TEXT_DATA = window.parent.getTextData();

  let $captions = $('.caption');
  let numOfCaptions = $captions.length;

  let $stepsWrapper = $('#steps-wrapper');

  let currentStep = 1;

  Stepper.setMaxSteps(numOfCaptions);
  $(Stepper).on('stepperClicked', stepperHandler);


  _fillInTheText();


  function _fillInTheText() {
    $('#exerciseTitle').html( TEXT_DATA.title[0]);
    $('#animTitle').html( TEXT_DATA.title[1]);

    $('#reaction-00_00').html( TEXT_DATA['reaction-00'][0]);
    $('#reaction-00_01').html( TEXT_DATA['reaction-00'][1]);

    $('#reaction-01_00').html( TEXT_DATA['reaction-01'][0]);
    $('#reaction-01_01').html( TEXT_DATA['reaction-01'][1]);

    for (let i = 0; i < numOfCaptions; i++) {
      $($captions[i]).html( TEXT_DATA.steps[i] );
    }
  };


  function stepperHandler (e, data) {
    if(data.direction === 'back') {
      currentStep--;
    }
    else {
      currentStep++;
    }
    Stepper.setCurrentStep(currentStep);
    _handleStepPosition(currentStep);
    $(document).trigger('onStepChange', {
      currentStep: currentStep
    });
  };


  function _handleStepPosition(num) {
    $stepsWrapper.removeClass().addClass( 'step-0' + (num - 1)  );
    console.log('SHARED');
  };


  // $('body').removeClass('loading');
  function onContentLoadedHandler(e) {
    $('body').removeClass('loading');
    // window.parent.$('body').removeClass('loading');
  };

})();