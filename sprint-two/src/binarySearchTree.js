class BinarySearchTree{

	constructor(value){
		this.value = value;
		this.left = null;
		this.right = null;
	}

	insert(value){
		if(this.value > value){
			if(this.left===null)
				this.left = new BinarySearchTree(value)
			else
			 	this.left.insert(value)
		}else if(this.value < value){
			if( this.right ===null)
				this.right = new BinarySearchTree(value)
			else 
				this.right.insert(value)
		}
	}

	contains(value){
		if(this.value === value) {
			return true
		}
		 if(this.value<value && this.right!==null) {
		 	return this.right.contains(value)
		 }
		 if(this.value>value && this.left!==null) {
		 	return this.left.contains(value)
		 }
		 return false
	}

	depthFirstLog(cb){
		cb(this.value);
		if(this.left!==null)
			this.left.depthFirstLog(cb)
		if(this.right!==null)
			this.right.depthFirstLog(cb)
		
	}

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
