import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import BackgroundPickerContainer from '../BackgroundPicker/BackgroundPickerContainer';
import * as backgrounds from '../BackgroundPicker/styles/backgrounds';
import { boardWithBackgroundStyle } from './styles/boardList';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showEdit: false,
    };
  }

  toggleEdit = () => {
    const { showEdit } = this.state;
    this.setState({ showEdit: !showEdit });
  }

  render() {
    const {
      board,
      onDeleteBoard,
      onRenameBoard,
    } = this.props;

    let renameBoardInput;

    return (
      <div
        className={`board ${boardWithBackgroundStyle(backgrounds[board.background])}`}
        key={board.id}
      >
        <div className="board-info-container">
          {this.state.showEdit &&
            <form
              className="board-editor"
              onSubmit={(e) => {
                e.preventDefault();
                if (!renameBoardInput.value.trim()) {
                  return;
                }

                onRenameBoard(board.id, renameBoardInput.value.trim());
              }}
            >
              <div className="background-picker">
                <BackgroundPickerContainer boardId={board.id} />
              </div>
              <input
                className="rename-board-input"
                placeholder="Rename board"
                autoComplete="off"
                defaultValue={board.name}
                ref={(node) => {
                  renameBoardInput = node;
                }}
              />
              <button className="rename-board-submit">Rename board</button>
              <span
                role="button"
                tabIndex={0}
                className="delete-board ion-trash-a"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  onDeleteBoard(board.id);
                }}
                onKeyPress={e => e.key === 'Enter' && onDeleteBoard(board.id)}
              />
              <span
                role="button"
                tabIndex={0}
                className="edit-board ion-close-round"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  this.toggleEdit();
                }}
                onKeyPress={e => e.key === 'Enter' && this.toggleEdit()}
              />
            </form>
          }
          {!this.state.showEdit &&
            <Link
              href={`board/${board.id}`}
              to={`board/${board.id}`}
              className="board-link"
            >
              <span className="board-name">{board.name}</span>
              <span
                role="button"
                tabIndex={0}
                className="edit-board ion-edit"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  this.toggleEdit();
                }}
                onKeyPress={e => e.key === 'Enter' && this.toggleEdit()}
              />
            </Link>
          }
        </div>
      </div>
    );
  }
}

Board.propTypes = {
  board: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    listIds: PropTypes.arrayOf(PropTypes.string),
    background: PropTypes.string,
  }).isRequired,
  onDeleteBoard: PropTypes.func.isRequired,
  onRenameBoard: PropTypes.func.isRequired,
};

export default Board;
