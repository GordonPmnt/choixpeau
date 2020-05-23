import React from 'react';
import { connect } from 'react-redux';

const Result = props => {
    return <p>{props.selectedHouses}</p>
}

const ResultContainer = connect(state => state)(Result)
export default ResultContainer;