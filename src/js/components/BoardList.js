import React, {Component, Fragment} from 'react';
import {render} from 'react-dom';
import {css} from 'react-emotion';
import {Link} from 'react-router-dom';
import uuidv4 from 'uuid/v4';
import PropTypes from 'prop-types';

/**
 * This component displays the saved boards
 * There is an input element to add new boards
 */
const BoardList = ({boards, id, onAddBoardSubmit, onDeleteBoard, onRenameBoard}) => {
  //displayBoard(null);

  let input;

  return (
    <Fragment>
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }

        onAddBoardSubmit(uuidv4(), input.value.trim());
        input.value = '';
      }}>
        <input placeholder="New board name"
          ref={node => {
            input = node;
        }} />
        <button type="submit">Add board</button>
      </form>

      {Object.values(boards).map(board => 
        <div key={uuidv4()}>
          <Link to={'board/'+board.id}>
            {board.name}
            <br />
          </Link>
          <button onClick={() => onDeleteBoard(board.id)}>Delete board</button>
        </div>
        )}
    </Fragment>
  );
};

BoardList.propTypes = {
  /** Object containing the boards */
  boards:           PropTypes.object.isRequired,
  /** Callback to add a board */
  onAddBoardSubmit: PropTypes.func.isRequired,
  /** Callback to delete a board */
  onDeleteBoard:    PropTypes.func.isRequired,
  /** Callback to rename a board */
  onRenameBoard:    PropTypes.func.isRequired,
};

export default BoardList;