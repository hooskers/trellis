import React, {Component, Fragment} from 'react';
import {render} from 'react-dom';
import {css} from 'react-emotion';
import PropTypes from 'prop-types';
import CardInput from './CardInput';

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
      <Fragment>
        {
          this.state.nameInputFocused ?
          <CardInput
          className={`${titleStyle}`}
          tag="input"
          cardId={this.props.id}
          placeholder={"Enter card name"}
          defaultValue={this.props.name}
          saveInput={this.props.onSaveCardName}
          hideInput={this.hideNameInput} /> :
          <div className={`${titleStyle}`} onClick={this.showNameInput}>{this.props.name}</div>
        }
        {
          this.state.descInputFocused ?
          <CardInput
          className={`${descriptionStyle}`}
          tag="textarea"
          cardId={this.props.id}
          placeholder={"Enter card description"}
          defaultValue={this.props.description}
          saveInput={this.props.onSaveCardDescription}
          hideInput={this.hideDescInput} /> :
          <div className={descriptionStyle} onClick={this.showDescInput}>{this.props.description}</div>
        }
        <span className={`${doneStyle} ion-checkmark`} onClick={() => this.props.onDoneCard(this.props.listId, this.props.id)}></span>
        <span className={`delete-card ${deleteStyle} ion-trash-a`} onClick={() => this.props.onDeleteCard(this.props.listId, this.props.id)}></span>
      </Fragment>
  );
  }
}

Card.propTypes = {
  id:          PropTypes.string.isRequired,
  name:        PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  done:        PropTypes.bool.isRequired,
  listId:      PropTypes.string.isRequired,
};

const cardTitleDescStyle = css`
  background-color: white;
  padding-top: 0.25em;
  padding-bottom: 0.25em;
  padding-left: 7px;
  padding-right: 7px;
  margin-top: 0.25em;
  margin-bottom: 0.25em;
  border-radius: 3px;
`;

const titleStyle = css`
  ${cardTitleDescStyle}
  font-weight: bold;
  grid-row-start: 1;
  grid-column-start: 1;
  grid-column-end: 4;
  height: 1em;
`;

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

const doneStyle = css`
  grid-column-start: 1;
  grid-row-start: 3;
  justify-self: start;
  cursor: pointer;
  &:hover {
    color: green;
  }
`;

const deleteStyle = css`
  grid-column-start: 3;
  grid-row-start: 3;
  justify-self: end;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;

const cardStyle = css`
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: lightgray;
  padding: 5px;
  display: grid;
  grid-template-columns: 10fr 80fr 10fr;
  grid-template-rows: 2em auto 1em;
  box-shadow: #00000061 2px 3px 7px 0px
`;

export default Card;
export {cardStyle};