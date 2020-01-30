import React, { Component } from 'react';

import './item-details.scss'
import SwapiService from '../../services/swapi-service';
import Loader from '../loader';
import ErrorMessage from '../error-message';

const Record =  ({item, label, field}) => {
    return ( 
            <div className="itemDetails__text">
                { 
                    <p>{ label } { item[field] }</p>
                }
            </div>
    )
};

export {
    Record
};

export default class ItemDetails extends Component {

    SwapiService = new SwapiService();

    state = {
        item: {},
        loading: true,
        error: false,
        image: null
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem () {
        const { itemId, getData, getImage } = this.props;

        if (!itemId) {
            return;
        }

        this.setState({
            loading: true
        });

        getData(itemId)
            .then(item => {
                this.setState({
                    item,
                    loading:false,
                    error: false,
                    image: getImage(itemId)
                });
            })
            .catch(this.onError);
    };

    onError = () => {
        this.setState({
            loading:false,
            error: true
        });
    }

    changeImage = () => {
        this.setState({
            image: this.props.getImage(-1)
        });
    }

    render() {
        
        const { loading, error, image, item} = this.state;
        const { name } = item;

        if(loading && !error) {
            return (
                    <div className="itemDetails center">
                        <Loader />
                    </div>
            )
        } else if (!loading && error) {
            return(
                <div className="itemDetails center">
                    <ErrorMessage />
                </div>
            )
        }

        return(
            <div className="itemDetails">
                <div className="itemDetails__left">
                <img className="itemDetails__img" 
                        src={image} 
                        alt="planet" 
                        onError={ this.changeImage} /> 
                </div>
                <div className="itemDetails__right">
                    <div className="itemDetails__title"> { name } </div>
                        { 
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, { item });
                            })
                        }
                </div>
            </div>
        );
    }
}