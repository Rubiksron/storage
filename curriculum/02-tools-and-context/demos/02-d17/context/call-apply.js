'use strict'

function User(name, age) {
  this.name = name
  this.age = age
}

function SuperUser(name, age) {
  User.call(this, name, age)
  this.isAdmin = true
}

let user =  new User('scott', 34)
let superUser = new SuperUser('ben', 35)

console.log('user', user)
console.log('superUser', superUser)

function SuperDuperUser(name, age) {
  SuperUser.apply(this, [name, age])
  this.isAdmin = false
  this.isSuperDuper = true
}

let superDuperUser = new SuperDuperUser('sally', 100)
console.log(superDuperUser)

function map(arr, callback){
  if(!arr) throw Error('must provide array')
  return Array.prototype.map.call(arr, callback)
}

