import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import { css } from 'react-emotion';
import uuidv4 from 'uuid/v4';
import PropTypes from 'prop-types';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import CardContainer from '../../containers/CardContainer';
import { cardBackgroundStyle } from '../Card/Card';
import ListTitleInput from './ListTitleInput';
import NewCardInput from './NewCardInput';

/**
 * List component that shows cards that belong to the list.
 * List title element turns into an input when clicked
 * Button that adds a new card to the list
 */
class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listTitleFocused: false,
      newCardFormVisible: false,
    };
  }

  toggleTitleFocus = () => {
    this.setState({ listTitleFocused: !this.state.listTitleFocused });
  }

  toggleNewCardForm = () => {
    this.setState({ newCardFormVisible: !this.state.newCardFormVisible });
  }

  dragEnd = (result) => {
    console.log(result);
  }

  render() {
    console.log(`Rendered: ${this.props.id}`);
    console.log(this.props.cardIds);
    // See if the dnd `provided` props can be lifted into the Board component
    return (
      <div
        className={`list ${listStyle}`}
        ref={this.props.provided.innerRef}
        {...this.props.provided.draggableProps}
        {...this.props.provided.dragHandleProps}
      >
        <div className={`${listTitleStyle}`}>
          {
            !this.state.listTitleFocused ?
              <span
                role="button"
                tabIndex={0}
                className="list-title"
                onClick={this.toggleTitleFocus}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    this.toggleTitleFocus();
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
                toggleTitleFocus={this.toggleTitleFocus}
                hideInput={this.toggleTitleFocus}
              />
          }
          <span
            role="button"
            tabIndex={0}
            className="list-delete ion-trash-a"
            onClick={() => this.props.onDeleteList(this.props.boardId, this.props.id)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                this.props.onDeleteList(this.props.boardId, this.props.id);
              }
            }}
          />
        </div>

        {!this.state.newCardFormVisible ?
        <span className={`${newCardButton}`} onClick={this.toggleNewCardForm}>
          Add new card...
        </span> :
        <NewCardInput className={`${cardBackgroundStyle}`}
        listId={this.props.id}
        onAddCard={this.props.onAddCard}
        toggleVisibility={this.toggleNewCardForm}
        />}

          <Droppable droppableId={this.props.id} direction="vertical" type="CARD">
            {(provided, snapshot) => (
              <div className="cards" ref={provided.innerRef}>
                {this.props.cardIds.map((cardId, index) =>
                  <Draggable key={cardId} index={index} draggableId={cardId} type="CARD">
                    {(provided, snapshot) => (
                      <div>
                        <CardContainer provided={provided} listId={this.props.id} cardId={cardId} />
                        {provided.placeholder}
                      </div>
                    )}
                  </Draggable>
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
      </div>
    )
  }
}

List.propTypes = {
  /** ID of list */
  id:      PropTypes.string.isRequired,
  /** Name of the list */
  name:    PropTypes.string.isRequired,
  /** IDs of cards that belong to this list */
  cardIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  /** ID of board that the list belongs to */
  boardId: PropTypes.string.isRequired,
};

/** Styles for list component */
const listStyle = css`
  background-color: #d0d0d0;
  border-radius: 5px;
  box-shadow: 0px 0px 3px 1px #0000005c;
  display: flex;
  flex-direction: column;
  min-width: 15vw;
  width: 15vw;
  padding: 8px;
  margin-left: 7px;
  margin-right: 7px;
  overflow-y: auto;
  max-height: 96%;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    min-width: 85vw;
    overflow-y: scroll;
  }

  .cards {
    min-height: 20px;
  }
`;

/** Styles for list title element */
const listTitleStyle = css`
  margin-bottom: 0.25em;

  .list-title {
    float: left;
  }

  .list-delete {
    float: right;
    cursor: pointer;
    &:hover {
      color: red;
    }
  }
`;

/** Styles for add card button */
const newCardButton = css`
  ${cardBackgroundStyle}
  box-shadow: none;
  cursor: pointer;
  padding-left: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-right: 8px;
`;

export default List;