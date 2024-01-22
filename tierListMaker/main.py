import requests
import json

from tierListMaker.Pokemon import Pokemon

order_test = 3
url = f"https://pokeapi.co/api/v2/pokemon/{order_test}"
# url = "https://pokeapi.co/api/v2/pokemon/{}".format(order_test)
response = requests.get(url)
data = response.json()
pokemon = json.dumps(data)
json_pokemon = json.loads(pokemon)
new_pokemon = Pokemon(json_pokemon['name'], json_pokemon['order'], json_pokemon['sprites']['front_default'])
print(new_pokemon.name)
print(new_pokemon.order)
print(new_pokemon.front_default)
