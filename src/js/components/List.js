import React, {Component} from 'react';
import {render} from 'react-dom';
import {css} from 'react-emotion';
import uuidv4 from 'uuid/v4';
import CardContainer from '../containers/CardContainer';

const List = ({list, onAddList}) => {
    console.log(list);
    return (
        <div>
            <div>List: {list.name}</div>
            {list.cards.map(card =>
                <CardContainer key={uuidv4()} card={card} />
            )}
        </div>
    )
};

export default List;