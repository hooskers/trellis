import { connect } from 'react-redux';

import { renameList, deleteList, addCard } from '../../actions';
import List from './List';

const mapStateToProps = (state, ownProps) => ({
  ...state.lists[ownProps.listId],
});

const mapDispatchToProps = {
  onAddCard: addCard,
  onDeleteList: deleteList,
  onRenameList: renameList,
};

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);

export default ListContainer;
