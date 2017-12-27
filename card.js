var prefix = 'https://cors-anywhere.herokuapp.com/';
var baseUrl = 'https://kodilla.com/pl/bootcamp-api';

// KLASA KANBAN CARD
function Card(description) {
    var self = this;

    this.id = id;
    this.name = name || 'No name given';
    this.element = createCard();

    function createCard() {
        var card = $('<li class="card"></li>');
        var cardDeleteBtn = $('<button class="btn-delete">x</button>');
        var cardDescription = $('<p class="card-description"></p>');

        cardDeleteBtn.click(function() {
            self.removeCard();
        });

        card.append(cardDeleteBtn);
        cardDescription.text(self.name);
        card.append(cardDescription);
        return card;
    }
}
Card.prototype = {
    removeCard: function() {
        var self = this;
        $.ajax({
            url: prefix + baseUrl + '/card/' + self.id,
            method: 'DELETE',
            success: function() {
                self.element.remove();
            }
        });
    }
};