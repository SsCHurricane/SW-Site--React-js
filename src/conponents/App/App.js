import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PersonPage from '../person-page';
import Pages from '../pages/pages';

import './app.scss';

export default class App extends Component {

   

     

    state = {
        currPage: 1,
        pageCount: 0,
        currItem: 'people'
    }


    changePage = (page) => {
       this.setState({
           currPage: page
       });
    };

    changeItem = (currItem) => {
        this.setState({
            currItem,
            currPage: 1
        })
    };

    setPageCount = (pageCount) => {

        this.setState({
            pageCount
        });
    };

    render() { 
        return (
            <div className="app">
                <Header changeItem={ this.changeItem } />
                <div className="container">
                    <RandomPlanet />
                    <PersonPage currPage={ this.state.currPage  }
                                currItem={ this.state.currItem }
                                setPageCount={ this.setPageCount } />
                    <Pages currPage={ this.state.currPage }
                            pageCount={ this.state.pageCount }
                            changePage={ this.changePage } />
                </div> 
            </div>
        )
    }
}