import React, {Component} from 'react';
import {render} from 'react-dom';
import {css} from 'react-emotion';
import {connect} from 'react-redux';
import {saveCard, doneCard, deleteCard} from '../actions';
import Card from '../components/Card';

const mapStateToProps = (state, ownProps) => ({
  ...state.cards[ownProps.cardId],
});

const mapDispatchToProps = {
  onSaveCard: saveCard,
  onDoneCard: doneCard,
  onDeleteCard: deleteCard,
};

const CardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Card);

export default CardContainer;