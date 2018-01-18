import React, {Component, Fragment} from 'react';
import {render} from 'react-dom';

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
        // of the input's text. This call back places the cursor at the end.
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
  )
}

export default ListTitleInput;