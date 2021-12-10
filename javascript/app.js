const myDeck = {
  deck: [],
  drawnCards: [],
  suits: ['heart','diamons','spades','clubs'],
  values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
  makeDeck(){
    const {
      suits,
      values,
      deck
    } = this;
    for(let card of values.split(',')){
      for(let suit of suits){
        deck.push({
          card,
          suit
        })
      }
    }
  },
  drawSingleCard(){
    const card = this.deck.pop();
    this.drawnCards.push(card)
    return card; // can change to draw a random card
  }
}