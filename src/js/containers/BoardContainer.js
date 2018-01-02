import React, {Component} from 'react';
import {render} from 'react-dom';
import {css} from 'react-emotion';
import {connect} from 'react-redux';
import {addList, deleteList, renameList, renameBoard, displayBoard} from '../actions.js';
import Board from '../components/Board';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  let boardIndex = state.boards.findIndex(board =>
    board.id === parseInt(ownProps.match.params.id)
  );

  let board = state.boards[boardIndex];

  return {
    boardName: state.boards[boardIndex].name,
    //listsLength: state.boards[boardIndex].lists.length,
    board: state.boards[boardIndex],
  }
}

const mapDispatchToProps = {
  onAddList: addList,
  onDisplayBoard: displayBoard,
  onDeleteList: deleteList,
};

const BoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Board);

export default BoardContainer;