import React from 'react';
import Output from '../containers/OutputContainer';
import Increment from '../containers/IncrementContainer';
import Decrement from '../containers/DecrementContainer';

CounterApp() = props => (
    <div>
        <h1>The Most Amazing Counter App Ever</h1>
        <Output/>
        <Increment/>
        <Decrement/>
    </div>
);

export default CounterApp;