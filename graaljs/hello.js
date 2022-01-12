const addonCpp = require('./build/Release/addon.node');
console.log(addonCpp.greet());

Java.addToClasspath('./Addon.class');
var addonJava = new (Java.type('Addon'))();
console.log(addonJava.greet());