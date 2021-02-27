class Stack{
    constructor(){
        this.array = [];
    }
    //first in last out, last in first out, so the first one will be the last of the array.
    peek(){
        return this.array[this.array.length-1];
    }
    push(val){
        this.array.push(val);
        return this;
    }
    pop(){
        this.array.pop();
        return this;
    }
    isEmpty(){
        return this.array.length == 0;
    }
}

const myStack = new Stack();
myStack.push("Discord");
myStack.push("Udemy");
myStack.push("Google");
myStack.push("Ling");
myStack.pop();
myStack.peek();
console.log(myStack);