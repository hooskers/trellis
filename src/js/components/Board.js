import React, {Component} from 'react';
import {render} from 'react-dom';
import {css} from 'react-emotion';
import uuidv4 from 'uuid/v4';
import ListContainer from '../containers/ListContainer';

const Board = ({id, name, boardName, listIds, onAddList, onDeleteList, onRenameBoard, match}) => {
  let input;

  return (
    <div>
      <div>Board ID: {id}</div>
      <div>Board Name: {name}</div>

      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }

        onAddList(id, input.value.trim());
        input.value='';
      }}>
        <input placeholder="New list name"
          ref={node => {
            input = node;
        }} />
        <button type="submit">Add list</button>
      </form>
      
      {listIds.map(listId => (
        <div key={uuidv4()}>
          <ListContainer boardId={id} listId={listId}/>
        </div>
      ))}
    </div>
  );
};

export default Board;