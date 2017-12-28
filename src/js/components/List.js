import React, {Component} from 'react';
import {render} from 'react-dom';
import {css} from 'react-emotion';
import uuidv4 from 'uuid/v4';
import CardContainer from '../containers/CardContainer';

const List = ({boardId, list, onAddCard}) => {
    console.log(list);

    let input;
    return (
        <div>
            <hr />
            <div>List: {list.name}</div>
            <form onSubmit={e => {
              e.preventDefault();
              if (!input.value.trim()) {
                return;
              }

              onAddCard(boardId, list.id, input.value.trim(), "");
              input.value='';
            }}>
              <input placeholder="New card name"
                ref={node => {
                  input = node;
              }} />
              <button type="submit">Add card</button>
            </form>
            {list.cards.map(card =>
                <CardContainer key={uuidv4()} card={card} />
            )}
        </div>
    )
};

export default List;