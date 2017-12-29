import React, {Component} from 'react';
import {render} from 'react-dom';
import {css} from 'react-emotion';
import uuidv4 from 'uuid/v4';
import CardContainer from '../containers/CardContainer';

const List = ({boardId, list, onAddCard, onDeleteCard, onRenameList}) => {
    console.log(list);

    let listNameInput;
    let cardNameInput, cardDescInput;
    return (
      <div>
        <hr />
        <div>List: {list.name}</div>

        <form
        onSubmit={e => {
          e.preventDefault();
          if (!listNameInput.value.trim()) {
            return;
          }

          onRenameList(boardId, list.id, listNameInput.value.trim());

          listNameInput.value = '';
        }}
        >
          <input placeholder="Rename list"
          ref={node => {
            listNameInput = node;
          }} />
        </form>

        <form 
        onSubmit={e => {
          e.preventDefault();
          if (!cardNameInput.value.trim()) {
            return;
          }

          onAddCard(
            boardId,
            list.id,
            cardNameInput.value.trim(),
            cardDescInput.value
          );

          cardNameInput.value = '';
          cardDescInput.value = '';
        }}>
          <input placeholder="New card name"
          ref={node => {
            cardNameInput = node;
          }} />

          <textarea autoComplete="off"
          placeholder="New card description"
          ref={node => {
            cardDescInput = node;
          }} />

          <button type="submit">Add card</button>
        </form>
        
        {list.cards.map(card =>
          <div key={uuidv4()}>
            <CardContainer boardId={boardId} listId={list.id} card={card} />
            <button onClick={() => onDeleteCard(boardId, list.id, card.id)}>Delete card</button>
            <br />
            <br />
          </div>
        )}
      </div>
    )
};

export default List;