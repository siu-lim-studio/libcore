(function(){

 // Global declarations
 const log = console.log;
 

 // ctor
 function libcore(){
 	// members variables
  this.id = 0;
 }
 
 libcore.prototype = {
   init : function(){
    log("init");
    return this;
   },
  done : function(){
    log("done");
    return this;
   }
 }
 module.exports = new libcore();
}());

 
