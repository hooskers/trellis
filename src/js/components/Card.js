import React, {Component} from 'react';
import {render} from 'react-dom';
import {css} from 'react-emotion';

const Card = ({card}) => {
    return (
        <div>
            <div>Card Name: {card.name}</div>
            <div>Card Desc: {card.description}</div>
            <br />
        </div>
    );
};

export default Card;