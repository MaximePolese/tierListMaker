import requests
import json
from django.shortcuts import render

from .models import Pokemon

pokemon_first_gen = []

for pokemon_number in range(1, 12):
    url = f"https://pokeapi.co/api/v2/pokemon/{pokemon_number}"
    response = requests.get(url)
    data = response.json()
    pokemon = json.dumps(data)
    json_pokemon = json.loads(pokemon)
    new_pokemon = Pokemon(json_pokemon['name'], pokemon_number, json_pokemon['sprites']['front_default'])
    pokemon_first_gen.append(new_pokemon)


def display_pokemon(request):
    context = {"pokemon_first_gen": pokemon_first_gen}
    return render(request, "tierListPokemon/index.html", context)
