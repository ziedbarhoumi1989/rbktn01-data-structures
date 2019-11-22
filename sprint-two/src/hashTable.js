

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.visited = [];
  
};



HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if(this._storage.get(index)===undefined || this.visited.includes(k)) {
    this._storage.set(index,LinkedList())
  }
  this._storage.get(index).addToTail(v)
  this.visited.push(k)
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(!this._storage.get(index)) {
    return undefined
  }
  this.visited.splice(this.visited.indexOf(k),1)
    return this._storage.get(index).removeHead()
  
    	
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index,undefined)
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


