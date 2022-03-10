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
  
  // insert function
function insert(value) {
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
  
  //test 
  // let node = insert("1");
  // let node2 = insert("2");
  // let node3 = insert("3");
  // console.log(node);
  
  
const linkedList = new LinkedList();
linkedList.insert(7);
linkedList.insert(true);
linkedList.insert(20);
linkedList.print();
