var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var q = {
  	head:0,
  	tail:0,
  	storage:{}
  }
  return _.extend(q,queueMethods)
};

var queueMethods = {
	enqueue: function(value) {
		this.storage[this.tail++] = value
	},
	dequeue: function() {
		tmp=this.storage[this.head]
		delete this.storage[this.head++]
		if(this.head > this.tail) {
			this.head=0;
			this.tail=0;
			return 'empty'
		}
		return tmp;
	},
	size: function() {
		return Object.keys(this.storage).length
	}
};

