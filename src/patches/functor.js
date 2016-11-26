/**
 * Created by brian on 11/26/16.
 *
 * Ripped directly from the V3 source:
 * https://github.com/d3/d3/blob/v3.5.17/src/core/functor.js
 *
 * todo: There doesn't seem to be much benefit to removing this function.
 * Maybe  permanently moving it to utils because it is heavily used throughout
 * the codebase
 */
function d3_functor(v) {
  return typeof v === "function" ? v : function() { return v; };
}

d3.functor = d3_functor;