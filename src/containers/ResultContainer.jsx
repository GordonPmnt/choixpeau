import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Message from '../components/Message';

const Result = ({ houses, selectedHouses, dispatch }) => {
    
    useEffect(
        () => setInterval(() =>  dispatch({ type:  '' }), 1000), []
    );

    return (
        <>
            <ul>
                {houses.map(house => (
                    <li 
                        style={{ listStyle: 'none' }} 
                        key={house}
                    >
                        {house}
                    </li>)
                )}
            </ul>
            <Message message={selectedHouses} />
        </>
    )
}

const ResultContainer = connect(state => state)(Result)
export default ResultContainer;