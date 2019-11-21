

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var a = this._storage.get(index)
  if(!a) {
  	this._storage.set(index,[v,a])
  }
  else
  this._storage.set(index,v)
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
   var a = this._storage.get(index)
   if(Array.isArray(a)) {
   	var b=a.pop()
   	if()
   }
   return a
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index,undefined)
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


