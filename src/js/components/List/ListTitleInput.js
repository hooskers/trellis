import React, {Component, Fragment} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';

const ListTitleInput = ({onRenameList, listId, defaultValue, hideInput}) => {
  let listNameInput;
  return (
    <form
    style={{marginBottom: 0}}
    className='list-title'
    onSubmit={e => {
      e.preventDefault();
      if (listNameInput.value.trim() === "") {
        return;
      }

      onRenameList(listId, listNameInput.value.trim());
      hideInput();
    }}
    >
      <input
      placeholder="Rename list"
      autoFocus={true}
      defaultValue={defaultValue}
      onFocus={e => {
        //React `autocomplete` attribute places the cursor at the beginning
        // of the input's text. This callback places the cursor at the end.
        let val = e.target.value;
        e.target.value = '';
        e.target.value = val;
      }}
      onBlur={(e) => {
        e.preventDefault();
        if (listNameInput.value.trim() === "") {
          hideInput();
          return;
        }

        onRenameList(listId, listNameInput.value.trim());
        hideInput();
      }}
      ref={node => {
        listNameInput = node;
      }} />
    </form>
  );
};

ListTitleInput.propTypes = {
  listId:       PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  onRenameList: PropTypes.func.isRequired,
  hideInput:    PropTypes.func.isRequired,
};

export default ListTitleInput;