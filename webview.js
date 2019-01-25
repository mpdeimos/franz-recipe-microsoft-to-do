"use strict";

const path = require('path');

module.exports = Franz => {
  function updateBadge() {
    let myDayOpen = 0;
    const myDay = document.querySelector(".todayToolbar-count");
    if (myDay) {
      myDayOpen = parseInt(myDay.innerHTML, 10);
    }

    Franz.setBadge(myDayOpen); 
  }

  Franz.injectCSS(path.join(__dirname, 'service.css'));
  Franz.loop(updateBadge);
};