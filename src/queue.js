import { NotImplementedError } from '../extensions/index.js';

import { ListNode } from '../extensions/list-node.js';

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
export default class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const newNode = new ListNode(value);

    if (this.tail === null) {
      // Если очередь пуста, новый элемент становится и головой и хвостом
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Добавляем новый элемент в конец и обновляем хвост
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    if (this.head === null) {
      return null; // или можно выбросить ошибку
    }

    const value = this.head.value;
    this.head = this.head.next;

    // Если после удаления очередь стала пустой, обнуляем хвост
    if (this.head === null) {
      this.tail = null;
    }

    return value;
  }
}