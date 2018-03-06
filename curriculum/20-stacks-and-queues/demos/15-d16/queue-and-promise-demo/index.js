'use strict'

class Queue {
  enqueue(){
    Array.prototype.unshift.apply(this, arguments)
    return this
  }

  dequeue(){
    return Array.prototype.pop.call(this)
  }
}

class Prom {
  constructor(callback){
    this.successCallbacks = new Queue()
    this.failureCallbacks = new Queue()
  
    function handleResolve(data) {
      let nextCallback = this.successCallbacks.dequeue() 
      if(!nextCallback) return
      try {
        let result = nextCallback(data)
        handleResolve.call(this, result)
      } catch (err) {
        handleReject.call(this, err)
      }
    }

    function handleReject (err) {
      let nextCallback = this.failureCallbacks.dequeue() 
      if(!nextCallback) return
      try {
        let result = nextCallback(err)
        handleResolve.call(this, result) 
      } catch (err) {
        handleReject.call(this, err)
      }
    }

    
    setTimeout(() => {
      callback(handleResolve.bind(this), handleReject.bind(this))
    }, 0)

  }

  then(callback){
    console.log('resiter then')
    this.successCallbacks.enqueue(callback)
    return this
  }

  catch(callback){
    console.log('resiter catch')
    this.failureCallbacks.enqueue(callback)
    return this;
  }
}


let prom = new Prom((resolve, reject) => {
  console.log('is this after the first then or catch ?') 
  reject(5)
}) 
.catch(err => {
  console.log("yey an error", err)
  return 100
})
.then((val) => {
  console.log('1 success', val)
  return val + 1
})
.then((val) => {
  console.log('2 success', val)
  throw "HELLO WORLD"
  return val + 1
})
.then((val) => {
  console.log('3 success', val)
  return val + 1
})
.then((val) => {
  console.log('4 success', val)
  return val + 1
})
.catch(err => {
  console.log('EROROROROORRR', err)
})



console.dir(prom, {depth:Infinity})







