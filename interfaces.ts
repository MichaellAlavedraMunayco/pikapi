namespace Pokemon {

	export interface Pokemon {
		id: string;
		name: string;
		specie: string;
		types: Type[];
		description: string
		weight: string
		height: string
		counters: Type[]
		movements: Movement[];
		stat: Stat;
		evolution: Evolution;
		animations: Media[];
		voices: Media[];
	}

	export const enum Type {
		Normal = 'Normal',
		Fire = 'Fire',
		Water = 'Water',
		Grass = 'Grass',
		Electric = 'Electric',
		Ice = 'Ice',
		Fighting = 'Fighting',
		Poison = 'Poison',
		Ground = 'Ground',
		Flying = 'Flying',
		Psychic = 'Psychic',
		Bug = 'Bug',
		Rock = 'Rock',
		Ghost = 'Ghost',
		Dark = 'Dark',
		Dragon = 'Dragon',
		Steel = 'Steel',
		Fairy = 'Fairy',
	}

	export interface Movement {
		name: string;
		damage: number;
		type: Type;
	}

	export interface Stat {
		health: number;
		attack: number;
		defense: number;
		resistence: number;
		speed: number;
	}

	export interface Evolution {
		from: string[];
		to: string[];
	}

	export interface Media {
		url: string;
		status: Status;
	}

	export const enum Status {
		Normal = 'Normal',
		Attacking = 'Attacking',
		Roaring = 'Roaring',
	}

}