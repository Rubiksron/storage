'use strict';


// TODO: figure out your goal before your implemintation
//[2,3,4,5] // a goal is an action with an outcome

// TODO: come up with a general definition for callbacks

// a callback is a function as an argument

// when you want to outsouce the some logic to the caller of the function we use callbacks

let double = (n) => n * 2
let tripple = (n) => n * 3

[2,3,4,5].map(double)
[2,3,4,5].map(tripple)




function doStuff(array, logic){
  for(var i=0; i<array.length; i++){
    logic(array[i])
  }
}

doStuff([1,2,3], console.log)
doStuff([1,2,3], )
result = []

doStuff(['a', 'b', 'c'], (item) => {
  result.push(item.toUpperCase());
})


//$.getJSON('/cool.json', (res) => {
  //}, 
  //(err) => {
//})

// TODO: come up with a processe for detemining the uniqueness of callbacks


// what is a function signature
// a spec for input and output

// callback for map (value, index, array) => modValue

// callback for async node modules (err, data) => undefined
//


// google superagent read the first couple paragrphs of the docs
// and determine what the callback signature is for handling 
// requests
// .then() => promise
// .end((err, response) => undefined)


















