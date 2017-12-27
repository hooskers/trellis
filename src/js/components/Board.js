import React, {Component} from 'react';
import {render} from 'react-dom';
import {css} from 'react-emotion';
import uuidv4 from 'uuid/v4';
import ListContainer from '../containers/ListContainer';

const Board = ({boards, onAddListSubmit, onDisplayBoard, match}) => {
  console.log(match);
  let displayedBoard = boards.filter(board => 
    board.id === parseInt(match.params.id)
  )[0];

  onDisplayBoard(match.params.id);

  return (
    <div>
      <div>Board ID: {displayedBoard.id}</div>
      <div>Board Name: {displayedBoard.name}</div>
      
      {displayedBoard.lists.map(list => (
        <ListContainer key={uuidv4()} list={list} />
      ))}
    </div>
  );
};

export default Board;