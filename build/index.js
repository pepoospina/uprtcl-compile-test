"use strict";
exports.__esModule = true;
var evees_1 = require("@uprtcl/evees");
var store_1 = require("./stubs/store");
console.log('Hello world');
var store = new store_1.StoreStub();
var a = new evees_1.CondensateCommits(store, []);
console.log(a);
//# sourceMappingURL=index.js.map