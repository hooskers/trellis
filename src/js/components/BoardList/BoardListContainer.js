import { connect } from 'react-redux';

import { addBoard, deleteBoard, renameBoard } from '../../actions';
import BoardList from './BoardList';

const mapStateToProps = state => ({
  boards: state.boards,
  ...state.boards,
});

const mapDispatchToProps = {
  onAddBoardSubmit: addBoard,
  onDeleteBoard: deleteBoard,
  onRenameBoard: renameBoard,
};

const BoardListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BoardList);

export default BoardListContainer;
