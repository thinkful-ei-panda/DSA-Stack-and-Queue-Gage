class _node {
  constructor(data,next){
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor(){
    this.top = null;
  }
  push(data) { 
    /*If the stack is empty. then the node will be the top
      if the stack */
    if(this.top === null){
      this.top = new _node(data,null);
      return this.top;
    }
    /*If the stack already has something then
      create a new node, 
      add data to the new node, and have the pointer point to the 
      top */
    const node = new _node(data, this.top);
    this.top = node;
  }
  pop(){
    /*In order to remove the top of stack, 
       you have to point, the pointer to the next item and 
       that next item becomes the top of the stack*/
    const node =this.top;
    this.top = node.next;
    return node.data;
  }
}

module.exports=Stack;