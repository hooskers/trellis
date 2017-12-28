import React, {Component} from 'react';
import {render} from 'react-dom';
import {css} from 'react-emotion';
import {connect} from 'react-redux';
import {addList, deleteList, renameList, renameBoard, displayBoard} from '../actions.js';
import Board from '../components/Board';

const mapStateToProps = (state) => ({
  boardName: state.boards[state.activeBoard - 1].name,
  listsLength: state.boards[state.activeBoard - 1].lists.length,
  board: state.boards[state.activeBoard - 1],
});

const mapDispatchToProps = {
  onAddListSubmit: addList,
  onDisplayBoard: displayBoard,
};

const BoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Board);

export default BoardContainer;