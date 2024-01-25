$(document).ready(function () {
    const pokedex = $('.pokemons');
    const container1 = $('#container1');
    const container2 = $('#container2');

    // Let the Pokemons be draggable
    $(".pokemon").draggable({
        revert: "invalid",
        containment: "document",
        helper: "clone",
        cursorAt: {top: 48, left: 48},
        opacity: 0.5
    });

    // Let the container1 be droppable, accepting the Pokemons
    container1.droppable({
        accept: ".pokemon",
        classes: {
            "ui-droppable-hover": "ui-state-hover"
        },
        drop: function (event, pokemon) {
            pokemon.draggable.appendTo(container1);
        }
    });

    // Let the container2 be droppable, accepting the Pokemons
    container2.droppable({
        accept: ".pokemon",
        classes: {
            "ui-droppable-hover": "ui-state-hover"
        },
        drop: function (event, pokemon) {
            pokemon.draggable.appendTo(container2);
        }
    });

    // Let the pokedex be droppable as well, accepting Pokemons from the containers
    pokedex.droppable({
        accept: ".pokemon",
        classes: {
            "ui-droppable-active": "custom-state-active"
        },
        drop: function (event, pokemon) {
            pokemon.draggable.appendTo(pokedex);
        }
    });
});