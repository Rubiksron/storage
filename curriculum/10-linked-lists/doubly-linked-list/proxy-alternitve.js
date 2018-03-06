'use strict'

factory = (props, methods, proxy) => new Proxy(Object.assign(Object.create(methods), props), proxy)

// helper used with reducers
cleanHead = (node) => (node.prev = null) || node

DLL = (value, next=null) => {
  let props = {value, next, prev: null}
  let methods = {
    append: function(value){
      this.last = value
    },
    reduce: function(cb, state=null){
      current = this
      let i=0
      while(current){
        state = cb(state, current.value, i++, this)
        current = current.next
      }
      return state  
    },
    map: function(cb) {
      return cleanHead(this.reduce((p, n, i , t) => {
        p.last = cb(n,i,t)
        return p
      }, DLL()).next)
    },
    filter: function(cb) {
      return cleanHead(this.reduce((p, n, i , t) => {
        if(cb(n, i, t)) 
          p.last = n
        return p
      }, DLL()).next)
    },
  }
  let proxy = {
    get: (obj, prop) => {
      switch(prop){
        case 'middle':
          let slow = obj;
          let fast = obj;
          while(fast && fast.next){
            console.log('cool', slow.value)
            slow = slow.next;
            fast = fast.next.next;
          }
          return slow;
        default: 
          return obj[prop];
      };
    },
    set: (obj, prop, value) => {
      if(prop == 'next') { 
        let next = DLL(value) 
        next.prev = obj
        obj.next = next
        return
      }
      if(prop == 'last'){
        let current = obj
        while(current.next) {
          current = current.next 
        }
        if(current == obj) {
	  let next = DLL(value)
	  next.prev = obj
	  current.next = next
	  return 
        }
        current.next = value
        return
      }
      obj[prop] = value
    }
  }
  return factory(props, methods, proxy)
}
  
head = DLL('first')
head.last = 'second'
head.last = 'third'
head.last = 'fourth'
doubled = head.map(v => v + '!!!!!')

head = DLL(0)
head.append(5)
head.append(6)

even = head.filter(n => n % 2 == 0 )
