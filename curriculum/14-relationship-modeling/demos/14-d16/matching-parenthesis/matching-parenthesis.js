'use strict'


let data = '{}()'

let matchingParens = (data) => {
  let matchingBraces = {
    '{':'}',
    '[':']',
    '(':')',
  }
  let closingBraces = '}])'
  let stack = []
  for(var i = 0; i<data.length; i++){
    let char = data[i]
    if(matchingBraces[char]){
      stack.push(char)
    } else if (closingBraces.includes(char)){
      let top = stack.pop()
      if(matchingBraces[top] !== char)
        return false
    }
  }
  if(stack.pop() === undefined)
    return true;
  return false
  
}


console.log(matchingParens('hello(world)cool'))
