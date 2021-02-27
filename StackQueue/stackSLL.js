class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    //get the top node
    peek(){
        // if(this.isEmpty()){
        //     return null;
        // }
        return this.top;
    }
    //add a node to the top
    push(val){
        var newNode = new Node(val);
        if(this.isEmpty()){
            this.top = newNode;
            this.bottom = newNode;
        }
        else{
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
        return this;
    }
    //remove a node from the top
    pop(){
        if(this.isEmpty()){
            return null;
        }
        else{
            this.top = this.top.next;
            this.length--;
            return this;
        }
    }
    //check if the stack is empty
    isEmpty(){
        return this.length === 0;
    }
}

const myStack = new Stack();
myStack.push("Discord");
myStack.push("Udemy");
myStack.push("Google");
myStack.push("Ling");
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.peek();
console.log(myStack);