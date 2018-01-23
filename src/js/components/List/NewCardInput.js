import React, {Component, Fragment} from 'react';
import {render} from 'react-dom';
import {css} from 'react-emotion';
import PropTypes from 'prop-types';

/**
 * This component is a form that shows in a list that allows
 *  the user to add a new card to the list
 */
const NewCardInput = ({listId, onAddCard, toggleVisibility, className}) => {
  let cardNameInput, cardDescInput;

  //The onblur event does not work on the form element
  //Click another input inside the form fires onblur before onfocus
  //So, on mousedown, we switch one of these bools to true
  //If any of them are true, we do not hide the form
  let cardNameInputFocus = false;
  let cardDescInputFocus = false;
  let submitFocus = false;

  return (
    <form className={`new-card ${className} ${newCardFormStyle}`}
    onBlur={(e) => {
      e.preventDefault();
      
      //If anything has focus, or any input has a value, don't hide the form
      if (cardNameInputFocus || cardDescInputFocus || submitFocus || 
        cardNameInput.value.trim() || cardDescInput.value.trim()) {
        return;
      }

      toggleVisibility();
    }}
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
      onMouseDown={(e) => {
        cardNameInputFocus = true;
      }}
      onFocus={e => {
        //React `autocomplete` attribute places the cursor at the beginning
        // of the input's text. This callback places the cursor at the end.
        let val = e.target.value;
        e.target.value = '';
        e.target.value = val;
      }}
      onBlur={(e) => {
        e.preventDefault();
        cardNameInputFocus = false;
      }}
      ref={node => {
        cardNameInput = node;
      }} />

      <textarea className='new-description'
      autoComplete="off"
      placeholder="New card description"
      onMouseDown={(e) => {
        cardDescInputFocus = true;
      }}
      onBlur={(e) => {
        e.preventDefault();
        cardDescInputFocus = false;
      }}
      ref={node => {
        cardDescInput = node;
      }} />

      <button className='new-card-submit' type="submit" onMouseDown={(e) => {submitFocus = true;}}>
        Add card
      </button>
    </form>
  );
};

NewCardInput.propTypes = {
  /** ID of list */
  listId:           PropTypes.string.isRequired,
  /** Callback to add the new card to the list */
  onAddCard:        PropTypes.func.isRequired,
  /** Callback to show/hide the form */
  toggleVisibility: PropTypes.func.isRequired,
};

/** Styles for the form to add a new card */
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