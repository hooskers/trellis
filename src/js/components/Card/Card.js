import React, {Component, Fragment} from 'react';
import {render} from 'react-dom';
import {css} from 'react-emotion';
import PropTypes from 'prop-types';

import CardInput from './CardInput';

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
    this.setState({nameInputFocused: true});
  }

  hideNameInput = () => {
    this.setState({nameInputFocused: false});
  }

  showDescInput = () => {
    this.setState({descInputFocused: true});
  }

  hideDescInput = () => {
    this.setState({descInputFocused: false});
  }

  render() {
    return (
      <div className={`card ${cardStyle} ${this.props.done ? 'done' : ''}`}>
        {
          //If the title input was clicked, show the title input
          //Otherwise, just show the title text
          this.state.nameInputFocused ?
          <CardInput
          className={`${titleStyle}`}
          tag="input"
          cardId={this.props.id}
          placeholder={"Enter card name"}
          defaultValue={this.props.name}
          saveInput={this.props.onSaveCardName}
          hideInput={this.hideNameInput} 
          /> :
          <div className={`${titleStyle}`}
          onClick={this.showNameInput}>
            {this.props.name}
          </div>
        }
        {
          //If the description input was clicked, show the description input
          //Otherwise, just show the description text
          this.state.descInputFocused ?
          <CardInput
          className={`${descriptionStyle}`}
          tag="textarea"
          cardId={this.props.id}
          placeholder={"Enter card description"}
          defaultValue={this.props.description}
          saveInput={this.props.onSaveCardDescription}
          hideInput={this.hideDescInput} 
          /> :
          <div className={`${descriptionStyle}`}
          onClick={this.showDescInput}>{
            this.props.description}
          </div>
        }
        <span className={`${doneStyle} ion-checkmark`} onClick={() => this.props.onDoneCard(this.props.listId, this.props.id)}></span>
        <span className={`delete-card ${deleteStyle} ion-trash-a`} onClick={() => this.props.onDeleteCard(this.props.listId, this.props.id)}></span>
      </div>
  );
  }
}

Card.propTypes = {
  /** ID of the card */
  id:          PropTypes.string.isRequired,
  /** Name of the card */
  name:        PropTypes.string.isRequired,
  /** Description of the card */
  description: PropTypes.string.isRequired,
  /** Card's done status */
  done:        PropTypes.bool.isRequired,
  /** ID of list that card belongs to */
  listId:      PropTypes.string.isRequired,
};

/** Common styles shared between the card's title and description elements */
const cardTitleDescStyle = css`
  background-color: whitesmoke;
  padding-top: 0.25em;
  padding-bottom: 0.25em;
  padding-left: 7px;
  padding-right: 7px;
  margin-top: 0.25em;
  margin-bottom: 0.25em;
  border-radius: 3px;
  border-left: 4px solid #0000;
  border-right: 4px solid #0000;
`;

/** Styles for card's title element */
const titleStyle = css`
  ${cardTitleDescStyle}
  font-weight: bold;
  grid-row-start: 1;
  grid-column-start: 1;
  grid-column-end: 4;
  height: 1em;
`;

/** Styles for card's description element */
const descriptionStyle = css`
  ${cardTitleDescStyle}
  grid-row-start: 2;
  grid-column-start: 1;
  grid-column-end: 4;
  min-height: 1em;
  max-height: 5em;
  word-wrap: break-word;
  overflow: auto;
`;

/** Styles for the card's done button */
const doneStyle = css`
  grid-column-start: 1;
  grid-row-start: 3;
  justify-self: start;
  cursor: pointer;
  &:hover {
    color: green;
  }
`;

/** Styles for the card's delete button */
const deleteStyle = css`
  grid-column-start: 3;
  grid-row-start: 3;
  justify-self: end;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;


/** Styles for the background card component */
const cardBackgroundStyle = css`
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: whitesmoke;
  padding: 5px;
  box-shadow: #00000061 2px 3px 7px 0px
`;

/** Styles for the card component */
const cardStyle = css`
  ${cardBackgroundStyle}
  display: grid;
  grid-template-columns: 10fr 80fr 10fr;
  grid-template-rows: 2em auto 1em;
  border-left: 4px solid #0000;
  border-right: 4px solid #0000;

  &.done {
    border-left: 4px solid mediumseagreen;
    text-decoration: line-through;
  }
`;

export default Card;
export {cardStyle, cardBackgroundStyle};