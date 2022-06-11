<!--
Created: Sat Jun 11 2022 14:58:50 GMT-0400 (hora de Bolivia)
Modified: Sat Jun 11 2022 14:58:50 GMT-0400 (hora de Bolivia)
-->

# Pikapi

An open RESTful API for simple Pokémon data

## Data Model

**Namespace**: Pokemon

```mermaid
classDiagram

class Data {
  <<interface>>
  string id
  string name
  string specie
  List~Type~ types
  string description
  string weight
  string height
  List~Type~ counters
  List~Movement~ movements
  Stat stat
  Evolution evolution
  List~Media~ animations
  List~Media~ voices
}

class Type {
  <<enumeration>>
  Normal
  Fire
  Water
  Grass
  Electric
  Ice
  Fighting
  Poison
  Ground
  Flying
  Psychic
  Bug
  Rock
  Ghost
  Dark
  Dragon
  Steel
  Fairy
}

class Movement {
  <<interface>>
  string name
  number damage
  Type type
}

class Stat {
  <<interface>>
  number health
  number attack
  number defense
  number resistence
  number speed
}

class Evolution {
  <<interface>>
  List~string~ from
  List~string~ to
}

class Media {
  <<interface>>
  string url
  Status status
}

class Status {
  <<enumeration>>
  Normal
  Attacking
  Roaring
}


Data <-- Type
Data o-- Media
Data *-- Stat
Data *-- Movement
Data *-- Evolution
Movement <-- Type
Media <-- Status

```

## References

* [https://www.pkparaiso.com/pokedex/bulbasaur.php](https://www.pkparaiso.com/pokedex/bulbasaur.php)
* [https://www.pokemon.com/es/pokedex/bulbasaur](https://www.pokemon.com/es/pokedex/bulbasaur)
* [https://pokemon.fandom.com/es/wiki/Bulbasaur](https://pokemon.fandom.com/es/wiki/Bulbasaur)
* [https://pokemon.fandom.com/wiki/Bulbasaur](https://pokemon.fandom.com/wiki/Bulbasaur)
* [https://pokemon.gameinfo.io/en/pokemon/1-bulbasaur](https://pokemon.gameinfo.io/en/pokemon/1-bulbasaur)
