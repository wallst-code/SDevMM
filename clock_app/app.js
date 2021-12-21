// (function (app) {
//   "use strict";
//   const pageItems = {};

// })((window.app = window.app || {}));
'use strict';
const pageItems = {};
const myTime = new Date();

function clockStartup(){
    
    console.log(myTime.getTime());
    console.log(myTime.getHours());
    console.log(myTime.getMinutes());
    console.log(myTime.getSeconds());
    console.log(myTime.getDay());
    console.log(myTime.getMonth());
    console.log(myTime.getDate());
    console.log(myTime.getFullYear());
    console.log(myTime.getTimezoneOffset());
    console.log(myTime.getUTCHours());
    createClock();
  }

function createClock(){
    // pageItems.clock = document.getElementById('clock');
    pageItems.timeBlock = document.getElementById('timeBlock');

    pageItems.timeBlock.addEventListener('onload', grabTime);
    
}

function grabTime(){
    const p = document.createElement('p');
    p.innerText = pageItems.myTime.getTime();
    pageItems.timeBlock.appendChild(p);

}
//Does not work
//TODO 
