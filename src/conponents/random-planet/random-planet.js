import React, { Component } from 'react';

import './random-planet.scss';
import Swapi from '../../services/swapi-service';
import Loader from '../loader';
import ErrorMessage from '../error-message';

export default class RandomPlanet extends Component {

    swapi = new Swapi();

    componentDidMount() {
        this.updatePlanet();
        setInterval(this.updatePlanet, 2500);
    }

    state = {
        planet: {},
        loading: true,
        error: false
    }

    onPlanetLoaded = (planet) => {   
        this.setState({
            planet,
            loading: false
        })
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        });
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 25) + 1;
        this.swapi
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    };

    changeId = () => {
        const st = {...this.state};
        st.planet.id = 3;
        this.setState({st});
    };

    render() {

        const { planet, loading, error } = this.state;

        const loader = loading ? <Loader /> : null;
        const viev = (!loading && !error) ? <PlanetView planet={planet} isError={this.changeId} /> : null;
        const clsName = loading ? "randPlanet__inner center" : "randPlanet__inner"
        const errViev = error ? <ErrorMessage /> : null;


        return (
            <div className="randPlanet">
                <div className="container">
                    <div className={clsName}>
                        {loader}
                        {viev}
                        {errViev}
                    </div>
                </div>
            </div>
        );
    }
}

const PlanetView = ({ planet, isError }) => {
    const {id, name, population, rotation, diameter} = planet;

    return (
        <React.Fragment>
            <div className="randPlanet__left">
                <img className="randPlanet__img" 
                    src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} 
                    alt="planet"
                    onError={ isError } />
            </div>
            <div className="randPlanet__right">
                <div className="randPlanet__title">
                    { name }
                </div>
                <div className="randPlanet__text">
                    <p>Population: <span>{ population }</span></p>
                    <p>Rotation Period: <span>{ rotation }</span> </p>
                    <p>Diameter: <span>{ diameter }</span> </p>
                </div>
            </div>
        </React.Fragment>
    )
};