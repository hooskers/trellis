import React, {Component} from 'react';
import {render} from 'react-dom';
import {css} from 'react-emotion';

const Board = ({boards, onAddListSubmit, match}) => {
  console.log(match);
  let displayedBoard = boards.filter(board => 
    board.id === parseInt(match.params.id)
  )[0];

  return (
    <div>
      <div>ID: {displayedBoard.id}</div>
      <div>Name: {displayedBoard.name}</div>
    </div>
  );
};

export default Board;