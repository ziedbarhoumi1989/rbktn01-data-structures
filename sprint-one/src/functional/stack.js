var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var head = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    storage[head++]=value;
  };

  someInstance.pop = function() {
    var last = storage[--head];
    delete storage[head];
    return last;

  };

  someInstance.size = function() {
    return Object.keys(storage).length
  };

  return someInstance;
};
