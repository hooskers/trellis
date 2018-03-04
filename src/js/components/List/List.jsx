import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import CardContainer from '../Card/CardContainer';
import ListTitleInput from './ListTitleInput';
import NewCardInput from './NewCardInput';
import { listStyle, listTitleStyle, newCardButtonStyle, deleteConfirmation } from './styles/list';
import { cardBackgroundStyle } from '../Card/styles/card';

/**
 * List component that shows cards that belong to the list.
 * List title element turns into an input when clicked
 * Button that adds a new card to the list
 */
class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showListTitleForm: false,
      showNewCardForm: false,
      showDeleteConfirmation: false,
    };
  }

  /**
   * Flips state property that shows/hides input for changing list title
   */
  toggleTitleForm = () => {
    this.setState({ showListTitleForm: !this.state.showListTitleForm });
  }

  /**
   * Flips state property that shows/hides input for adding new card to list
   */
  toggleNewCardForm = () => {
    this.setState({ showNewCardForm: !this.state.showNewCardForm });
  }

  /**
   * Flips state property that shows/hides dialog to delete a list
   */
  toggleDeleteConfirmation = () => {
    const showDeleteConfirmation = !this.state.showDeleteConfirmation;
    this.setState({ showDeleteConfirmation });
  }

  render() {
    return (
      <div
        className={`list ${listStyle} ${this.state.showDeleteConfirmation && deleteConfirmation}`}
        ref={this.props.provided.innerRef}
        {...this.props.provided.draggableProps}
      >
        <div className={`${listTitleStyle} list-title-bar`} {...this.props.provided.dragHandleProps}>
          {
            !this.state.showListTitleForm ?
              <span
                role="button"
                tabIndex={0}
                className="list-title"
                onClick={this.toggleTitleForm}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    this.toggleTitleForm();
                  }
                }}
              >
                {this.props.name}
              </span>
            :
              <ListTitleInput
                onRenameList={this.props.onRenameList}
                listId={this.props.id}
                defaultValue={this.props.name}
                toggleTitleForm={this.toggleTitleForm}
                hideInput={this.toggleTitleForm}
              />
          }
          <span
            role="button"
            tabIndex={0}
            className="list-delete ion-trash-a"
            onClick={() => this.toggleDeleteConfirmation()}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                // Show the delete dialog
                this.toggleDeleteConfirmation();
              }
            }}
          />
        </div>

        <div className="list-delete-confirmation">
          <span className="list-delete-message">Delete this list?</span>
          <button className="list-delete-confirm" onClick={() => this.props.onDeleteList(this.props.boardId, this.props.id)}>Delete</button>
          <button className="list-delete-cancel" onClick={() => this.toggleDeleteConfirmation()}>Cancel</button>
        </div>

        {!this.state.showNewCardForm ?
          <span
            role="button"
            tabIndex={0}
            className={`${newCardButtonStyle} new-card-button`}
            onClick={this.toggleNewCardForm}
            onKeyPress={e => e.key === 'Enter' && this.toggleNewCardForm()}
          >
            Add new card...
          </span> :
          <NewCardInput
            classes={`${cardBackgroundStyle}`}
            listId={this.props.id}
            onAddCard={this.props.onAddCard}
            toggleVisibility={this.toggleNewCardForm}
          />
        }

        <div className="cards-container">
          <Droppable droppableId={this.props.id} direction="vertical" type="CARD">
            {providedDrop => (
              <div className="cards" ref={providedDrop.innerRef}>
                {this.props.cardIds.map((cardId, index) => (
                  <Draggable key={cardId} index={index} draggableId={cardId} type="CARD">
                    {providedDrag => (
                      <div>
                        <CardContainer
                          provided={providedDrag}
                          listId={this.props.id}
                          cardId={cardId}
                        />
                        {providedDrag.placeholder}
                      </div>
                    )}
                  </Draggable>
                ))}
                {providedDrop.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </div>
    );
  }
}

List.propTypes = {
  /** ID of list */
  id: PropTypes.string.isRequired,
  /** Name of the list */
  name: PropTypes.string.isRequired,
  /** IDs of cards that belong to this list */
  cardIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  /** ID of board that the list belongs to */
  boardId: PropTypes.string.isRequired,
  /** `RENAME_LIST` action function */
  onRenameList: PropTypes.func.isRequired,
  /** `DELETE_LIST` action function */
  onDeleteList: PropTypes.func.isRequired,
  /** `ADD_CARD` action function */
  onAddCard: PropTypes.func.isRequired,
  /** `provided` object from React Beautiful DnD */
  provided: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default List;
