import React, {Component} from 'react';
import {render} from 'react-dom';
import {css} from 'react-emotion';
import {connect} from 'react-redux';
import {renameList, addCard, deleteCard, saveCard, doneCard} from '../actions';
import List from '../components/List';

const mapStateToProps = (state, props) => ({
    cards: props.list.cards,
});

const mapDispatchToProps = {
    onAddCard: addCard,
};

const ListContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(List);

export default ListContainer;