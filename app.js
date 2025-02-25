////////// Q1 ////////////

function reversedArray(){
const stack = [];

for (let i = 0; i < array.length; i++){
    stack.push(array[i]);
}

for (let i = 0; i<array.length; i++){
    array[i]=(stack.pop());
}

return array;
}

const array = [10, 20, 30, 40, 50];
console.log(reversedArray(array));


///////// Q2 //////////

class QueueUsingStacks {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(value) {
        this.stack1.push(value);
    }

    dequeue() {
        if (this.stack2.length === 0) {
            if (this.stack1.length === 0) {
                console.log("Queue is empty");
                return null;
            }
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }

    front() {
        if (this.stack2.length === 0) {
            if (this.stack1.length === 0) {
                console.log("Queue is empty");
                return null;
            }
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2[this.stack2.length - 1];
    }

    isEmpty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }
}

const queue = new QueueUsingStacks();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); 
console.log(queue.front());   
console.log(queue.dequeue()); 
console.log(queue.dequeue()); 
console.log(queue.dequeue()); 

//////// Q3 ///////////
function sumArray(arr, index = 0) {
    if (index === arr.length) return 0;
    return arr[index] + sumArray(arr, index + 1);
}

console.log(sumArray([1, 2, 3, 4, 5])); 


////////// Q4 ///////////
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function reverseLinkedList(head) {
    let prev = null;
    let current = head;

    while (current !== null) {
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }

    return prev;
}

function printList(head) {
    let current = head;
    let result = [];
    while (current !== null) {
        result.push(current.value);
        current = current.next;
    }
    console.log(result.join(" -> "));
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

printList(head); 
head = reverseLinkedList(head);
printList(head); 

/////////////////////////////////////////Q5

function deleteMiddleNode(head) {
    if (!head || !head.next) return null; 

    let slow = head;
    let fast = head;
    let prev = null;

    while (fast !== null && fast.next !== null) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    if (prev !== null) {
        prev.next = slow.next; 
    }

    return head;
}

let head2 = new ListNode(1);
head2.next = new ListNode(2);
head2.next.next = new ListNode(3);
head2.next.next.next = new ListNode(4);
head2.next.next.next.next = new ListNode(5);

printList(head2); 
head2 = deleteMiddleNode(head2);
printList(head2); 


/////////// Extra ////////////

function isBalanced(exp) {
    const stack = [];
    const bracketPairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of exp) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0 || stack.pop() !== bracketPairs[char]) {
                return "Not Balanced";
            }
        }
    }

    return stack.length === 0 ? "Balanced" : "Not Balanced";
}

// Example usage:
console.log(isBalanced("[()]{}{[()()]()}")); 
console.log(isBalanced("[(])"));          
console.log(isBalanced("{[()]}"));         
console.log(isBalanced("{[(])}"));          
