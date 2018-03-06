# Into to SASS and "Vanilla React"

The `card.html` and `card.js` files are supposed to show the "main idea" behind
React. The main idea is:

* Create a JS class that has:
  * data and methods to manipulate itself
  * a method that uses vanilla JS DOM manipulations to render the object in
    HTML and attach it to the DOM on the page.

The order of the class should flow like this:
1. Talk about how JS was a mess in 2008.
1. Show that someone made CoffeeScript to try to add features they wanted
1. Minimize the importance of CoffeeScript and emphasize ES6 solved many
   problems.
1. Talk about transpilers, show the `espresso` example
1. Show simple variable transpiler replacements in SASS
1. Talk about how webpack can be configured to run all the transpilers and
   bundle things together
1. Start to introduce React
1. Build this "Vanilla React" to show the basic idea that a JS class can hold
   data, have methods, and have one method that renders the object in HTML.
   * Use Vanilla DOM manipulations to build up the object
   * Now, pause and say, "there must be a better way to write this"
   * Ask, "remember transpilers?"
   * Say, "wouldn't it be cool if we could just write HTML like this?"
   * Say, "That's what JSX is. A transpiler that allows us to do exactly that!"
1. Move to Actual React and point out React has many enhancements and
   optimizations beyond what our tiny Vanilla React example does.

#### Config Notes

**html-webpack-plugin** dynamic link and script tags
**extract-text-webpack-plugin**: puts all CSS in one css file, all JS in one
bundle.js file

npm install webpack webpack-dev-server html-webpack-plugin \
    extract-text-webpack-plugin \
    node-sass sass-loader resolve-url-loader css-loader \
    babel-core babel-loader babel-preset-react \
    babel-preset-es2015 \
    babel-plugin-transform-object-rest-spread \
    react react-dom

  Part 1:
    Welcome back to front end!
    we're going to use React, and SASS
    SASS - Syntactically Awesome Style Sheets (suuugar!)
    demonstrate installing sass manually, running sass --watch input.scss:output.css command

    install webpack

    "scripts": {
      "watch": "webpack-dev-server --inline --hot",
      "build": "webpack",
    }

    require('./css/main.scss')
    console.log('live reload!')

    import React from 'react'
    import ReactDom from 'react-dom'

    class App extends React.Component {
      render() {
        return (
          <h1>cool beans</h1>
        )
      }
    }

    npm install react-dom
    
