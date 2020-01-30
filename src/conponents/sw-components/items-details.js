import React from 'react';
import SwapiService from '../../services/swapi-service';
import ItemDetails, { Record } from '../item-details';

const swapiService = new SwapiService();

const {
    getPerson,
    getPlanet,
    getStarship,
    getImagePerson,
    getImagePlanet,
    getImageStarship
} = swapiService;

const PersonDetails = ({itemId}) => {
    return (
        <ItemDetails itemId={itemId}
                    getData={getPerson}
                    getImage={getImagePerson} >
            
            <Record  field="gender" label="Gender - " />
            <Record  field="birthYear" label="Birth Year - " />
            <Record  field="eyeColor" label="Eye Color - " />

            </ItemDetails>
    )
};

const PlanetDetails = ({itemId}) => {
    return (
        <ItemDetails itemId={itemId}
                    getData={getPlanet}
                    getImage={getImagePlanet} >
            
            <Record  field="population" label="Population - " />
            <Record  field="rotation" label="Rotation - " />
            <Record  field="diameter" label="Diameter - " />

            </ItemDetails>
    )
};

const StarshipDetails = ({itemId}) => {
    return (
        <ItemDetails itemId={itemId}
                    getData={getStarship}
                    getImage={getImageStarship} >
            
            <Record  field="model" label="Model - " />
            <Record  field="length" label="Length - " />
            <Record  field="costInCredits" label="Cost In Credits - " />
            <Record  field="passengers" label="Passengers - " />
            <Record  field="cargoCapacity" label="Cargo Capacity - " />

            </ItemDetails>
    )
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};