import React, {Component, Fragment} from 'react';
import {render} from 'react-dom';
import {css} from 'react-emotion';
import uuidv4 from 'uuid/v4';
import PropTypes from 'prop-types';

import CardContainer from '../../containers/CardContainer';
import {cardStyle} from '../Card/Card';
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
          <span className={`list-delete ion-trash-a`} onClick={() => this.props.onDeleteList(this.props.boardId, this.props.id)}></span>
        </div>        

        {!this.state.newCardFormVisible ?
        <span className={`${newCardButton}`} onClick={this.toggleNewCardForm}>
          Add new card...
        </span> :
        <NewCardInput listId={this.props.id} 
        onAddCard={this.props.onAddCard}
        toggleVisibility={this.toggleNewCardForm}
        />}
        
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
  background-color: darkgrey;
  border-radius: 5px;
  box-shadow: 0px 0px 3px 1px #0000005c;
  display: flex;
  flex-direction: column;
  width: 15vw;
  padding: 8px;
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
  border-radius: 3px;
  background-color: lightgrey;
  cursor: pointer;
  padding-left: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-right: 8px;
`;

export default List;
export {listStyle};