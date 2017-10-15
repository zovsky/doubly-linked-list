const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        if (this.length) {
            var temp = new Node(data);
            temp.prev = this._tail;
            this._tail.next = temp;
            this._tail = temp;
        } else {
            this._tail = new Node(data);
            this._head = this._tail;
        }
        this.length++;
        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        var i=0;
        var current = this._head;
        while (i<index) {
            current = current.next;
            i++;
        }
        return current.data;
    }

    insertAt(index, data) {
        var newNode = new Node(data);
        var i=0;
        var current = this._head;
        while (i<index-1) {
            current = current.next;
            i++;
        }

        var temp1 = current;
        var temp2 = current.next;
        current = newNode;
        temp1.next = current;
        temp2.prev = current;
        current.prev = temp1;
        current.next = temp2;
        return this;
    }

    isEmpty() {
        return(!this.length);
    }

    clear() {
        this._head.data = null;
        this._tail.data = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        var i=0;
        var current = this._head;
        if (index == 0) {
            this._head = current.next;
        } else {
            while (i<index) {
                current = current.next;
                i++;
            }

            var temp1 = current.prev;
            var temp2 = current.next;
            temp1.next = current.next;
            temp2.prev = current.prev;
        }
        return this;
    }

    reverse() {
        var current = this._head;
        while (current != null) {
            var temp = current.next;
            current.next = current.prev;
            current.prev = temp;              
            current = temp;
        }
        temp = this._head;
        this._head = this._tail;
        this._tail = temp;
        return this;
    }

    indexOf(data) {
        var i=0;
        var current = this._head;
            while (i<this.length) {
                if (current.data == data) {
                    return i;
                }
                current = current.next;
                i++;
            }
        return -1;
    }
}

module.exports = LinkedList;
