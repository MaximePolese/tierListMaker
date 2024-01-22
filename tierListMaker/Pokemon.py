class Pokemon:
    def __init__(self, name: str, order: int, front_default: str):
        self.name = name
        self.order = order
        self.front_default = front_default

    def get_pokemon(self, json_pokemon: str):
        new_pokemon = Pokemon(json_pokemon['name'], json_pokemon['order'], json_pokemon['sprites']['front_default'])
        return new_pokemon
