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
        {/* float to the left */}
        <div>{name}</div>
        {/* float to the right, lined up with title */}
        <div className={`ion-trash-a`} onClick={() => onDeleteList(boardId, id)}></div>

        {/* Only show this form when list title is clicked. Same behavior as card title/description */}
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

        {/* Only show this form when list title is clicked. Same behavior as card title/description */}
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
          <div className={`card ${cardStyle}`} key={uuidv4()}>
            <CardContainer listId={id} cardId={cardId} />
            <br />
            <br />
          </div>
        )}
      </Fragment>
    )
};

const listStyle = css`
  background-color: whitesmoke;
  border-radius: 5px;
  box-shadow: 0px 0px 3px 1px #0000005c;
  display: flex;
  flex-direction: column;
  width: 15vw;
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 8px;
`;

export default List;
export {listStyle};