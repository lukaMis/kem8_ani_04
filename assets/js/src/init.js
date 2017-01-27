
(function() {
  
  'use strict';
  $(document).one('i18nComplete', init);
  
  let $navigationButtons = $('.navigationButton').on('click', onNavClickHandler);
  let $openMenuButton = $('#buttonOffCanvasWrapper').on('click', _openMenu);

  let $iFrame = $('#viewContent iframe');
  let $viewContent = $('#viewContent');

  let activeTextData = '';

  let menuShouldOpen = true;

  let animToLoad = parseInt(getParameterByName('ani'));


  function init(e) {
    FastClick.attach(document.body);
    console.log('translation done');

    _useParamToLoadAni();
    $('body').removeClass('loading');
  };

  function _openMenu(e) {
    menuShouldOpen = !menuShouldOpen;
    
    if(menuShouldOpen) {
      _handleOpenMenu();
    } else {
      _handleCloseMenu();
    }
  };

  function _handleOpenMenu() {
    $openMenuButton.addClass('active');
    $viewContent.addClass('active');
    $('.icon-annotation').hide();
  };

  function _handleCloseMenu() {
    $openMenuButton.removeClass('active');
    $viewContent.removeClass('active');
    setTimeout(function() {
      $('.icon-annotation').show();
    }, 250);
  };

  function onNavClickHandler(e) {
    let _id = e.target.id.slice(-2);

    updateSelectedNavItem(_id);

    activeTextData = i18n.t('anim_' + _id, { returnObjectTrees: true });
    loadContent(_id);
  };

  function loadContent(id) {
    $iFrame.one('load', iFrameLoaded);
    $iFrame[0].src = 'anim/anim_' + id;

    closeNavMenu();
  };

  function closeNavMenu() {
    menuShouldOpen = !menuShouldOpen;
    _handleCloseMenu();
  };

  function iFrameLoaded(e) {
    console.log('iFrameLoaded');
    // $('.wrapperContent').addClass('active');

    // menuShouldOpen = !menuShouldOpen;
    // _handleCloseMenu();
  };


  function updateSelectedNavItem(id) {
    $navigationButtons.removeClass('active');
    $($navigationButtons[id.slice(-1)]).addClass('active');
  };


  // This gets called from loaded game to get data for initialization
  window.getTextData = function() {
    return activeTextData;
  };



  function _useParamToLoadAni() {
    if( isNaN(animToLoad) ) {
      animToLoad = 0;
    }
    animToLoad = '0' + animToLoad;

    updateSelectedNavItem(animToLoad);

    activeTextData = i18n.t('anim_' + animToLoad, { returnObjectTrees: true });
    loadContent(animToLoad);
  };

  function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
  }

})();