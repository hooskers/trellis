import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import PropTypes from 'prop-types';

import { boardListStyle } from './styles/boardList';
import BoardItem from './BoardItem';

/**
 * TODO:
 * Abstract out just the list of boards to this component
 * and use it in a `Homepage` component.
 * Because of the header and background and stuff,
 * this component is restricted to being the homepage,
 * even though the actual lists of boards could be useful in other places, too.
 */


// TODO: This could probably be a funcitonal component

/**
 * Displays list of user's saved boards
 */
class BoardList extends Component {
  render() {
    const {
      boards,
      onAddBoardSubmit,
      onDeleteBoard,
      onRenameBoard,
    } = this.props;

    let newBoardInput;

    return (
      <div id="board-list" className={`${boardListStyle}`}>
        <div id="header">
          <span id="site-title">Trellis</span>
          <span id="header-links">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.github.com/hooskers/trellis"
            >
              <span className="ion-social-github" />
            </a>
          </span>
        </div>
        <span id="get-started-msg">Add a board to get started:</span>
        <form
          id="new-board-form"
          onSubmit={(e) => {
            e.preventDefault();
            // If there is no value, do nothing
            if (!newBoardInput.value.trim()) {
              return;
            }

            // Create a uuid and use it with input value to create new board
            onAddBoardSubmit(uuidv4(), newBoardInput.value.trim());
            newBoardInput.value = '';
          }}
        >
          <input
            id="new-board-input"
            placeholder="New board name"
            autoComplete="off"
            ref={(node) => {
              newBoardInput = node;
            }}
          />
          <button id="new-board-submit" type="submit">Add board</button>
        </form>

        {Object.values(boards).map(board => (
          <BoardItem
            key={board.id}
            board={board}
            onDeleteBoard={onDeleteBoard}
            onRenameBoard={onRenameBoard}
          />
        ))}
      </div>
    );
  }
}

BoardList.propTypes = {
  /** Object containing the boards */
  boards: PropTypes.shape({}).isRequired,
  /** `ADD_BOARD` action type function to add a board */
  onAddBoardSubmit: PropTypes.func.isRequired,
  /** `DELETE_BOARD` action type function to delete a board */
  onDeleteBoard: PropTypes.func.isRequired,
  /** `RENAME_BOARD` action type function to rename a board */
  onRenameBoard: PropTypes.func.isRequired,
};

export default BoardList;
