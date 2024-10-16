
const f = function() {
    console.log("This is function f inside module1.js");
  };
  const x = function() {
    console.log("This is function x inside module1.js");
  };
  // const P = 3.14;
  
  // module.exports = f;
  // module.exports.f = f;
  module.exports.x = x;
  // module.exports.P = P;
  // module.exports = { f, x, P };