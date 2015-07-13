/* jshint devel:true */
'use strict';

console.log('Welcome to InTuneTo!');

$('#poo').fitText(0.3, { minFontSize: '20px', maxFontSize: '100px' });
$('#poo2').fitText(0.7, { minFontSize: '14px', maxFontSize: '60px' });
$('.increase').fitText(0.5, { minFontSize: '14px', maxFontSize: '48px' });

$('.clicker').on('click', function () {
  $('.card').toggleClass('flipped');
  $('.clicker').toggleClass('hidden');
});