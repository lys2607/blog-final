(function (app) {
    class Helpers {
        static getRandomId() {
            return Math.floor(Math.random() * 10000);
        }
        static getHash(str) {
            if(!str.includes('#')) return;
            let divided = str.split('#');
            return divided.pop();
        }
        static getBaseUrl()
        {
            return window.location.href.split('#')[0];
        }
    }
    app.Helpers = Helpers;
})(App);