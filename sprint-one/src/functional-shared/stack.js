var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {
  	i:0,
  	storage:{}
  };
  _.extend(stack,stackMethods)
  return stack

};

var stackMethods = {
	push :function(value) {
	this.storage[this.i++] = value
    },
    pop: function() {
    	var tmp=this.storage[--this.i]
    	delete this.storage[this.i]
    	return tmp
    },
    size: function() {
    	return Object.keys(this.storage).length
    }
};



