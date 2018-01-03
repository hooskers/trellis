import React, {Component} from 'react';
import {render} from 'react-dom';
import {css} from 'react-emotion';
import uuidv4 from 'uuid/v4';
import CardContainer from '../containers/CardContainer';

const List = ({id, name, cardIds, boardId, onAddCard, onDeleteList, onRenameList}) => {
    let listNameInput;
    let cardNameInput, cardDescInput;

    return (
      <div>
        <hr />
        <div>List: {name}</div>
        <button onClick={() => onDeleteList(boardId, id)}>Delete list</button>

        <form
        onSubmit={e => {
          e.preventDefault();
          if (!listNameInput.value.trim()) {
            return;
          }

          onRenameList(id, listNameInput.value.trim());

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
            id,
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
        
        {cardIds.map(cardId =>
          <div key={uuidv4()}>
            <CardContainer listId={id} cardId={cardId} />
            <br />
            <br />
          </div>
        )}
      </div>
    )
};

export default List;