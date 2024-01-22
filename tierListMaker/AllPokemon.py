from tierListMaker.request import Request


class PokemonList:

    def __init__(self):
        self.pokemonList = []
        self.response = Request()

    def build_url(self, order: int):
        return f"https://pokeapi.co/api/v2/pokemon/{order}"

    def get_data(self, order: int):
        return self.response.do_request(self.build_url(order))

    def get_all_pokemon(self):
        for
