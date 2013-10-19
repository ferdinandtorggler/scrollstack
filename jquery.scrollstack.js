; (function ($, window, document) {

  var currentScroll = $(window).scrollTop(),
      defaults = {
        stack: [],
        up: false,
        duration: 500,
        easing: 'swing'
      };

  /*
   * Returns the Y-position of the next element on the stack.
   * By default, this is the one below the current, but if
   * direction_up is set to true, it is the previous element.
   */
  function getNextScrollPosition(targets, direction_up) {
    var targetScroll,
        i;

    // UP
    if (direction_up) {
      for (i = targets.length - 1; i >= 0; i--) {
        targetScroll = $(targets[i]).offset().top;
        if (targetScroll < currentScroll) {
          return targetScroll;
        }
      }
      return 0;
    }

    // DOWN
    for (i = 0; i <= targets.length - 1; i++) {
      targetScroll = $(targets[i]).offset().top;
      if (targetScroll > currentScroll) {
        return targetScroll;
      }
    }
    return $(document).height();
  }

  /*
   * Scrolls the document to a certain position.
   * The duration and the easing of the animation
   * have to be specified.
   */
  function animateScroll (position, duration, easing) {
    $('html, body').animate({
      scrollTop: position
    }, duration, easing);
  }

  /*
   * Sets up the necessary listeners for scrolling and clicking
   */
  function Plugin(element, options) {
    this.options = $.extend({}, defaults, options);
    var that = this;

    // Update current position on scroll
    $(document).scroll(function () {
      currentScroll = $(window).scrollTop();
    });

    element.click(function (e) {
      animateScroll(getNextScrollPosition(that.options.stack, that.options.up), that.options.duration, that.options.easing);
      e.preventDefault();
    });
  }


  $.fn.scrollstack = function (options) {
    Plugin(this, options);
    return this;
  };


}(jQuery, this, document));