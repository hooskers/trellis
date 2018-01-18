import React, {Component, Fragment} from 'react';
import {render} from 'react-dom';
import {css} from 'react-emotion';
import uuidv4 from 'uuid/v4';
import PropTypes from 'prop-types';

import ListContainer from '../containers/ListContainer';
import {listStyle} from './List/List';

const Board = ({id, name, listIds, onAddList, onRenameBoard}) => {
  let input;

  return (
    <Fragment>
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
        <div className={`list ${listStyle}`} key={uuidv4()}>
          <ListContainer boardId={id} listId={listId}/>
        </div>
      ))}
    </Fragment>
  );
};

Board.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  listIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAddList: PropTypes.func.isRequired,
  onRenameBoard: PropTypes.func.isRequired,
}

export default Board;