require('babel-polyfill'); //Allows use of ES2015+ code in transpiled file via a polyfill. Do not remove.

import navigation from './navigation';

(function() {
    navigation.init();
})();
