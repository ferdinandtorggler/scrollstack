# ScrollStack #

ScrollStack is a jQuery plugin which allows you to easily create a button which scrolls your page from one element to another when clicked repeatedly.

### Getting started

Create a button with `position: fixed;` and call scrollstack on it providing an array of selectors. Whenever the user clicks it, the page will scroll to the next selector (its element) in the array.

It will look somehting like this:
`$('#scroll-btn').scrollstack( {stack: ['#usecase', '#getting-started', '#documentation']} );`

The stack option is an array of selectors, the page will scroll to, one after another.

### Documentation

Here is a list of the possible options:

* `stack: ['#usecase', '#getting-started', '#documentation']`  An array of elements to scroll through
* `duration: 500` The duration of the animation in milliseconds
* `easing: 'swing'` 'swing' and 'linear' are supported right now
* `up: false` if true, it scrolls the site upwards

A common use case for the `up` option would be a button to scroll back to the top of the page. It would look like this: `$('#back-to-top').scrollstack( {stack: ['#top-anchor'], up: true} );`