import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import ListContainer from '../List/ListContainer';
import { addListBtnStyle, boardHeaderStyle, boardTitleStyle, listsStyle } from './styles/board';
import * as backgrounds from '../BackgroundPicker/styles/backgrounds';

/**
 * This component displays a board that is in charge of the list components
 * Loops through a board's list IDs and renders a `List` component for each.
 * This is where the root of React Beautiful DnD's `DragDropContext` lives.
 * The `lists` container element is a `Droppable` for lists which are `Draggables`
 * The `DragDropContext` is also accessed in the `List` and `Card` components
 */
class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Controls whether form for new lists is visible to user or not.
      showNewListInput: false,
      // Store current value of new list form
      newListValue: '',
    };

    // Instance var to store new list for ref
    this.newListInput = null;
  }

  componentDidUpdate() {
    if (this.newListInput && this.state.showNewListInput) {
      this.newListInput.focus();
    } else if (this.newListInput && !this.state.showNewListInput) {
      this.newListInput.blur();
    }
  }

  /**
   * Toggles the state property that controls visibility of
   * the input to create new lists.
   */
  toggleNewListInput = () => {
    if (this.state.showNewListInput) {
      this.setState({ newListValue: '' });
    }

    this.setState({ showNewListInput: !this.state.showNewListInput });
  }

  /**
   * Callback for React Beautiful DnD's `onDragEnd` event.
   * Triggered when a `Droppable` is dropped.
   * Handles action types for `List` and `Card` components being dropped.
   */
  dragEnd = (result) => {
    // If the draggable was dropped in its orignal place, do nothing.
    if (!result.destination) return;

    // If a list was dragged and dropped, call the `REARRANGE_LIST` action.
    if (result.type === 'LIST') {
      this.props.onRearrangeList(
        this.props.id,
        result.source.index,
        result.destination.index,
      );
    }

    // If a card was dragged and dropped, call the `REARRANGE_CARD` action.
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
    const { showNewListInput, newListValue } = this.state;

    return (
      <Fragment>
        <div
          id="board-header"
          className={`${boardHeaderStyle}`}
        >
          <span
            id="board-title"
            className={`${boardTitleStyle} ${showNewListInput ? 'new-list-form-open' : ''}`}
          >
            {this.props.name}
          </span>
          <span
            role="button"
            tabIndex={0}
            id="add-list-btn"
            className={`${addListBtnStyle} ${showNewListInput ? 'new-list-form-open' : ''} ${!newListValue ? 'new-list-form-empty' : ''}`}
            onClick={() => {
              // If input exists and has a value, use value as name for new list on board.
              if (this.newListInput && this.newListInput.value.trim()) {
                this.props.onAddList(this.props.id, this.newListInput.value.trim());
                this.newListInput.value = '';
              }

              // Close the list after submitting
              this.toggleNewListInput();
            }}
            onKeyPress={(e) => {
              // If input exists and has a value, use value as name for new list on board.
              if (e.key === 'Enter') {
                if (this.newListInput && this.newListInput.value.trim()) {
                  this.props.onAddList(this.props.id, this.newListInput.value.trim());
                  this.newListInput.value = '';
                }

                // Close the list after submitting
                this.toggleNewListInput();
              }
            }}
          >
            <form
              id="new-list-form"
              className={`${showNewListInput ? 'open' : 'closed'}`}
              onSubmit={(e) => {
                e.preventDefault();

                // If there is no value in the input, do nothing.
                if (!this.newListInput.value.trim()) {
                  return;
                }

                // Add list to board and reset the input's value
                this.props.onAddList(this.props.id, this.newListInput.value.trim());
                this.newListInput.value = '';

                // Close the form after submitting it
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
          <div
            id="lists-container"
            style={{ overflowX: 'auto', overflowY: 'hidden' }}
          >
            <Droppable droppableId="lists" direction="horizontal" type="LIST">
              {providedDrop => (
                <div
                  id="lists"
                  className={`${listsStyle} ${backgrounds[this.props.background]}`}
                  ref={providedDrop.innerRef}
                >
                  {this.props.listIds.map((listId, index) => (
                    <Draggable key={listId} index={index} draggableId={listId} type="LIST">
                      {providedDrag => (
                        <Fragment>
                          <ListContainer
                            provided={providedDrag}
                            boardId={this.props.id}
                            listId={listId}
                          />
                          {providedDrag.placeholder}
                        </Fragment>
                      )}
                    </Draggable>
                  ))}
                  {providedDrop.placeholder}
                </div>
              )}
            </Droppable>
          </div>
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
  /** ID of board's background.  */
  background: PropTypes.string.isRequired,
  /** `ADD_LIST` action function to add list to the board */
  onAddList: PropTypes.func.isRequired,
  /** `REARRANGE_LIST` action function to rearrange list order in board */
  onRearrangeList: PropTypes.func.isRequired,
  /** `REARRANGE_CARD` action function to move cards between lists.
   * (This is needed in this `Board` component because
   * this is where the `DragDropContext` lives.)
   */
  onRearrangeCard: PropTypes.func.isRequired,
  /** `RENAME_BOARD` action function to rename board */
  // onRenameBoard: PropTypes.func.isRequired,
};

export default Board;
