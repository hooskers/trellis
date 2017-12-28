import React, {Component} from 'react';
import {render} from 'react-dom';
import {css} from 'react-emotion';
import {connect} from 'react-redux';
import {addList, deleteList, renameList, addCard, deleteCard, saveCard, doneCard} from '../actions';
import List from '../components/List';

const mapStateToProps = (state) => ({
    lists: state.boards[state.activeBoard - 1].lists,
});

const mapDispatchToProps = {
    onAddList: addList,
};

const ListContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(List);

export default ListContainer;