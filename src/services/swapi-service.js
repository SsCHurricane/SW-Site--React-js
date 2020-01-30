export default class SwapiService {

    _apiBase = 'https://swapi.co/api';
    _imageBase = 'https://starwars-visualguide.com/assets/img'

     getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, recived ${res.status}`);
        }

        return await res.json();
    } 


    getAllPeople = async (pg) => {
         const res = await this.getResource(`/people/?page=${pg}`);
         const items = res.results.map(this._transformPerson);
         items.push(res.count);

         return items;
    }

    getImagePerson = (id) => {
        if (id === -1) {
            return `${this._imageBase}/placeholder.jpg`
        }
        return `${this._imageBase}/characters/${id}.jpg`;
    };

    getImagePlanet = (id) => {
        if (id === -1) {
            return `${this._imageBase}/placeholder.jpg`
        }
        return `${this._imageBase}/planets/${id}.jpg`;
    };

    getImageStarship = (id) => {
        if (id === -1) {
            return `${this._imageBase}/placeholder.jpg`
        }
        return `${this._imageBase}/starships/${id}.jpg`;
    };

    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}`);
        return this._transformPerson(person);
    }

    getAllPlanets = async (pg) => {
        const res = await this.getResource(`/planets/?page=${pg}`);
        const items = res.results.map(this._transformPlanet);
         items.push(res.count);

         return items;
    }

    getPlanet= async (id) => {
        const planet = await this.getResource(`/planets/${id}`);
        return this._transformPlanet(planet);
    }

    getAllStarships = async (pg) => {
        const res = await this.getResource(`/starships/?page=${pg}`);
        const items = res.results.map(this._transoformStarship);
        items.push(res.count);

        return items;
    }

    getStarship = async (id) => {
        const starship = await this.getResource(`/starships/${id}`);
        return this._transoformStarship(starship);
    }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/
        return item.url.match(idRegExp)[1];
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotation: planet.rotation_period,
            diameter: planet.diameter
        }
    };

    _transoformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            starshipClass: starship.starship_class,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity 
        }
    };

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    };
}