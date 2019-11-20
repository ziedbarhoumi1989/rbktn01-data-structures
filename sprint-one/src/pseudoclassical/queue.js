var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.head = 0;
  this.tail = 0;
  this.storage = {};

};

Queue.prototype.enqueue = function(value) {
	this.storage[this.tail++] = value
}

Queue.prototype.dequeue = function() {
	tmp=this.storage[this.head]
	delete this.storage[this.head++]
	if(this.head > this.tail) {
		this.head=0;
		this.tail=0;
		return 'empty'
	}
	return tmp;
}

Queue.prototype.size = function() {
	return Object.keys(this.storage).length
}