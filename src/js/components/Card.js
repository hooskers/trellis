import React, {Component} from 'react';
import {render} from 'react-dom';
import {css} from 'react-emotion';

const Card = ({boardId, listId, card, onDeleteCard, onSaveCard, onDoneCard}) => {
  console.log(card);
  return (
      <div>
          <div>Card Name: {card.name}</div>
          <div>Card Desc: {card.description}</div>
          <div>Done: {card.done ? "true" : "false"}</div>
          {/* <button onClick={() => onDeleteCard(boardId, listId, card.id)}>Delete</button> */}
          <button onClick={() => onDoneCard(boardId, listId, card.id)}>Done</button>
          <button disabled="true">Edit</button>
      </div>
  );
};

export default Card;