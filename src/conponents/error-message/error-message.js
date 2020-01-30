import React from 'react';

import './error-message.scss';

const message = () => {
    return (
        <div className="error">
            <div className="error__text">
                <p>Ups! Some thing is broken</p>
                <p>We alrady sent R2-D2 to fix it..</p>
            </div>
        </div>
    )
}

export default message;