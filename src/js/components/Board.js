import React, {Component} from 'react';
import {render} from 'react-dom';
import {css} from 'react-emotion';
import uuidv4 from 'uuid/v4';
import ListContainer from '../containers/ListContainer';

const Board = ({board, boardName, listsLength, onAddListSubmit, onDisplayBoard, match}) => {
  const boardId = parseInt(match.params.id);

  //Uncomment the dispatch function below to route directly to a board
  //onDisplayBoard(boardId);

  let displayedBoard = board;
  let input;

  return (
    <div>
      <div>Board ID: {displayedBoard.id}</div>
      <div>Board Name: {displayedBoard.name}</div>

      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }

        onAddListSubmit(boardId, input.value.trim());
        input.value='';
      }}>
        <input placeholder="New list name"
          ref={node => {
            input = node;
        }} />
        <button type="submit">Add list</button>
      </form>
      
      {displayedBoard.lists.map(list => (
        <ListContainer key={uuidv4()} list={list} />
      ))}
    </div>
  );
};

export default Board;