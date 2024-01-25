class Pokemon:
    def __init__(self, name: str, number: int, front_default: str):
        self.name = name
        self.number = number
        self.picture = front_default

    def __repr__(self):
        return f'Pokemon(name={self.name}, number={self.number}, picture={self.picture})'
