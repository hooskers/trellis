import React, {Component, Fragment} from 'react';
import {render} from 'react-dom';
import {css} from 'react-emotion';

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
          <div className={`${titleStyle}`}onClick={this.showNameInput}>{this.props.name}</div>
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
        <span className={`${doneStyle}`} onClick={() => this.props.onDoneCard(this.props.listId, this.props.id)}>D</span>
        <span className={`delete-card ${deleteStyle}`} onClick={() => this.props.onDeleteCard(this.props.listId, this.props.id)}>X</span>
      </Fragment>
  );
  }
}

const titleStyle = css`
  background-color: white;
  font-weight: bold;
  grid-row-start: 1;
  grid-column-start: 1;
  grid-column-end: 4;
  padding-top: 0.25em;
  padding-bottom: 0.25em;
  margin-top: 0.25em;
  margin-bottom: 0.25em;
  width: 100%;
  height: 1em;
  border-radius: 2px;
`;

const descriptionStyle = css`
  background-color: white;
  min-height: 1em;
  grid-row-start: 2;
  grid-column-start: 1;
  grid-column-end: 4;
  padding-top: 0.25em;
  padding-bottom: 0.25em;
  margin-top: 0.25em;
  margin-bottom: 0.25em;
  width: 100%;
  max-height: 5em;
  word-wrap: break-word;
  overflow: scroll;
  border-radius: 2px;
`;

const doneStyle = css`
  grid-column-start: 1;
  grid-row-start: 3;
  justify-self: start;
`;

const deleteStyle = css`
  grid-column-start: 3;
  grid-row-start: 3;
  justify-self: end;
`;

const cardStyle = css`
  border: solid 1px red;
  border-radius: 5px;
  margin-top: 5px;
  background-color: lightgray;
  padding: 5px;
  display: grid;
  grid-template-columns: 10fr 80fr 10fr;
  grid-template-rows: 2em auto 1em;
`;

const CardInput = ({tag, className, cardId, placeholder, defaultValue, saveInput, hideInput}) => {
  //Since this variable is capitalized, using it as a tag name will make React
  // call `createComponent` with the value of the `tag` string prop.
  // It is used here let us show either an `input` or `textarea` element.
  const TagName = tag;
  let refNode;

  return (
    <form
    className={className}
    onSubmit={(e) => {
      console.log('onsubmit fired');
      e.preventDefault();
      saveInput(cardId, refNode.value);
      hideInput();
    }}>
      <TagName placeholder={placeholder}
      ref={node => {
        refNode = node;
      }}
      defaultValue={defaultValue}
      onBlur={(e) => {
        e.preventDefault();
        saveInput(cardId, refNode.value);
        hideInput();
      }}
      autoFocus={true}
      onFocus={e => {
        //React `autocomplete` attribute places the cursor at the beginning
        // of the input's text. This call back places the cursor at the end.
        let val = e.target.value;
        e.target.value = '';
        e.target.value = val;
      }} />
    </form>
  );
};

export default Card;
export {cardStyle};