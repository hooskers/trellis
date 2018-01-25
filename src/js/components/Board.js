import React, {Component, Fragment} from 'react';
import {render} from 'react-dom';
import {css} from 'react-emotion';
import uuidv4 from 'uuid/v4';
import PropTypes from 'prop-types';

import ListContainer from '../containers/ListContainer';
import {listStyle} from './List/List';

/**
 * This component displays a board that is in charge of the list components
 * Contains input to rename the board
 */
class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showNewListInput: false,
    }
  }

  toggleNewListInput = () => {
    this.setState({showNewListInput: !this.state.showNewListInput});
  }

  render() {
    let input;
  
    return (
      <div id="board-container" className={`${boardContainerStyle}`}>
        <div id="board-header" className={`${boardHeaderStyle}`}>
            {/* <div>Board ID: {id}</div> */}
            <span id="board-title" className={`${boardTitleStyle}`}>{this.props.name}</span>
            <span id="add-list-btn" className={`${addListBtnStyle}`} onClick={e => {
              if (input && input.value.trim()) {
                this.props.onAddList(this.props.id, input.value.trim())
                input.value='';
              }
              
              this.toggleNewListInput();
            }}>
              {this.state.showNewListInput &&
                <form id="new-list-form" onSubmit={e => {
                  e.preventDefault();
                  if (!input.value.trim()) {
                    return;
                  }
      
                  this.props.onAddList(this.props.id, input.value.trim());
                  input.value='';

                  this.toggleNewListInput();
                }}>
                  <input placeholder="New list name"
                    ref={node => {
                      input = node;
                  }}
                  onClick={e => {e.stopPropagation()}} />
                  {/* <button type="submit">Add list</button> */}
                </form>
              }

              {!this.state.showNewListInput && <span className="text">New list</span>}
              {this.state.showNewListInput && <span className="text">Add list</span>}
              <span className="icon ion-plus-round"></span>
            </span>
        </div>
        
        <div id="lists" className={`${listsStyle}`}>
          {this.props.listIds.map(listId => (
            <div className={`list ${listStyle}`} key={uuidv4()}>
              <ListContainer boardId={this.props.id} listId={listId}/>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

Board.propTypes = {
  /** ID of board */
  id: PropTypes.string.isRequired,
  /** Name of the board */
  name: PropTypes.string.isRequired,
  /** IDs of the lists that belong to the board */
  listIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  /** Callback to add list to the board */
  onAddList: PropTypes.func.isRequired,
  /** Callback to rename board */
  onRenameBoard: PropTypes.func.isRequired,
}

const boardContainerStyle = css`
  background-color: whitesmoke;
  min-height: 100vh;
  max-height: 100vh;
  max-width: fit-content;
  display: grid
  grid-template-rows: 7vh 93vh;
  grid-template-columns: 100vw;
  overflow: hidden;
`;

const boardHeaderStyle = css`
  display: flex;
  align-items: center;
  background-color: white;
  position: sticky;
  left: 0px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 7px;
  box-shadow: 0px 1px 7px 3px #0000001f;
`;

const boardTitleStyle = css`
  font-size: 2em;
  float: left;
`;

const addListBtnStyle = css`
  margin-left: auto;
  font-size: 1.15em;
  cursor: pointer;

  .text {
    margin-right: 8px;
  }

  #new-list-form {
    float: left;
    margin-right: 8px;
    margin-bottom: 0;
  }
`;

const listsStyle = css`
  display: flex;
  margin-left: 7px;
  margin-right: 7px;
  padding-top: 15px;
  overflow-x: auto;
  overflow-y: hidden;
  align-items: flex-start;
  height: 91vh;
`;

export default Board;