var Tree = function(value) {
  var newTree = Object.create(treeMethods)
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	this.children.push(Tree(value))
};

treeMethods.contains = function(target) {
	var found= false;
	function search(obj) {
		if(obj.value===target) {
			found = true
			return true
		}
	
	
		for(var i in obj.children) {
			if(search(obj.children[i]))
				break;
		}

	}
	search(this)
	return found
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
