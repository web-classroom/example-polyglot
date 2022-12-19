const addonCpp = require('./build/Release/addon.node');
console.log(addonCpp.greet());

Java.addToClasspath('./Addon.class');
var addonJava = new (Java.type('Addon'))();
console.log(addonJava.greet());

var pythonEval = Polyglot.eval("python", "'Hello from Python!'");
console.log(pythonEval);

var rubyEval = Polyglot.eval("ruby", "'Hello from Ruby!'");
console.log(rubyEval);