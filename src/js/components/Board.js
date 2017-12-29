import React, {Component} from 'react';
import {render} from 'react-dom';
import {css} from 'react-emotion';
import uuidv4 from 'uuid/v4';
import ListContainer from '../containers/ListContainer';

const Board = ({board, boardName, listsLength, onAddList, onDisplayBoard, onDeleteList, match}) => {
  const boardId = parseInt(match.params.id);

  //Uncomment the dispatch function below to record active board when routing directly to a board
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

        onAddList(boardId, input.value.trim());
        input.value='';
      }}>
        <input placeholder="New list name"
          ref={node => {
            input = node;
        }} />
        <button type="submit">Add list</button>
      </form>
      
      {displayedBoard.lists.map(list => (
        <div key={uuidv4()}>
          <ListContainer boardId={boardId} list={list}/>
          <button onClick={() => onDeleteList(boardId, list.id)}>Delete list</button>
        </div>
      ))}
    </div>
  );
};

export default Board;