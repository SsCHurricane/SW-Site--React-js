import React, { Component } from 'react';

import './person-page.scss';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import ErrorBoundry from '../error-boundry'
import { PersonList, PersonDetails, PlaneetsList, PlanetDetails, StarshipsList, StarshipDetails } from '../sw-components';

export default class PersonPage extends Component {

    swapiService = new SwapiService();

    state = {
        personId: null,
        ItemView: {list: PersonList, details: PersonDetails}
    };

    componentDidUpdate(prevProps) {
        if(this.props.currItem !== prevProps.currItem){
            this.changeItem();
        }
    }

    onPersonSelected = (id) => {
        this.setState({
            personId: id
        });
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        });
    }

    changeItem = () => {
        if (this.props.currItem === 'people') {
            this.setState({
                ItemView: {list: PersonList, details: PersonDetails}
            });
        } else if (this.props.currItem === 'planets') {
            this.setState({
                ItemView: {list: PlaneetsList, details: PlanetDetails}
            });
        } else if (this.props.currItem === 'starships') {
            this.setState({
                ItemView: {list: StarshipsList, details: StarshipDetails}
            });
        }
        
    };

    render() {
        const { ItemView } = this.state

        const starshipDetails = (
            <ItemView.details itemId={this.state.personId} 
                        />
        );

        const itemList = (
            <ItemView.list onItemSelected={ this.onPersonSelected }
                        itemId={ this.state.personId }
                        page={ this.props.currPage }
                        pageCount={(count) => this.props.setPageCount(count)} 
                         />
        );
        
        return (
            <ErrorBoundry>
                <Row left={itemList} right={starshipDetails} />
            </ErrorBoundry> 
        )
    }
}