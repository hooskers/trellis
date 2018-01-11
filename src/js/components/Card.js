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
        <span className={`${doneStyle} ion-checkmark`} onClick={() => this.props.onDoneCard(this.props.listId, this.props.id)}></span>
        <span className={`delete-card ${deleteStyle} ion-trash-a`} onClick={() => this.props.onDeleteCard(this.props.listId, this.props.id)}></span>
      </Fragment>
  );
  }
}

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
  color: green;
  cursor: pointer;
`;

const deleteStyle = css`
  grid-column-start: 3;
  grid-row-start: 3;
  justify-self: end;
  color: red;
  cursor: pointer;
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

const CardInput = ({tag, className, cardId, placeholder, defaultValue, saveInput, hideInput}) => {
  //Since this variable is capitalized, using it as a tag name will make React
  // call `createComponent` with the value of the `tag` string prop.
  // It is used here let us show either an `input` or `textarea` element.
  const TagName = tag;
  let refNode;

  const cardDescInput = css`
    min-height: 1em;
    height: 7em;
  `;

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
      }}
      style={{width: '100%', maxWidth: '100%'}}
      className={tag === 'desc' ? cardDescInput : ''} />
    </form>
  );
};

export default Card;
export {cardStyle};