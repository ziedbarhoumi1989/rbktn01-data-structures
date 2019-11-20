class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.i = 0;
  	this.storage = {};
  }

	push(value){
  	this.storage[this.i++] = value;
 }

 	pop() {
    	var tmp=this.storage[--this.i];
    	delete this.storage[this.i];
    	return tmp;
    }


	size() {
    	return Object.keys(this.storage).length
    }

}