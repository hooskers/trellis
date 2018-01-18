import React, {Component, Fragment} from 'react';
import {render} from 'react-dom';
import {css} from 'react-emotion';

const NewCardInput = ({listId, onAddCard, toggleVisibility}) => {
  let cardNameInput, cardDescInput;

  return (
    <form className={`new-card ${newCardFormStyle}`}
    onSubmit={e => {
      e.preventDefault();
      if (!cardNameInput.value.trim()) {
        toggleVisibility();
        return;
      }

      onAddCard(
        listId,
        cardNameInput.value.trim(),
        cardDescInput.value,
      );

      cardNameInput.value = '';
      cardDescInput.value = '';

      toggleVisibility();
    }}>
      <input className='new-title'
      placeholder="New card name"
      autoFocus={true}
      onFocus={e => {
        //React `autocomplete` attribute places the cursor at the beginning
        // of the input's text. This call back places the cursor at the end.
        let val = e.target.value;
        e.target.value = '';
        e.target.value = val;
      }}
      onBlur={(e) => {
        e.preventDefault();

        toggleVisibility();
      }}
      ref={node => {
        cardNameInput = node;
      }} />

      <textarea className='new-description'
      autoComplete="off"
      placeholder="New card description"
      ref={node => {
        cardDescInput = node;
      }} />

      <button className='new-card-submit' type="submit">Add card</button>
    </form>
  )
}

const newCardFormStyle = css`
  input.new-title {
    width: 100%;
  }

  textarea.new-description {
    width: 100%;
  }

  button.new-card-submit {
    width: 100%;
  }
`;

export default NewCardInput;