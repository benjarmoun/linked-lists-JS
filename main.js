// node class

class Node{
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}
  

// linked list class
class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
}
  
// insert at last function
function insertLast(value) {
    this.length++;
    let newNode = new Node(value);
  
    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
      return newNode;
    }
    this.head = this.tail = newNode;
    return newNode;
}
  
  
// printing the linked list
function print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
}

// test 
// let node = insertLast("1");
// let node2 = insertLast("2");
// let node3 = insertLast("3");
// console.log(node);



// remove last node
function removeLast() {
  if (this.tail) {
    this.length--;

    const tailNode = this.tail;

    // search for the node before tail
    let currentNode = this.head;

    while (currentNode.next != tailNode) {
      currentNode = currentNode.next;
    }

    const beforeTail = currentNode;
    this.tail = beforeTail;
    this.tail.next = null;

    return tailNode;
  }
  return undefined;
}

function insertHead(value) {
  this.length++;
  let newNode = new Node(value);
  
  if (this.head) {
    newNode.next = this.head;
    this.head = newNode;
    return newNode;
  }

  this.head = this.tail = newNode;
  return newNode;
}

function removeHead() {
  if (this.head) {
    this.length--;
    const removedNode = this.head;
    this.head = this.head.next;
    return removedNode;
  }
  return undefined;
}

function insertIndex(value, index){
  if(index > this.lenght){
    throw new error('index is greater than the list lenght');
  }else 
  if(index === 0){
    insertHead(value);
  }else{
    let currentNode = this.head;
    let previousNode = null;
    for(let i=0 ; i<index ; i++){
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    const newNode = new Node(value);
    previousNode.next = newNode;
    newNode.next = currentNode
    this.lenght++
  }
  



}








// test
let linkedList = new LinkedList();
linkedList=insertLast(7);
linkedList=insertLast(true);
linkedList=insertLast(20);
linkedList=removeLast();
linkedList=insertHead(11);
linkedList=insertHead(2);
linkedList=removeHead();
linkedList=insertIndex(10, 2)

linkedList=print();
// console.log(node);