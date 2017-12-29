import React, {Component} from 'react';
import {render} from 'react-dom';
import {css} from 'react-emotion';
import {connect} from 'react-redux';
import {addBoard, deleteBoard, renameBoard, displayBoard} from '../actions';
import BoardList from '../components/BoardList';

const mapStateToProps = (state) => ({
  boards: state.boards,
});

const mapDispatchToProps = {
  onAddBoardSubmit: addBoard,
  onDeleteBoard: deleteBoard,
  displayBoard,
};

const BoardListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BoardList);

export default BoardListContainer;
