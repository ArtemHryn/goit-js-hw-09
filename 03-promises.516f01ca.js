!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){r[e]=n},n.parcelRequired7c6=o);var u=o("iU1Pc");function a(e,n){return promise=new Promise((function(t,r){setTimeout((function(){Math.random()>.3?t({position:e,delay:n}):r({position:e,delay:n})}),n)}))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();var t=Number(n.currentTarget.elements.delay.value),r=Number(n.currentTarget.elements.step.value),o=Number(n.currentTarget.elements.amount.value);!function(n,t,r){var o=n;for(i=1;i<=r;i+=1)a(i,o).then((function(n){var t=n.position,r=n.delay;return e(u).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(r,"ms"))})).catch((function(n){var t=n.position,r=n.delay;return e(u).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(r,"ms"))})),o+=t}(t,r,o)}))}();
//# sourceMappingURL=03-promises.516f01ca.js.map
