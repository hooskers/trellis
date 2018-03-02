import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import BackgroundPickerContainer from '../BackgroundPicker/BackgroundPickerContainer';
import * as backgrounds from '../BackgroundPicker/styles/backgrounds';
import { boardItemStyleWithBackground } from './styles/boardList';

/**
 * Displays overview of a board and has controls for editing the board.
 */
class BoardItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Controls whether board editing controls are displayed or not
      showEdit: false,
    };
  }

  /**
   * Toggles whether the editor is shown or not by flipping the `showEdit` state property.
   */
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
        className={`board ${boardItemStyleWithBackground(backgrounds[board.background])}`}
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
          // When the `BoardItem` background is clicked, navigate to that board
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

BoardItem.propTypes = {
  /** Object with all of the need board information */
  board: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    listIds: PropTypes.arrayOf(PropTypes.string),
    background: PropTypes.string,
  }).isRequired,
  /** `DELETE_BOARD` action function */
  onDeleteBoard: PropTypes.func.isRequired,
  /** `RENAME_BOARD` action function */
  onRenameBoard: PropTypes.func.isRequired,
};

export default BoardItem;
