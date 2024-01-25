import requests
import json
from django.shortcuts import render

from .models import Pokemon

pokemon_first_gen = []
url = "https://beta.pokeapi.co/graphql/v1beta"
headers = {'Content-Type': 'application/json'}
graphql_query = "query {pokemon_v2_pokemon(limit: 151) {id name pokemon_v2_pokemonsprites {sprites}}}"
data = json.dumps({'query': graphql_query})
response = requests.post(url, headers=headers, data=data)
json_data = response.json()
pokemons_data = json_data['data']['pokemon_v2_pokemon']
for pokemon_data in pokemons_data:
    new_pokemon = Pokemon(pokemon_data['name'], pokemon_data['id'],
                          pokemon_data['pokemon_v2_pokemonsprites'][0]['sprites']['front_default'])
    pokemon_first_gen.append(new_pokemon)


def display_pokemon(request):
    context = {"pokemon_first_gen": pokemon_first_gen}
    return render(request, "tierListPokemon/index.html", context)
