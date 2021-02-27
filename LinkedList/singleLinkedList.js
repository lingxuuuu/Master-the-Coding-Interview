
const basket = ["apple", "grapes", "pears"];

/*
apple
8947 --> grapes
          8742 --> pears
                    372 --> null */

// Create a linked list 10->5->16

// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

// Creat LinkedList Class constructor

class SLLNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
class LinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;  
        this.length = 1;
    }

    prepend(value){
        let newNode = new SLLNode(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    append(value){
        let newNode = new SLLNode(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    insert(index, value){
        if(index >= this.length){
            return null;
        }
        const newNode = new SLLNode(value);
        const leader = this.traverseToIndex(index-1);
        newNode.next = leader.next;
        leader.next = newNode;
        this.length++
        return this.printList();
    }

    traverseToIndex(index){ //***find the index node***
        let counter = 0;
        let currentNode = this.head;
        while(counter!==index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    remove(index){
        // //check index
        // if(index <= 0 || index >this.length){
        //     return false;
        // }
        if(index == 0){
            this.head = this.head.next;
            this.length --;
            return this;
        }
        let leader = this.traverseToIndex(index-1);
        let unWantedNode = leader.next;
        leader.next = unWantedNode.next;
        this.length--;
        return this;
    }

    printList(){
        const array =[];
        let currentNode = this.head;
        while(currentNode){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

}

// 1 10 99 5 16 

let myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2,99);
myLinkedList.insert(5,88);
myLinkedList.remove(1);

console.log(myLinkedList);

