import React, {Component} from 'react';
import {render} from 'react-dom';
import {css} from 'react-emotion';
import {connect} from 'react-redux';
import {renameList, deleteList, addCard} from '../actions';
import List from '../components/List';

const mapStateToProps = (state, ownProps) => ({
  ...state.lists[ownProps.listId],
});

const mapDispatchToProps = {
  onAddCard: addCard,
  onDeleteList: deleteList,
  onRenameList: renameList,
};

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);

export default ListContainer;