'use strict'

// n == number keys on the 
let findObjectValue = (data, key) => {
  return data[key] || null
}

findObjectValue({a: 'one', b: 'two'}, 'a')

// n == number of items in an array
let arrayValue = (data, value) => {
  let result = null
  for(var i =0 ;i<data.length;i++){
    if(value === data[i])
      result = value
  }
  return result
}


// n is the array length
let workHard = (data) => {
  for(var i =0; i<data.length; i++){
    for(var x = 0; x<data.length; x++){
      console.log(data[x])
    }
  }
}


let figurethisout = (data) {
  for(var x = 0; x<data.length; x++){
    console.log(data[x])
  }
  for(var x = 0; x<data.length; x++){
    console.log(data[x])
  }
}







