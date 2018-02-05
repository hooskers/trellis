import { connect } from 'react-redux';

import { saveCard, saveCardName, saveCardDescription, doneCard, deleteCard } from '../../actions';
import Card from './Card';

const mapStateToProps = (state, ownProps) => ({
  ...state.cards[ownProps.cardId],
});

const mapDispatchToProps = {
  onSaveCard: saveCard,
  onSaveCardName: saveCardName,
  onSaveCardDescription: saveCardDescription,
  onDoneCard: doneCard,
  onDeleteCard: deleteCard,
};

const CardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Card);

export default CardContainer;
