import Node from "./node.mjs";

class LinkedList {

    constructor() {
        this.head = new Node();
    }

    findLastNode() {
        let curr = this.head;
        while (curr.next != null) {
            curr = curr.next;
        }
        return curr;
    }

    append(value) {
        let lastNode = this.tail();
        if (lastNode.value === null) {
            lastNode.value = value;
        } else {
            lastNode.next = new Node(value);
        }
    }

    prepend(value) {
        const newHead = new Node(value);
        newHead.next = this.head;
        this.head = newHead;
    }

    size() {
        let curr = this.head;
        let counter = 0;
        while (curr != null) {
            if (curr.value != null) counter++;
            curr = curr.next;
        }
        return counter;
    }

    head() {
        return this.head;
    }

    tail() {
        let curr = this.head;
        while (curr.next != null) {
            curr = curr.next;
        }
        return curr;
    }

    at(index) {
        let counter = 0;
        let curr = this.head;

        while (curr != null) {
            if (counter === index) return curr;
            counter++;
            curr=curr.next;
        }
        return null;
    }

    pop() {
        let curr = this.head;
        const length = this.size();
        for (let i = 0; i < length - 2; i++) {
            curr = curr.next;
        } 
        curr.next = null;
        return this
    }

    contains(value) {
        let curr = this.head;
        while (curr != null) {
            if (curr.value === value) return true;
            curr = curr.next;
        }
        return false;
    }

    find(value) {
        let curr = this.head;
        let counter = 0;
        while (curr != null) {
            if (curr.value === value) return counter;
            counter++;
            curr = curr.next;
        }
        return null;
    }

    toString() {
        let curr = this.head;
        let output = '';

        while (curr != null && curr.value != null) {
            output += `( ${curr.value} ) -> `
            curr = curr.next;
        }
        output += 'null';
        return output;
    }
}

export default LinkedList;
