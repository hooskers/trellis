import React, {Component} from 'react';
import {render} from 'react-dom';
import {css} from 'react-emotion';

const Card = ({boardId, listId, card, onDeleteCard, onSaveCard, onDoneCard}) => {
  let cardNameInput, cardDescInput;
  return (
      <div>
          <div>Card Name: {card.name}</div>
          <input placeholder="Edit card name"
          ref={node => {
            cardNameInput = node;
          }} />
          <button onClick={() => onSaveCard(boardId, listId, card.id, cardNameInput.value, card.description)}>Rename card</button>
          <div>Card Desc: {card.description}</div>
          <textarea autoComplete="off"
          placeholder="Edit card description"
          ref={node => {
            cardDescInput = node;
          }} />
          <button
          onClick={() => onSaveCard(boardId, listId, card.id, card.name, cardDescInput.value)}>
            Save descrition
          </button>
          <div>Done: {card.done ? "true" : "false"}</div>
          {/* <button onClick={() => onDeleteCard(boardId, listId, card.id)}>Delete</button> */}
          <button onClick={() => onDoneCard(boardId, listId, card.id)}>Done</button>
          <button disabled="true">Edit</button>
      </div>
  );
};

export default Card;