import requests
import json


class Request:

    def do_request(self, url: str):
        response = requests.get(url)
        data = response.json()
        dictionary = json.dumps(data)
        json_data = json.loads(dictionary)
        return json_data
