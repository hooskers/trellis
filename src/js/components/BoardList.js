import React, {Component} from 'react';
import {render} from 'react-dom';
import {css} from 'react-emotion';
import {Link} from 'react-router-dom';

const BoardList = ({boards, onAddBoardSubmit}) => {
  let input;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }

        onAddBoardSubmit(input.value.trim())
        input.value = '';
      }}>
        <input placeholder="New board name"
        ref={node => {
          input = node;
        }} />
        <button type="submit">Add board</button>
      </form>

      {boards.map(board => <Link to={'board/'+board.id} key={board.id}>{board.name}<br/></Link>)}
    </div>
  )
}

export default BoardList;