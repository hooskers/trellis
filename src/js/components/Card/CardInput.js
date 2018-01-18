import React, {Component, Fragment} from 'react';
import {render} from 'react-dom';
import {css} from 'emotion';
import Card from './Card';

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
      console.log('onsubmit fired');
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
        // of the input's text. This call back places the cursor at the end.
        let val = e.target.value;
        e.target.value = '';
        e.target.value = val;
      }}
      style={{width: '100%', maxWidth: '100%'}}
      className={tag === 'desc' ? cardDescInput : ''} />
    </form>
  );
};

const cardDescInput = css`
  min-height: 1em;
  height: 7em;
`;

export default CardInput;