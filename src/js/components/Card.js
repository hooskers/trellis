import React, {Component, Fragment} from 'react';
import {render} from 'react-dom';
import {css} from 'react-emotion';

const Card = ({id, name, description, done, listId, onDeleteCard, onSaveCard, onDoneCard}) => {
  let cardNameInput, cardDescInput;
  return (
      <Fragment>
          <div>Card Name: {name}</div>
          <input placeholder="Edit card name"
          ref={node => {
            cardNameInput = node;
          }} />
          <div>Card Desc: {description}</div>
          <textarea autoComplete="off"
          placeholder="Edit card description"
          ref={node => {
            cardDescInput = node;
          }} />
          <div>Done: {done ? "true" : "false"}</div>
          <button onClick={() => onDoneCard(listId, id)}>Done</button>
          <button disabled="true">Edit</button>
          <button onClick={() => {
            onSaveCard(id, cardNameInput.value, cardDescInput.value)
            cardNameInput.value = '';
            cardDescInput.value = '';
          }}>
            Save card
          </button>
          <button onClick={() => onDeleteCard(listId, id)}>Delete</button>
      </Fragment>
  );
};

export default Card;