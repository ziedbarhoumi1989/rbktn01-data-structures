

// Instantiate a new graph
var Graph = function(value) {
	this.value = value||'head';
	this.edges = {}
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
	var newNode = new Graph(node);
	this.edges[node]=newNode;
	newNode.edges[this.value]=this;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
 	var found = false;
	this.search(node,function(){
		found = true;
	});
	return found;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	var toBeRemoved;
	this.search(node,function(obj){
		toBeRemoved = obj
	})
	for(var i in toBeRemoved.edges){
		//console.log(toBeRemoved.edges[i])
		delete toBeRemoved.edges[i].edges[toBeRemoved.value]
	}
};

Graph.prototype.search = function(node, callback) {
	var checked = {};

	function findIt(obj){
		if(!checked[obj.value]){
			if(obj.value === node){
				callback(obj)
			}else{
				checked[obj.value]=obj;
				for(var i in obj.edges){
					findIt(obj.edges[i]);
					if(obj.edges[i].value===node)
						break;
				}
			}
		}
	}
	findIt(this);
}

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	var checkEdges;
	this.search(fromNode, function(obj){
		checkEdges = obj;
	});
	if(checkEdges.edges[toNode])
		return true
	return false
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	this.search(fromNode, function(obj){
		fromNode = obj;
	});
	this.search(toNode, function(obj){
		toNode = obj;
	});
	fromNode.edges[toNode.value] = toNode;
	toNode.edges[fromNode.value] = fromNode;
	
	
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
	this.search(fromNode, function(obj){
		fromNode = obj;
	});
	var tmp = fromNode.edges[toNode];
	delete fromNode.edges[toNode];
	delete tmp.edges[fromNode.value];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
	var checked = {};
	function findIt(obj){
		if(!checked[obj.value]){		
				cb(obj)
				checked[obj.value]=obj;
				for(var i in obj.edges){
					findIt(obj.edges[i]);
			}
		}
	}
	findIt(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


