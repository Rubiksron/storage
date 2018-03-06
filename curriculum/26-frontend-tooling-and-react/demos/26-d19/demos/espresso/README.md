# Espresso (CoffeeScript Lite)
This code intends to show students what a super simple transpiler might look like.
This demo intends to introduce students to the idea that code is simply text. We can
imagine any new syntax, then write a program that converts files with our new syntax
into real actual JavaScript programs.

Imagine the code below would be run like this:

* A `.espresso` file is a made-up file extensions. It's simply text.
* `espresso` is a made-up command line program. We could spend more time to actually
  create a JS program that reads actual files, but instead we simply have a `code`
  variable in our program where the "input program" is hard-coded.

```
espresso my_file.espresso real_javascript_output.js
```

After seeing this small example students should be able to look at a `.scss` file
and a `.jsx` file and have more of an understanding of how a transpiler turns those
"fantasy syntax" files into real CSS and JS files.

## The Code
Coffeescripts supports a syntax that looks like this:

http://coffeescript.org/#top

```
number   = 42
opposite = true
number = -42 if opposite
```

Our tiny transpiler is written to detect lines of code like line #3 above,
and it converts the line into actual JavaScript. Converting the code to
actual JavaScript looks like:

```
number   = 42
opposite = true
if (opposite) number = -42
```

The file `espresso.js` is our own tiny transpiler. Our tiny transpiler ONLY supports
looking for the new fancy-syntax if statement, and converting it into a real
actual JS statement.

Here's the entirety of `espresso.js`:

**espresso.js**
```js
// takes strings that looks like
// "foo = -val if cond"
// and executes them as real JS like
// "if (cond) foo = -val"
function espressoScript(code) {
  if (!code.includes('if')) return code

  // ['foo', '=', '-val', 'if', 'cond']
  let tokens = code.split(" ")

  let varName = tokens[0]
  let expr  = tokens[2]
  let cond = tokens[tokens.length - 1]

  let output = `if (${cond}) ${varName} = ${expr}`
  return output
}

// imagine this code was in a file called
// negator.esp and this entire program
// was executed as:
// espresso negator.esp negator.js
// to turn our made-up .esp file into a real .js file
let code = `number = 42
condition = true
number = -number if condition`

code = code.split('\n').map(espressoScript)
code = code.join('\n')

console.log(code)

```