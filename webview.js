'use strict';

const path = require('path');

module.exports = Franz => {
  function getMessages() {
    let directCount   = 0;
    let indirectCount = 0;

    const elements = document.querySelectorAll('a > span.unread > strong');

    Array.prototype.forEach.call(elements, item => {
      let count  = 0;

      if (item.innerText) {
        count = parseInt(item.innerText, 10);
      }

      directCount += count;
    });

    Franz.setBadge(directCount, indirectCount);
  }

  Franz.injectCSS(path.join(__dirname, 'service.css'));
  Franz.loop(getMessages);
};
