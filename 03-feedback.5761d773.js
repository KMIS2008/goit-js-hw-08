function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function p(e,t,n){var o,i,r,a,f,u,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,r=i;return o=i=void 0,l=t,a=e.apply(r,n)}function j(e){return l=e,f=setTimeout(S,t),c?y(e):a}function O(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=r}function S(){var e=v();if(O(e))return h(e);f=setTimeout(S,function(e){var n=t-(e-u);return s?m(n,r-(e-l)):n}(e))}function h(e){return f=void 0,p&&o?y(e):(o=i=void 0,a)}function w(){var e=v(),n=O(e);if(o=arguments,i=this,u=e,n){if(void 0===f)return j(u);if(s)return f=setTimeout(S,t),y(u)}return void 0===f&&(f=setTimeout(S,t)),a}return t=b(t)||0,g(n)&&(c=!!n.leading,r=(s="maxWait"in n)?d(b(n.maxWait)||0,t):r,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=u=i=f=void 0},w.flush=function(){return void 0===f?a:h(v())},w}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};const y=document.querySelector(".feedback-form");!function(){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e)||{};y.elements.email.value=t.email||"",y.elements.message.value=t.message||""}(),y.addEventListener("input",e(t)((function(e){e.preventDefault();const t={email:y.elements.email.value,message:y.elements.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),y.addEventListener("submit",(function(e){e.preventDefault();const t=localStorage.getItem("feedback-form-state");console.log(JSON.parse(t)),y.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.5761d773.js.map
