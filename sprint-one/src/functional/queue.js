var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var tail = 0;
  var head = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[tail++]=value;
  };

  someInstance.dequeue = function() {
    var temp = storage[head];
    delete storage[head++];
    if(head>tail){
      return 'empty'
    }
    return temp;
  };

  someInstance.size = function() {
    return Object.keys(storage).length
  };

  return someInstance;
};
