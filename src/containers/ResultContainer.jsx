import React from 'react';
import { connect } from 'react-redux';
import Message from '../components/Message';

const Result = ({ houses, selectedHouses }) => {
    return (
        <>
            <ul>
                {houses.map(house => <li key={house}>{house}</li>)}
            </ul>
            <Message message={selectedHouses} />
        </>
    )
}

const ResultContainer = connect(state => state)(Result)
export default ResultContainer;