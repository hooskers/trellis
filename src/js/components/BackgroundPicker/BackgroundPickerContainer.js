import { connect } from 'react-redux';

import { changeBackground } from '../../actions';
import BackgroundPicker from './BackgroundPicker';

const mapDispatchToProps = {
  changeBackground,
};

const BackgroundPickerContainer = connect(
  () => ({}),
  mapDispatchToProps,
)(BackgroundPicker);

export default BackgroundPickerContainer;
