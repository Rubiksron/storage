console.log('card')

// component
class Card {
  constructor(value, suit) {
    this.value = value
    this.suit = suit
  }

  // We can use Vanilla JS DOM manipulations to define how this Card class
  // compenent can render itself to the page.
  // This class makes it very easy to create cards in JS and get them on the
  // page.
  // c1 = new Card('A', 'hearts')
  // c2 = new Card('2', 'spades')
  // c1.toHTML(document.body)
  // c2.toHTML(document.body)
  toHTML(attachParent) {
    let card = document.createElement('div')
    let topLeft = document.createElement('div')
    let botRight = document.createElement('div')

    card.classList.add('card')
    card.classList.add('suit')

    topLeft.classList.add('top-left')
    botRight.classList.add('bot-right')

    topLeft.textContent = this.value
    botRight.textContent = this.value

    card.appendChild(topLeft)
    card.appendChild(botRight)

    attachParent.appendChild(card)

    // BUT! Isn't that vanilla DOM manipulation a bit much to write?
    // What if we could just write HTML inside JavaScript?
    // Well, JS doesn't allow that.
    // But we /could/ write our own transpiler that detects HTML in JS
    // and converts it into real-actual JS.
    // Good news! Someone has done this! It's called JSX!
    // It looks like this:
    // return (<div class="card suit">
    //   <div class="top-left">{this.value}</div>
    //   <div class="bot-right">{this.value}</div>
    // </div>)
  }
}
