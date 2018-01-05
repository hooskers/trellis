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
          cardId={this.props.id}
          placeholder={"Enter card name"}
          defaultValue={this.props.name}
          saveInput={this.props.onSaveCardName}
          hideInput={this.hideNameInput} /> :
          <div onClick={this.showNameInput}>{this.props.name}</div>
        }
        {
          this.state.descInputFocused ?
          <CardInput
          cardId={this.props.id}
          placeholder={"Enter card description"}
          defaultValue={this.props.description}
          saveInput={this.props.onSaveCardDescription}
          hideInput={this.hideDescInput} /> :
          <div className={descriptionStyle} onClick={this.showDescInput}>{this.props.description}</div>
        }
        Done: {this.props.done ? "true" : "false"}
        <button onClick={() => this.props.onDoneCard(listId, id)}>Done</button>
        <button disabled="true">Edit</button>
        <button onClick={() => {
          this.props.onSaveCard(id, cardNameInput.value, this.cardDescInput.value);
          this.cardNameInput.value = '';
          this.cardDescInput.value = '';
        }}>
          Save card
        </button>
        <button onClick={() => onDeleteCard(listId, id)}>Delete</button>
      </Fragment>
  );
  }
}

const descriptionStyle = css`
  min-height: 1em;
`;

const cardStyle = css`
  border: solid 1px red;
  border-radius: 5px;
  margin-top: 5px;
`;

const CardInput = ({cardId, placeholder, defaultValue, saveInput, hideInput}) => {
  let refNode;

  return (
    <form
    onSubmit={(e) => {
      e.preventDefault();
      saveInput(cardId, refNode.value);
      hideInput();
    }}>
      <input placeholder={placeholder}
      ref={node => {
        refNode = node;
      }}
      defaultValue={defaultValue}
      onBlur={hideInput}
      autoFocus={true}
      onFocus={e => {
        let val = e.target.value;
        e.target.value = '';
        e.target.value = val;
      }} />
    </form>
  );
};

export default Card;
export {cardStyle};