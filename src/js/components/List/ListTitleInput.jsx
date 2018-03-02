import React from 'react';
import PropTypes from 'prop-types';

/**
 * Input that shows when you click the list title
 * Allows user to rename the list
 */
const ListTitleInput = ({
  onRenameList,
  listId,
  defaultValue,
  hideInput,
}) => {
  let listNameInput;
  return (
    <form
      style={{ marginBottom: 0 }}
      className="list-title"
      onSubmit={(e) => {
        e.preventDefault();
        if (listNameInput.value.trim() === '') {
          return;
        }

        onRenameList(listId, listNameInput.value.trim());
        hideInput();
      }}
    >
      <input
        placeholder="Rename list"
        autoFocus // eslint-disable-line jsx-a11y/no-autofocus
        defaultValue={defaultValue}
        onFocus={(e) => {
          // React `autocomplete` attribute places the cursor at the beginning
          // of the input's text. This callback places the cursor at the end.
          const val = e.target.value;
          e.target.value = '';
          e.target.value = val;
        }}
        onBlur={(e) => {
          e.preventDefault();
          // If there is no value in input, just hide the input
          if (listNameInput.value.trim() === '') {
            hideInput();
            return;
          }

          // If there is a value, rename the list and hide the input
          onRenameList(listId, listNameInput.value.trim());
          hideInput();
        }}
        ref={(node) => {
          listNameInput = node;
        }}
      />
    </form>
  );
};

ListTitleInput.propTypes = {
  /** ID of list */
  listId: PropTypes.string.isRequired,
  /** Value to show when showing input */
  defaultValue: PropTypes.string.isRequired,
  /** Callback to rename the list */
  onRenameList: PropTypes.func.isRequired,
  /** Callback to hide the input and show the title */
  hideInput: PropTypes.func.isRequired,
};

export default ListTitleInput;
