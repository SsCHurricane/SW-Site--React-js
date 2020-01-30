import React, { Component } from 'react';

import './pages.scss';

export default class Pages extends Component {
    
    createBtns = () => {
        const btns = [];
    
        for (let i = 0; i < this.props.pageCount + 1; i++) {
            const clsName =( i + 1 ) === this.props.currPage ? "buttons__btn buttons__btn--active" : "buttons__btn"
            btns.push(
                <button
                    className={clsName}
                    key={i +1}
                    onClick={() => this.props.changePage(i + 1) } >
                    {i + 1}
                </button>
            )
        }
        return btns;
    };

    render() {
        const view = this.createBtns();

        return (
            <div className="container">
                <div className="buttons">
                    {view}
                </div> 
            </div>
        )
    }
}

