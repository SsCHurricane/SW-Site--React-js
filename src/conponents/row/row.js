import React from 'react';

import './row.scss';

const Row = ({ left, right }) => {
    return (
        <div className="information__inner">
            { left }
            { right }
        </div>
    )
};

export default Row;