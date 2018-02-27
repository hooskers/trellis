import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { backgroundPickerBtnStyle, backgroundPickerPanelStyle } from './styles/backgroundPicker';

class BackgroundPicker extends Component {
  constructor() {
    super();

    this.state = {
      panelOpen: false,
      pickerX: null,
      pickerY: null,
    };

    this.pickerButton = null;
  }

  componentDidMount() {
    const rect = this.pickerButton.getBoundingClientRect();
    const vWidth = window.visualViewport.width;
    const vHeight = window.visualViewport.height;
    

    this.setState({
      pickerX: rect.left - (rect.width / 2),
      pickerY: rect.bottom,
    });
  }

  render() {
    const { pickerX, pickerY } = this.state;

    return (
      <Fragment>
        <div
          id="background-picker-button"
          className={backgroundPickerBtnStyle}
          ref={(el) => { this.pickerButton = el; }}
        />
        <div
          id="background-picker-panel"
          className={backgroundPickerPanelStyle(pickerX, pickerY)}
        />
      </Fragment>
    );
  }
}

export default BackgroundPicker;
