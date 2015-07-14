/* jshint devel:true */
'use strict';

console.log('Welcome to InTuneTo!');

// using fit text to scale font 
$('.increase').fitText(0.9, { minFontSize: '14px', maxFontSize: '48px' });


// flip the shit on the about page
// by clicking text or the card itself
$('.clicker').on('click', function () {
  $('.card').toggleClass('flipped');
  $('.clicker').toggleClass('hidden');
});

$('.card').on('click', function () {
  $('.card').toggleClass('flipped');
  $('.clicker').toggleClass('hidden');
});