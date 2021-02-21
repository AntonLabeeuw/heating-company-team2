$(document).ready(function () {
  $(".button-collapse").sideNav(
    {
      menuWidth: 325, // Default is 240
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
  $('.dropdown-button').dropdown({
   inDuration: 300,
   outDuration: 225,
   constrainWidth: true, // Does not change width of dropdown to that of the activator
   hover: true, // Activate on hover
   gutter: 0, // Spacing from edge
   belowOrigin: true, // Displays dropdown below the button
   alignment: 'left', // Displays dropdown with edge aligned to the left of button
   stopPropagation: false, // Stops event propagation
   coverTrigger: false
 }
 );
});

