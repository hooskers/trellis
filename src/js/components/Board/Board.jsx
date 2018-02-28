import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import ListContainer from '../List/ListContainer';
import { addListBtnStyle, boardHeaderStyle, boardTitleStyle, listsStyle } from './styles/board';
// import BackgroundPickerContainer from '../BackgroundPicker/BackgroundPicker';
import * as backgrounds from '../BackgroundPicker/styles/backgrounds';

/**
 * This component displays a board that is in charge of the list components
 * Contains input to rename the board
 */

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showNewListInput: false,
      newListValue: '',
    };

    this.newListInput = null;
  }

  componentDidUpdate() {
    if (this.newListInput && this.state.showNewListInput) {
      this.newListInput.focus();
    } else if (this.newListInput && !this.state.showNewListInput) {
      this.newListInput.blur();
    }
  }

  toggleNewListInput = () => {
    if (this.state.showNewListInput) {
      this.setState({ newListValue: '' });
    }

    this.setState({ showNewListInput: !this.state.showNewListInput });
  }

  dragEnd = (result) => {
    // If the list was dragged and dropped in its orignal place, do nothing
    if (!result.destination) return;

    if (result.type === 'LIST') {
      this.props.onRearrangeList(this.props.id, result.source.index, result.destination.index);
    }

    if (result.type === 'CARD') {
      this.props.onRearrangeCard(
        result.source.droppableId,
        result.destination.droppableId,
        result.source.index,
        result.destination.index,
      );
    }
  }
  render() {
    let input;

    return (
      <Fragment>
        <div id="board-header" className={`${boardHeaderStyle}`}>
          <span id="board-title" className={`${boardTitleStyle}`}>{this.props.name}</span>
          <span
            role="button"
            tabIndex={0}
            id="add-list-btn"
            className={`${addListBtnStyle}
              ${this.state.showNewListInput ? 'new-list-form-open' : ''}
              ${!this.state.newListValue ? 'new-list-form-empty' : ''}
            `}
            onClick={() => {
              if (this.newListInput && this.newListInput.value.trim()) {
                this.props.onAddList(this.props.id, this.newListInput.value.trim());
                this.newListInput.value = '';
              }

              this.toggleNewListInput();
            }}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                if (this.newListInput && this.newListInput.value.trim()) {
                  this.props.onAddList(this.props.id, this.newListInput.value.trim());
                  this.newListInput.value = '';
                }

                this.toggleNewListInput();
              }
            }}
          >
            <form
              id="new-list-form"
              className={`${this.state.showNewListInput ? 'open' : 'closed'}`}
              onSubmit={(e) => {
                e.preventDefault();
                if (!this.newListInput.value.trim()) {
                  return;
                }

                this.props.onAddList(this.props.id, this.newListInput.value.trim());
                this.newListInput.value = '';

                this.toggleNewListInput();
              }}
            >
              <input
                placeholder="New list name"
                ref={(node) => {
                  this.newListInput = node;
                }}
                onClick={(e) => { e.stopPropagation(); }}
                onChange={() => this.setState({ newListValue: this.newListInput.value.trim() })}
                onKeyDown={e => e.key === 'Escape' && this.toggleNewListInput()}
              />
            </form>

            <span className="icon ion-plus-round" />
          </span>
          {/* <BackgroundPickerContainer /> */}
        </div>

        <DragDropContext onDragEnd={this.dragEnd}>
          <Droppable droppableId="lists" direction="horizontal" type="LIST">
            {providedDrop => (
              <div id="lists" className={`${listsStyle} ${backgrounds[this.props.background]}`} ref={providedDrop.innerRef}>
                {this.props.listIds.map((listId, index) => (
                  <Draggable key={listId} index={index} draggableId={listId} type="LIST">
                    {providedDrag => (
                      <div>
                        <ListContainer
                          provided={providedDrag}
                          boardId={this.props.id}
                          listId={listId}
                        />
                        {providedDrag.placeholder}
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Fragment>
    );
  }
}

Board.propTypes = {
  /** ID of board */
  id: PropTypes.string.isRequired,
  /** Name of the board */
  name: PropTypes.string.isRequired,
  /** IDs of the lists that belong to the board */
  listIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  background: PropTypes.string.isRequired,
  /** Callback to add list to the board */
  onAddList: PropTypes.func.isRequired,
  /** Callback to rename board */
  // onRenameBoard: PropTypes.func.isRequired,
  onRearrangeList: PropTypes.func.isRequired,
  onRearrangeCard: PropTypes.func.isRequired,
};

export default Board;
