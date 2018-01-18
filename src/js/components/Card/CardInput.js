import React, {Component, Fragment} from 'react';
import {render} from 'react-dom';
import {css} from 'emotion';
import PropTypes from 'prop-types';

import Card from './Card';

/**
 * Input that shows when you click on the title or description elements.
 * The `tag` prop should either be `input` or `textarea`. 
 *  That will be the element that gets rendered.
 */
const CardInput = ({tag, className, cardId, placeholder, defaultValue, saveInput, hideInput}) => {
  //Since this variable is capitalized, using it as a tag name will make React
  // call `createComponent` with the value of the `tag` string prop.
  // It is used here let us show either an `input` or `textarea` element.
  const TagName = tag;
  let refNode;

  return (
    <form
    className={className}
    onSubmit={(e) => {
      e.preventDefault();
      saveInput(cardId, refNode.value);
      hideInput();
    }}>
      <TagName placeholder={placeholder}
      ref={node => {
        refNode = node;
      }}
      defaultValue={defaultValue}
      onBlur={(e) => {
        e.preventDefault();
        saveInput(cardId, refNode.value);
        hideInput();
      }}
      autoFocus={true}
      onFocus={e => {
        //React `autocomplete` attribute places the cursor at the beginning
        // of the input's text. This callback places the cursor at the end.
        let val = e.target.value;
        e.target.value = '';
        e.target.value = val;
      }}
      style={{width: '100%', maxWidth: '100%'}}
      className={tag === 'desc' ? cardDescInput : ''} />
    </form>
  );
};

CardInput.propTypes = {
  /** Name of tag (`input` or `textarea`). This is used as element tag in render method */
  tag:          PropTypes.string.isRequired,
  /** Classes to pass into this component */
  className:    PropTypes.string,
  /** ID of card */
  cardId:       PropTypes.string.isRequired,
  /** Text to show as in `placeholder` attribute */
  placeholder:  PropTypes.string.isRequired,
  /** 
   * Text that displays when input is focused. 
   * Should match currently saved title or description of card.
   */
  defaultValue: PropTypes.string.isRequired,
  /** Callback to use to save the input */
  saveInput:    PropTypes.func.isRequired,
  /** Callback to use to hide the input */
  hideInput:    PropTypes.func.isRequired,
};

/** Style for card description input */
const cardDescInput = css`
  min-height: 1em;
  height: 7em;
`;

export default CardInput;