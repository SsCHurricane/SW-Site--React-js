import React, { Component } from 'react';

import ErrorMessage from'../error-message';
import Loader from '../loader';

const WorkData = (View, getData) => {
    return class extends Component {

        state = {
            data: null,
            pageCount: null,
            error: false,
            loading: true,
        };
    
        componentDidMount() {
            this.loadItems(this.props.page);
        }
    
        componentDidUpdate(prevProps){
            if(this.props.page !== prevProps.page) {
                this.loadItems(this.props.page);
            }
        }
    
        onError = () => {
            this.setState({
                error: true,
                loading:false
            });
        };
    
        loadItems = (pg) => {
            this.setState({
                loading: true
            });
    
            getData(pg)
                .then( data => {
                    this.setState({
                        data,
                        pageCount: Math.floor(data[data.length - 1]/10),
                        loading: false
                    });
                    this.props.pageCount(this.state.pageCount);
                    this.props.onItemSelected(this.state.data[0].id);
                })
                .catch( this.onError );
        };

    
        render () {
            const { itemList, loading, error, data } = this.state;

            if(!itemList && error) {
                return (
                    <div className="item">
                        <div className="item__content">
                            <ErrorMessage />
                        </div>
                    </div>
                )
            }else if( loading && !error ) {
                return (
                    <div className="item">
                        <div className="item__content center">
                            <Loader />
                        </div>
                    </div>
                )
            }

            return <View {...this.props} data={data}/>
        }
    }
};

export default WorkData;