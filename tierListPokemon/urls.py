from django.urls import path

from tierListPokemon import views

urlpatterns = [
    path("", views.display_pokemon, name="pokemons"),
]
