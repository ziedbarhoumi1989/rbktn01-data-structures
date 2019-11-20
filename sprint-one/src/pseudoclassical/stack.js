var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.i = 0;
  this.storage = {};

};


Stack.prototype.push = function(value){
  	this.storage[this.i++] = value;
 }

Stack.prototype.pop = function() {
    	var tmp=this.storage[--this.i];
    	delete this.storage[this.i];
    	return tmp;
    }


Stack.prototype.size = function() {
    	return Object.keys(this.storage).length
    }