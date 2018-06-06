'use strict';

module.exports = Franz => {
	return class WantedlyChat extends Franz {
		constructor(...args) {
			var _temp;
			
			return _temp = super(...args), this.events = {
				'console-message': '_consoleMessage'

			}, _temp;
		}
		
		_consoleMessage(event) {
			if (event.message.indexOf("electron-safe-ipc:///message") >= 0) {
				if (event.message.indexOf("channel=signIn") >= 0) {
					event.target.src = 'https://m.wantedly.com/';
				}
			}
		}
	};
};
