import React from 'react';

import './loader.css';

const loader = () => {
    return (
        <div className="lds-css ng-scope">
            <div className="lds-flickr">
                <div>
                </div>
                <div>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
};

export default loader;