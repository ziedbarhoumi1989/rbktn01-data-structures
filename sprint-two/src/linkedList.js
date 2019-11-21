var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if(this.head === null && this.tail === null){
      this.tail = Node(value);
      this.head = this.tail;
    }else{
      this.tail.next = Node(value);
      this.tail = this.tail.next; 
    }

  };

  list.removeHead = function() {
    var a = this.head.value;
    this.head = this.head.next;
    return a;
  };

  list.contains = function(target) {
    var bool= false
    function search(obj) {
      if(obj.value === target) {
        bool = true
      }
      else if(obj.next !== null){
        search(obj.next)
      }


    }
    search(this.head)
    return bool
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
