import requests
import json

from tierListMaker.models import Pokemon

pokemon_first_gen = []

for pokemon_number in range(1, 152):
    url = f"https://pokeapi.co/api/v2/pokemon/{pokemon_number}"
    # url = "https://pokeapi.co/api/v2/pokemon/{}".format(pokemon_number)
    response = requests.get(url)
    data = response.json()
    pokemon = json.dumps(data)
    json_pokemon = json.loads(pokemon)
    new_pokemon = Pokemon(json_pokemon['name'], pokemon_number, json_pokemon['sprites']['front_default'])
    pokemon_first_gen.append(new_pokemon)
    # print(new_pokemon.name)
    # print(new_pokemon.number)
    # print(new_pokemon.picture)

for pokemon in pokemon_first_gen:
    print(pokemon)
