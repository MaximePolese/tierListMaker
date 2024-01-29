$(document).ready(function () {
    const pokedex = $('.pokemons');
    const container1 = $('#container1');
    const container2 = $('#container2');
    let good_pokemon = [];
    let bad_pokemon = [];

    function loadPokemons() {
        let savedGoodPokemons = JSON.parse(localStorage.getItem('good_pokemon'));
        let savedBadPokemons = JSON.parse(localStorage.getItem('bad_pokemon'));
        if (savedGoodPokemons) {
            good_pokemon = savedGoodPokemons;
            for (let pokemonId of good_pokemon) {
                $('#' + pokemonId).appendTo(container1);
            }
        }
        if (savedBadPokemons) {
            bad_pokemon = savedBadPokemons;
            for (let pokemonId of bad_pokemon) {
                $('#' + pokemonId).appendTo(container2);
            }
        }
    }

    function movePokemon(pokemon, sourceList, destinationList, sourceContainer, destinationContainer) {
        let pokemonId = pokemon.draggable.attr('id');
        const index = sourceList.indexOf(pokemonId);
        if (sourceList.includes(pokemonId)) {
            sourceList.splice(index, 1);
        }
        if (!destinationList.includes(pokemonId)) {
            destinationList.push(pokemonId);
            $('#' + pokemonId).appendTo(destinationContainer);
        }
        savePokemons();
    }

    function savePokemons() {
        localStorage.setItem('good_pokemon', JSON.stringify(good_pokemon));
        localStorage.setItem('bad_pokemon', JSON.stringify(bad_pokemon));
    }

    loadPokemons();

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
            movePokemon(pokemon, bad_pokemon, good_pokemon, container2, container1);
        }
    });

// Let the container2 be droppable, accepting the Pokemons
    container2.droppable({
        accept: ".pokemon",
        classes: {
            "ui-droppable-hover": "ui-state-hover"
        },
        drop: function (event, pokemon) {
            movePokemon(pokemon, good_pokemon, bad_pokemon, container1, container2);
        }
    });

// Let the pokedex be droppable as well, accepting Pokemons from the containers
    pokedex.droppable({
        accept: ".pokemon",
        classes: {
            "ui-droppable-active": "custom-state-active"
        },
        drop: function (event, pokemon) {
            movePokemon(pokemon, good_pokemon, [], container1, pokedex);
            movePokemon(pokemon, bad_pokemon, [], container2, pokedex);
        }
    });
});