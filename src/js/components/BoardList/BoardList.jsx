import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import PropTypes from 'prop-types';

import { boardListStyle } from './styles/boardList';
import Board from './Board';

/**
 * This component displays the saved boards
 * There is an input element to add new boards
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
            if (!newBoardInput.value.trim()) {
              return;
            }

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
          <Board
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
  /** Function to add a board */
  onAddBoardSubmit: PropTypes.func.isRequired,
  /** Function to delete a board */
  onDeleteBoard: PropTypes.func.isRequired,
  /** Function to rename a board */
  onRenameBoard: PropTypes.func.isRequired,
};

export default BoardList;
