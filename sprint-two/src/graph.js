

// Instantiate a new graph
var Graph = function(value) {
	this.value= value;
	this.edges=[]
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
	var tmp = new Graph(node);
	tmp.edges.push(this);
	this.edges.push(tmp);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
	if(this.find(node)===undefined) {
		return false
	}
	return true
}
Graph.prototype.find = function(node) {
	var found = undefined;
	var visited = [];
	function search(obj){
		visited.push(obj)
		if(obj.value === node){

			found = obj;
			return true;
		}
		for(var i in obj.edges)  {
			if(!visited.includes(obj.edges[i])) {
				if(search(obj.edges[i]))
					break;
			}
		}

	}
	search(this)
	return found;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	var remo=this.find(node);
	remo.edges.forEach(function(edge){
		edge.edges.splice(edge.edges.indexOf(remo),1)
	})
	

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	return this.find(fromNode).edges.includes(this.find(toNode))
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	var first = this.find(fromNode);
	var second = this.find(toNode);
	first.edges.push(second);
	second.edges.push(first);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
	var first = this.find(fromNode);
	var second = this.find(toNode);
	first.edges.splice(first.edges.indexOf(second),1);
	second.edges.splice(second.edges.indexOf(first),1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
	var visited = [];
	console.log(this)
	search(this)
	function search(obj){

		console.log('happened', obj.edges)

		visited.push(obj)
		

		for(var i in obj.edges)  {
			if(!visited.includes(obj.edges[i])) {

				search(obj.edges[i])
				cb(obj.edges[i].value)
				
			}
		}

	}

	
	
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


