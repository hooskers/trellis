import { connect } from 'react-redux';

import { addList, rearrangeList, rearrangeCard, renameBoard, displayBoard } from '../../actions';
import Board from './Board';

const mapStateToProps = (state, ownProps) => ({
  ...state.boards[ownProps.match.params.id],
});

const mapDispatchToProps = {
  onAddList: addList,
  onRenameBoard: renameBoard,
  onDisplayBoard: displayBoard,
  onRearrangeList: rearrangeList,
  onRearrangeCard: rearrangeCard,
};

const BoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Board);

export default BoardContainer;
