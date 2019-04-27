"use strict";

// extend Franz class
module.exports = Franz => class Auwebmail extends Franz {
  constructor(...args) {
    let _temp;
    return _temp = super(...args), this.events = {
      'will-navigate': '_forceRedirectToLogin',
      'did-navigate' : '_forceRedirectToLogin',
    }, _temp;
  }

  _forceRedirectToLogin(event) {
    // replace (expired|login)-guide pages to 'real' login page
    if (event.url) {
      const skipPages = [
        'https://mail.ezweb.ne.jp/g01b/index.php/default/index/sessiontimeout',
        'https://www.au.com/mobile/service/webmail/login/',
      ];
      if (skipPages.includes(event.url)) {
        this.loadURL('https://mail.ezweb.ne.jp/login/');
      }
    }
  }
};
