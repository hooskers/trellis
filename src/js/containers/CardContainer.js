import React, {Component} from 'react';
import {render} from 'react-dom';
import {css} from 'react-emotion';
import {connect} from 'react-redux';
import {deleteCard, saveCard, doneCard} from '../actions';
import Card from '../components/Card';

const CardContainer = connect()(Card);

export default CardContainer;