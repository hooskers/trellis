import React from 'react';
import PropTypes from 'prop-types';

import cardDescInputStyle from './styles/cardInput';
import cardListInputStyle from '../../styles/inputs';

/**
 * Input that shows when you click on the title or description elements of `Card` component.
 * The `tag` prop should either be `input` or `textarea`.
 *  That will be the element that gets rendered.
 */
const CardInput = ({
  tag,
  classes,
  cardId,
  placeholder,
  defaultValue,
  saveInput,
  hideInput,
}) => {
  // Since this variable is capitalized, using it as a tag name will make React
  // call `createComponent` with the value of the `tag` string prop.
  // It is used here to let us dynamically show an `input` or `textarea` element.
  const TagName = tag;
  let refNode;

  return (
    <form
      className={classes}
      onSubmit={(e) => {
        e.preventDefault();
        saveInput(cardId, refNode.value);
        hideInput();
      }}
    >
      <TagName
        placeholder={placeholder}
        ref={(node) => {
          refNode = node;
        }}
        defaultValue={defaultValue}
        onBlur={(e) => {
          e.preventDefault();
          saveInput(cardId, refNode.value);
          hideInput();
        }}
        autoFocus
        onFocus={(e) => {
          // React `autocomplete` attribute places the cursor at the beginning
          // of the input's text. This callback places the cursor at the end.
          const val = e.target.value;
          e.target.value = '';
          e.target.value = val;
        }}
        style={{ width: '100%', maxWidth: '100%' }}
        className={`${cardListInputStyle} ${tag === 'textarea' ? cardDescInputStyle : ''}`}
      />
    </form>
  );
};

CardInput.propTypes = {
  /** Name of tag (`input` or `textarea`). This is used as element tag in render method */
  tag: PropTypes.string.isRequired,
  /** Classes to pass into this component */
  classes: PropTypes.string,
  /** ID of card */
  cardId: PropTypes.string.isRequired,
  /** Text to show as in `placeholder` attribute */
  placeholder: PropTypes.string.isRequired,
  /**
   * Text that displays when input is focused.
   * Should match currently saved title or description of card.
   */
  defaultValue: PropTypes.string.isRequired,
  /** Callback to use to save the input */
  saveInput: PropTypes.func.isRequired,
  /** Callback to use to hide the input */
  hideInput: PropTypes.func.isRequired,
};

CardInput.defaultProps = {
  classes: '',
};

export default CardInput;
