import React, { Component } from 'react';

import './header.scss'

export default class Header extends Component {


    render() {
        return (
            <div className="header">
                <div className="container">
                    <div className="header__inner">
                        <div className="header__title">
                            <h1>Star DB</h1>
                        </div>
                        <div className="header__nav">
                            <a className="header__link" 
                                href="none"
                                onClick={(event) => {
                                    event.preventDefault();
                                    this.props.changeItem();
                                }} >
                                    People
                            </a>
                            <a className="header__link" 
                                href="none"
                                onClick={(event) => {
                                    event.preventDefault();
                                    this.props.changeItem('planets');
                                }} >
                                    Planets
                            </a>
                            <a className="header__link" 
                                href="none"
                                onClick={(event) => {
                                    event.preventDefault();
                                    this.props.changeItem('starships');
                                }} >
                                    Starships
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }    
}
