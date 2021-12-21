// (function (app) {
//   "use strict";
//   const pageItems = {};

// })((window.app = window.app || {}));



// function clockStartup(){
    
//     console.log(myTime.getTime());
//     console.log(myTime.getHours());
//     console.log(myTime.getMinutes());
//     console.log(myTime.getSeconds());
//     console.log(myTime.getDay());
//     console.log(myTime.getMonth());
//     console.log(myTime.getDate());
//     console.log(myTime.getFullYear());
//     console.log(myTime.getTimezoneOffset());
//     console.log(myTime.getUTCHours());
//     createClock();
//   }

function showTime(){
    'use strict';
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let dayOrNight = 'AM';
    console.log('hello');

    //if statements controlling adding 0 in front, and AM or PM

    let myTime = `${hour}:${minute}:${second} ${dayOrNight}`

    document.getElementById('clock').innerText = myTime;

    //make the seconds tick...
}

// Grab an element, create an element, populate it with info, build logic behind, wire it up. 
