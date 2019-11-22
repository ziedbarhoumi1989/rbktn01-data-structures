

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};



HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(!this._storage.get(index))
    this._storage.set(index, []);
  if(!this.retrieve(k))
    this._storage.get(index).push([k, v])
  else{
    var arr = this._storage.get(index);
    for(var i in arr){
      if(arr[i][0]===k)
        arr[i][1] = v;
      }
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(index);
  for(var i in arr){
    if(arr[i][0]===k)
      return arr[i][1]
  }
  return undefined
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(index);
  for(var i in arr){
    if(arr[i][0]===k)
      arr.splice(i,1)
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


