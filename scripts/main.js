"use strict";console.log("Welcome to InTuneTo!"),$(".increase").fitText(.9,{minFontSize:"14px",maxFontSize:"48px"}),$(".clicker").on("click",function(){$(".card").toggleClass("flipped"),$(".clicker").toggleClass("hidden")}),$(".card").on("click",function(){$(".card").toggleClass("flipped"),$(".clicker").toggleClass("hidden")});