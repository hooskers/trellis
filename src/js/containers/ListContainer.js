import React, {Component} from 'react';
import {render} from 'react-dom';
import {css} from 'react-emotion';
import {connect} from 'react-redux';
import {renameList, addCard, deleteCard, saveCard, doneCard} from '../actions';
import List from '../components/List';

const mapStateToProps = (state, ownProps) => ({
  list: ownProps.list,
  listName: ownProps.list.name,
  cards: ownProps.list.cards,
  cardLength: ownProps.list.cards.length,
});

const mapDispatchToProps = {
  onAddCard: addCard,
  onDeleteCard: deleteCard,
  onRenameList: renameList,
};

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);

export default ListContainer;