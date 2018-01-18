import React, {Component, Fragment} from 'react';
import {render} from 'react-dom';
import {css} from 'react-emotion';
import {Link} from 'react-router-dom';
import uuidv4 from 'uuid/v4';
import PropTypes from 'prop-types';

const BoardList = ({boards, onAddBoardSubmit, onDeleteBoard, onRenameBoard}) => {
  //displayBoard(null);

  let input;
  console.log(boards);

  return (
    <Fragment>
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }

        onAddBoardSubmit(input.value.trim());
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
  boards:           PropTypes.object.isRequired,
  onAddBoardSubmit: PropTypes.func.isRequired,
  onDeleteBoard:    PropTypes.func.isRequired,
  onRenameBoard:    PropTypes.func.isRequired,
};

export default BoardList;