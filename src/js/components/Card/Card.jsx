import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CardInput from './CardInput';
import { cardStyle, doneStyle, deleteStyle, titleStyle, descriptionStyle } from './styles/card';

/**
 * Card element that shows name, description, done/delete buttons.
 * Clicking the title element will display an input in its place to change
 *  using the `showNameInput` and `hideNameInput` functions.
 * Clicking the description element will dispaly an input in its place to change
 *  using the `showDescInput` and `hideDescInput` functions.
 */
class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameInputFocused: false,
      descInputFocused: false,
    };

    this.cardNameInput = null;
    this.cardDescInput = null;
  }

  showNameInput = () => {
    this.setState({ nameInputFocused: true });
  }

  hideNameInput = () => {
    this.setState({ nameInputFocused: false });
  }

  showDescInput = () => {
    this.setState({ descInputFocused: true });
  }

  hideDescInput = () => {
    this.setState({ descInputFocused: false });
  }

  render() {
    return (
      <div
        className={`card ${cardStyle} ${this.props.done ? 'done' : ''}`}
        ref={this.props.provided.innerRef}
        {...this.props.provided.draggableProps}
        {...this.props.provided.dragHandleProps}
      >
        {
          // If the title input was clicked, show the title input
          // Otherwise, just show the title text
          this.state.nameInputFocused ?
            <CardInput
              className={`${titleStyle}`}
              tag="input"
              cardId={this.props.id}
              placeholder="Enter card name"
              defaultValue={this.props.name}
              saveInput={this.props.onSaveCardName}
              hideInput={this.hideNameInput}
            /> :
            <div
              role="button"
              tabIndex={0}
              onKeyPress={e => e.key === 'Enter' && this.showNameInput}
              className={`${titleStyle}`}
              onClick={this.showNameInput}
            >
              {this.props.name}
            </div>
        }
        {
          // If the description input was clicked, show the description input
          // Otherwise, just show the description text
          this.state.descInputFocused ?
            <CardInput
              className={`${descriptionStyle}`}
              tag="textarea"
              cardId={this.props.id}
              placeholder="Enter card description"
              defaultValue={this.props.description}
              saveInput={this.props.onSaveCardDescription}
              hideInput={this.hideDescInput}
            /> :
            <div
              role="button"
              tabIndex={0}
              className={`${descriptionStyle}`}
              onClick={this.showDescInput}
              onKeyPress={e => e.key === 'Enter' && this.showDescInput}
            >
              {this.props.description}
            </div>
        }
        <span
          role="button"
          tabIndex={0}
          className={`${doneStyle} ion-checkmark`}
          onClick={() => this.props.onDoneCard(this.props.listId, this.props.id)}
          onKeyPress={
            e => e.key === 'Enter' && this.props.onDoneCard(this.props.listId, this.props.id)
          }
        />
        <span
          role="button"
          tabIndex={0}
          className={`delete-card ${deleteStyle} ion-trash-a`}
          onClick={() => this.props.onDeleteCard(this.props.listId, this.props.id)}
          onKeyPress={
            e => e.key === 'Enter' && this.props.onDeleteCard(this.props.listId, this.props.id)
          }
        />
      </div>
    );
  }
}

Card.propTypes = {
  /** ID of the card */
  id: PropTypes.string.isRequired,
  /** Name of the card */
  name: PropTypes.string.isRequired,
  /** Description of the card */
  description: PropTypes.string.isRequired,
  /** Card's done status */
  done: PropTypes.bool.isRequired,
  /** ID of list that card belongs to */
  listId: PropTypes.string.isRequired,
  onSaveCardName: PropTypes.func.isRequired,
  onSaveCardDescription: PropTypes.func.isRequired,
  onDoneCard: PropTypes.func.isRequired,
  onDeleteCard: PropTypes.func.isRequired,
};

export default Card;
