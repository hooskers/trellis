import React, {Component} from 'react';
import {render} from 'react-dom';
import {css} from 'react-emotion';
import {connect} from 'react-redux';
import {saveCard, doneCard} from '../actions';
import Card from '../components/Card';

const mapStateToProps = (state, ownProps) => ({
  card: ownProps.card,
});

const mapDispatchToProps = {
  onSaveCard: saveCard,
  onDoneCard: doneCard,
};

const CardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Card);

export default CardContainer;