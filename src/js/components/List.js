import React, {Component, Fragment} from 'react';
import {render} from 'react-dom';
import {css} from 'react-emotion';
import uuidv4 from 'uuid/v4';
import CardContainer from '../containers/CardContainer';
import {cardStyle} from './Card';

const ListTitleInput = ({onRenameList, listId, defaultValue, hideInput}) => {
  let listNameInput;
  return (
    <form
    style={{marginBottom: 0}}
    className='list-title'
    onSubmit={e => {
      e.preventDefault();
      if (listNameInput.value.trim() === "") {
        return;
      }

      onRenameList(listId, listNameInput.value.trim());
      hideInput();
    }}
    >
      <input
      placeholder="Rename list"
      autoFocus={true}
      defaultValue={defaultValue}
      onFocus={e => {
        //React `autocomplete` attribute places the cursor at the beginning
        // of the input's text. This call back places the cursor at the end.
        let val = e.target.value;
        e.target.value = '';
        e.target.value = val;
      }}
      // onBlur={(e) => {
      //   e.preventDefault();
      //   if (listNameInput.value.trim() === "") {
      //     hideInput();
      //     return;
      //   }

      //   onRenameList(listId, listNameInput.value.trim());
      //   hideInput();
      // }}
      ref={node => {
        listNameInput = node;
      }} />
    </form>
  )
}

const NewCardInput = ({listId, onAddCard, toggleVisibility}) => {
  let cardNameInput, cardDescInput;

  return (
    <form className={`new-card ${newCardFormStyle}`}
    onSubmit={e => {
      e.preventDefault();
      if (!cardNameInput.value.trim()) {
        toggleVisibility();
        return;
      }

      onAddCard(
        listId,
        cardNameInput.value.trim(),
        cardDescInput.value,
      );

      cardNameInput.value = '';
      cardDescInput.value = '';

      toggleVisibility();
    }}>
      <input className='new-title'
      placeholder="New card name"
      autoFocus={true}
      onFocus={e => {
        //React `autocomplete` attribute places the cursor at the beginning
        // of the input's text. This call back places the cursor at the end.
        let val = e.target.value;
        e.target.value = '';
        e.target.value = val;
      }}
      onBlur={(e) => {
        e.preventDefault();

        toggleVisibility();
      }}
      ref={node => {
        cardNameInput = node;
      }} />

      <textarea className='new-description'
      autoComplete="off"
      placeholder="New card description"
      ref={node => {
        cardDescInput = node;
      }} />

      <button className='new-card-submit' type="submit">Add card</button>
    </form>
  )
}

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listTitleFocused: false,
      newCardFormVisible: false,
    }
  }
  
  toggleTitleFocus = () => {
    this.setState({listTitleFocused: !this.state.listTitleFocused});
  }

  toggleNewCardForm = () => {
    this.setState({newCardFormVisible: !this.state.newCardFormVisible});
  }

  render() {
    return (
      <Fragment>
        <div className={`${listTitleStyle}`}>
          {!this.state.listTitleFocused ? 
          <span className='list-title' onClick={this.toggleTitleFocus}>
            {this.props.name}
          </span> :
          <ListTitleInput onRenameList={this.props.onRenameList} 
          listId={this.props.id}
          defaultValue={this.props.name}
          toggleTitleFocus={this.toggleTitleFocus}
          hideInput={this.toggleTitleFocus}
          />}
          <span className={`list-delete ion-trash-a`} onClick={() => this.props.onDeleteList(boardId, id)}></span>
        </div>        

        {!this.state.newCardFormVisible ?
        <span className={`${newCardButton}`} onClick={this.toggleNewCardForm}>Add new card...</span> :
        <NewCardInput listId={this.props.id} onAddCard={this.props.onAddCard}
        toggleVisibility={this.toggleNewCardForm}/>}
        
        {this.props.cardIds.map(cardId =>
          <div className={`card ${cardStyle}`} key={uuidv4()}>
            <CardContainer listId={this.props.id} cardId={cardId} />
            <br />
            <br />
          </div>
        )}
      </Fragment>
    )
  }
}

const listStyle = css`
  background-color: darkgrey;
  border-radius: 5px;
  box-shadow: 0px 0px 3px 1px #0000005c;
  display: flex;
  flex-direction: column;
  width: 15vw;
  padding: 8px;
`;

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

const newCardButton = css`
  border-radius: 3px;
  background-color: lightgrey;
  cursor: pointer;
  padding-left: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-right: 8px;
`;

const newCardFormStyle = css`
  input.new-title {
    width: 100%;
  }

  textarea.new-description {
    width: 100%;
  }

  button.new-card-submit {
    width: 100%;
  }
`;

export default List;
export {listStyle};