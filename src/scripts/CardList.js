export default class CardList {
    constructor (container) {
        this.container = container;
    }

    addCard (element) {
        this.container.appendChild(element);
    }

    render (card) {
        this.addCard(card);
    }
}