/**
 * Ripped directly from the original source code:
 * https://github.com/d3/d3/blob/v3.5.17/src/core/rebind.js
 *
 * This was just done as a quick patch to get things working quickly for v4
 *
 * fixme: look for alternative/replacement implementations
 */
// Copies a variable number of methods from source to target.
rebind = function(target, source) {
    var i = 1, n = arguments.length, method;
    while (++i < n) target[method = arguments[i]] = d3_rebind(target, source, source[method]);
    return target;
};

// Method is assumed to be a standard D3 getter-setter:
// If passed with no arguments, gets the value.
// If passed with arguments, sets the value and returns the target.
function d3_rebind(target, source, method) {
    return function() {
        var value = method.apply(source, arguments);
        return value === source ? target : value;
    };
}

d3.rebind = rebind;