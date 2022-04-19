class Card{
    constructor(name, img_url){
        this.name = name;
        this.img_url = img_url;
    }
}

class Deck{
    constructor(cardList){
        this.cardCount = cardList.length;
        this.cardList = cardList;
    }
    //attributes: cardCount, cardList

    get deckLength(){
        return this.cardCount;
    }

    removeCard(index){
        this.cardCount -= 1;
        return this.cardList.splice(index, 1)[0];
    }
    //methods: construct, removeCards
}

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

class Hand{
    constructor(){
        this.cardCount = 0;
        this.cardList = [];
    }

    //attributes: cardCount, cardList

    get handLength(){
        return this.cardCount;
    }

    drawFrom(Deck, amount){
        for (let i = 0; i < amount; i++){
            this.cardList.push(Deck.removeCard(getRandomInt(Deck.cardCount)));
        }
        this.cardCount += amount;
    }

    removeCard(index){
        this.cardCount -= 1;
        return this.cardList.splice(index, 1)[0];
    }
}

class Collection{
    constructor(){
        this.cardCount = 0;
        this.cardList = [];
        this.tally = {
            'tempura': 0,
            'sashimi': 0,
            'dumpling': 0,
            'nigiri': 0
        };
    }

    get collectionLength(){
        return this.cardCount;
    }

    pickFrom(hand, amount){
        for (let i = 0; i < amount; i++){
            const theCard = hand.removeCard(getRandomInt(hand.cardCount));
            this.cardList.push(theCard);
            this.tally[theCard.name] += 1;
        }
        this.cardCount += amount;
    }

    calculateScore(){
        let totalScore = 0;
        totalScore += 2 * this.tally['nigiri'];
        totalScore += 5 * Math.floor(this.tally['tempura'] / 2);
        totalScore += 10 * Math.floor(this.tally['sashimi'] / 3);
        totalScore += this.tally['dumpling'] >= 5 ? 15 :
                      this.tally['dumpling'] === 4 ? 10 :
                      this.tally['dumpling'] === 3 ? 6 :
                      this.tally['dumpling'] === 2 ? 3 :
                      this.tally['dumpling'] === 1 ? 1 : 0;
        return totalScore;
    }
    //methods: pickFrom, calculateScore
}

export {Card, Deck, Hand, Collection, getRandomInt};
