'use strict';

const assert = require('assert');

const assertProxy = (condition, message) => {
    try {
        assert(condition, message);
    }
    catch (e) {
        throw e;
    }
};

const assertProxySlightlyMinified = (condition, message) => {
    try { assert(condition, message);
    }
    catch (e) {
        throw e;
    }
};

// Now run tests

console.log('Call assert proxy with generous whitespace');
try {
    assertProxy(0);
    console.error(`assertProxy(0); failed to cause an exception`);
}
catch (e) {
    console.log(`assertProxy(0); generated exception: ${e}`);
}


console.log('Call assert proxy with slightly minified whitespace');
try {
    assertProxySlightlyMinified(0);
    console.error(`assertProxySlightlyMinified(0); failed to cause an exception`);
}
catch (e) {
    console.log(`assertProxySlightlyMinified(0); generated exception: ${e}`);
}

console.log('Finished tests');

