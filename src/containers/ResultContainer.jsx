import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Message from '../components/Message';

const Result = ({ houses, selectedHouses, dispatch }) => {
    const action = {
        type: 'UPDATE_CHOICE_WITH_MY_INDEX',
        indexSelected: Math.floor(Math.random()  *  4)
    }
    useEffect(
        () => {
            setInterval(() =>  {
                action.indexSelected = Math.floor(Math.random()  *  4);
                dispatch(action)
            }, 1000)
        }, []
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