;(function($, window, document, undefined) {

  var pluginName = 'scrollstack',
    currentScroll = $(window).scrollTop()
    defaults = {
      stack: [],
      up: false,
      duration: 500,
      easing: 'swing',
    };

  /*
   * Sets up the necessary listeners for scrolling and clicking
   */
  function Plugin(element, options) {
    this.options = $.extend({}, defaults, options);
    var that = this;

    // Update current position on scroll
    $(document).scroll(function (e) {
      currentScroll = $(window).scrollTop()
    });

    element.click(function (e) {
      animateScroll(getNextScrollPosition(that.options.stack, that.options.up), that.options.duration, that.options.easing);
      e.preventDefault();
    });
  }

  /*
   * Returns the Y-position of the next element on the stack.
   * By default, this is the one below the current, but if
   * direction_up is set to true, it is the previous element.
   */
  function getNextScrollPosition(targets, direction_up) {
    var targetScroll;

    // UP
    if (direction_up) {
      for (var i = targets.length - 1; i >= 0; i--) {
        targetScroll = $(targets[i]).offset().top;
        if(targetScroll < currentScroll)
          return targetScroll;
      }
      return 0;

    // DOWN
    } else {
      for (var i = 0; i <= targets.length - 1; i++) {
        targetScroll = $(targets[i]).offset().top;
        if(targetScroll > currentScroll)
          return targetScroll;
      }
      return $(document).height();
    }
  }

  /*
   * Scrolls the document to a certain position.
   * The duration and the easing of the animation
   * have to be specified.
   */
  function animateScroll (position, duration, easing) {
    $('html, body').animate({
      scrollTop: position
    }, duration, easing)
  }


  $.fn.scrollstack = function (options) {
    Plugin(this, options);
    return this;
  };


}(jQuery, this, document));