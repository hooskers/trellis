import React from 'react';
import { Link } from 'react-router-dom';
import uuidv4 from 'uuid/v4';
import PropTypes from 'prop-types';

import { boardListStyle, boardWithBackgroundStyle } from './styles/boardList';

/**
 * This component displays the saved boards
 * There is an input element to add new boards
 */
const BoardList = ({
  boards,
  onAddBoardSubmit,
  onDeleteBoard,
  onRenameBoard,
}) => {
  let input;

  return (
    <div id="board-list" className={`${boardListStyle}`}>
      <div id="header">
        <span id="site-title">Trellis</span>
        <span id="header-links">
          <a target="_blank" className="ion-social-github" href="https://www.github.com/hooskers/trellis" />
        </span>
      </div>
      <form
        id="new-board-form"
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }

          onAddBoardSubmit(uuidv4(), input.value.trim());
          input.value = '';
        }}
      >
        <input
          id="new-board-input"
          placeholder="New board name"
          ref={(node) => {
            input = node;
          }}
        />
        <button id="new-board-submit" type="submit">Add board</button>
      </form>

      {Object.values(boards).map(board => (
        <div
          className={`board ${boardWithBackgroundStyle('background-color: white')}`}
          key={board.id}
        >
          <div className="board-info-container">
            <Link
              href={`board/${board.id}`}
              to={`board/${board.id}`}
            >
              {board.name}
              <br />
            </Link>
            <span
              role="button"
              tabIndex={0}
              className="delete-board ion-trash-a"
              onClick={() => onDeleteBoard(board.id)}
              onKeyPress={e => e.key === 'Enter' && onDeleteBoard(board.id)}
            />
          </div>
        </div>
        ))}
    </div>
  );
};

BoardList.propTypes = {
  /** Object containing the boards */
  boards: PropTypes.shape({}).isRequired,
  /** Callback to add a board */
  onAddBoardSubmit: PropTypes.func.isRequired,
  /** Callback to delete a board */
  onDeleteBoard: PropTypes.func.isRequired,
  /** Callback to rename a board */
  onRenameBoard: PropTypes.func.isRequired,
};

export default BoardList;
