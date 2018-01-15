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
      <input placeholder="Rename list"
      autoFocus={true}
      defaultValue={defaultValue}
      onFocus={e => {
        //React `autocomplete` attribute places the cursor at the beginning
        // of the input's text. This call back places the cursor at the end.
        let val = e.target.value;
        e.target.value = '';
        e.target.value = val;
      }}
      onBlur={(e) => {
        e.preventDefault();
        if (listNameInput.value.trim() === "") {
          hideInput();
          return;
        }

        onRenameList(listId, listNameInput.value.trim());
        hideInput();
      }}
      ref={node => {
        listNameInput = node;
      }} />
    </form>
  )
}

//const List = ({id, name, cardIds, boardId, onAddCard, onDeleteList, onRenameList}) => {
class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listTitleFocused: false,
    }
  }
  
  toggleTitleFocus = () => {
    this.setState({listTitleFocused: !this.state.listTitleFocused})
  }

  render() {
    let cardNameInput, cardDescInput;

    return (
      <Fragment>
        <div className={`${listTitleStyle}`}>
          {!this.state.listTitleFocused ? 
          <span className='list-title' onClick={this.toggleTitleFocus}>{this.props.name}</span> :
          <ListTitleInput onRenameList={this.props.onRenameList} 
          listId={this.props.id}
          defaultValue={this.props.name}
          toggleTitleFocus={this.toggleTitleFocus}
          hideInput={this.toggleTitleFocus}
          />}
          <span className={`list-delete ion-trash-a`} onClick={() => this.props.onDeleteList(boardId, id)}></span>
        </div>

        {/* Only show this form when list title is clicked. Same behavior as card title/description */}
        

        {/* Only show this form when list title is clicked. Same behavior as card title/description */}
        <form 
        onSubmit={e => {
          e.preventDefault();
          if (!cardNameInput.value.trim()) {
            return;
          }

          this.props.onAddCard(
            id,
            cardNameInput.value.trim(),
            cardDescInput.value
          );

          cardNameInput.value = '';
          cardDescInput.value = '';
        }}>
          <input placeholder="New card name"
          ref={node => {
            cardNameInput = node;
          }} />

          <textarea autoComplete="off"
          placeholder="New card description"
          ref={node => {
            cardDescInput = node;
          }} />

          <button type="submit">Add card</button>
        </form>
        
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
  background-color: whitesmoke;
  border-radius: 5px;
  box-shadow: 0px 0px 3px 1px #0000005c;
  display: flex;
  flex-direction: column;
  width: 15vw;
  padding: 8px;
`;

const listTitleStyle = css`
  .list-title {
    float: left;
  }

  .list-delete {
    float: right;
    &:hover {
      color: red;
    }
  }
`;

export default List;
export {listStyle};