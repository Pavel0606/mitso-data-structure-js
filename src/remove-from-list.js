import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

export default function removeKFromList(l, k) {
  // Обрабатываем случай, когда список пустой
  if (l === null) {
    return null;
  }

  // Создаем фиктивную голову для упрощения обработки
  let dummy = { value: 0, next: l };
  let current = dummy;

  // Проходим по списку
  while (current.next !== null) {
    if (current.next.value === k) {
      // Пропускаем узел с нужным значением
      current.next = current.next.next;
    } else {
      // Переходим к следующему узлу
      current = current.next;
    }
  }

  return dummy.next;
}