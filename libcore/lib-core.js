(function(){

 // Global declarations
 const log = console.log;
 

 // ctor
 function libcore(){
 	// members variables
 }

 // init object
 libcore.prototype.init = function() {
  log("init");
  return this;
 };

 // destroy object
 libcore.prototype.done = function() {
  log("done");
  return this;
 };

 module.exports = new libcore();

}());

 