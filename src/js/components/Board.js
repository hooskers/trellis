import React, {Component, Fragment} from 'react';
import {render} from 'react-dom';
import {css} from 'react-emotion';
import uuidv4 from 'uuid/v4';
import PropTypes from 'prop-types';

import ListContainer from '../containers/ListContainer';
import {listStyle} from './List/List';

/**
 * This component displays a board that is in charge of the list components
 * Contains input to rename the board
 */
const Board = ({id, name, listIds, onAddList, onRenameBoard}) => {
  let input;

  return (
    <Fragment>
      <div id="board-header" className={`${boardHeaderStyle}`}>
        <div id="board-info">
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
        </div>
      </div>
      
      <div id="lists" className={`${listsStyle}`}>
        {listIds.map(listId => (
          <div className={`list ${listStyle}`} key={uuidv4()}>
            <ListContainer boardId={id} listId={listId}/>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

Board.propTypes = {
  /** ID of board */
  id: PropTypes.string.isRequired,
  /** Name of the board */
  name: PropTypes.string.isRequired,
  /** IDs of the lists that belong to the board */
  listIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  /** Callback to add list to the board */
  onAddList: PropTypes.func.isRequired,
  /** Callback to rename board */
  onRenameBoard: PropTypes.func.isRequired,
}

const boardHeaderStyle = css`
  position: sticky;
  left: 0px;
  padding-left: 15px;
  padding-top: 10px;
  margin-bottom: 20px;
  box-shadow: 0px 1px 7px 3px #0000001f;
`;

const listsStyle = css`
  display: flex;
  margin-left: 7px;
  margin-right: 7px;
  overflow-x: auto;
  overflow-y: hidden;
`;

export default Board;