const Stack = (function () {
  let _items = new WeakMap()
  return class Stack {
    constructor() {
      _items.set(this, [])
    }
    push(elem) {
      _items.get(this).push(elem)
    }
    pop() {
      return _items.get(this).pop()
    }
    peek() {
      return _items.get(this)[_items.get(this).length - 1]
    }
    size() {
      return _items.get(this).length
    }
  }
})()

let a = new Stack()
a.push(1)
a.push(2)
a.push(3)
console.log(a);
console.log(a.size());