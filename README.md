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
  List~Animation~ animations
  List~Voice~ voices
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

class Animation {
  <<interface>>
  string url
  Status status
}

class Voice {
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

class Stat {
  <<interface>>
  number health
  number attack
  number defense
  number resistence  
  number speed
}

class Movement {
  <<interface>>
  List~string~ basics
  List~string~ specials
}

class Evolution {
  <<interface>>
  List~string~ from
  List~string~ to
}


Data <-- Type
Data o-- Animation
Data o-- Voice
Data *-- Stat
Data *-- Movement
Data *-- Voice
Data *-- Evolution

Animation <-- Status
Voice <-- Status

```

## References

- [https://www.pkparaiso.com/pokedex/bulbasaur.php](https://www.pkparaiso.com/pokedex/bulbasaur.php)
- [https://www.pokemon.com/es/pokedex/bulbasaur](https://www.pokemon.com/es/pokedex/bulbasaur)
- [https://pokemon.fandom.com/es/wiki/Bulbasaur](https://pokemon.fandom.com/es/wiki/Bulbasaur)
- [https://pokemon.fandom.com/wiki/Bulbasaur](https://pokemon.fandom.com/wiki/Bulbasaur)
