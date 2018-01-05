import React, {Component, Fragment} from 'react';
import {render} from 'react-dom';
import {css} from 'react-emotion';
import uuidv4 from 'uuid/v4';
import CardContainer from '../containers/CardContainer';
import {cardStyle} from './Card';

const List = ({id, name, cardIds, boardId, onAddCard, onDeleteList, onRenameList}) => {
    let listNameInput;
    let cardNameInput, cardDescInput;

    return (
      <Fragment>
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
          <div className={cardStyle} key={uuidv4()}>
            <CardContainer listId={id} cardId={cardId} />
            <br />
            <br />
          </div>
        )}
      </Fragment>
    )
};

const listStyle = css`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  width: 15vw;
  padding: 5px;
`;

export default List;
export {listStyle};