import React from 'react';

import './item-list.scss';

const  ItemList = (props) => {

    const { itemId, onItemSelected, data} = props
    const newArr = [...data];
    newArr.splice(-1, 1);

    const item = newArr.map((item) => {
        const {id} = item;
        const label = item.name;
        const isActive = (id === itemId)
        const clsName = (isActive ? "item__name item__name--active" : "item__name");

        return (
            <div key={ id }
                className={clsName}
                onClick={ () => onItemSelected(id) } >
                { label }
            </div>
        )
    });

    return (
        <div className="item">
            <div className="item__content">
                { item }
            </div>
        </div>
    );
}

export default ItemList;

