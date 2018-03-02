import React from 'react';
import PropTypes from 'prop-types';

import backgroundPickerPanelStyle from './styles/backgroundPicker';
import * as backgrounds from './styles/backgrounds';

/**
 * Loops through all available board backgrounds and displays them
 * as a list of buttons. Clicking a button will call the
 * `CHANGE_BACKGROUND` action with the selected background and board IDs.
 */
const BackgroundPicker = ({ boardId, changeBackground }) => (
  <div
    id="background-picker-panel"
    className={backgroundPickerPanelStyle}
  >
    {Object.entries(backgrounds).map((kv) => {
      const name = kv[0];
      const value = kv[1];

      return (
        <div
          key={name}
          role="button"
          tabIndex={0}
          className={`background-button ${value}`}
          onClick={(e) => {
            e.stopPropagation();
            changeBackground(boardId, name);
          }}
          onKeyPress={e => e.key === 'Enter' && changeBackground(boardId, name)}
        />
      );
    })}
  </div>
);

BackgroundPicker.propTypes = {
  /** ID of board */
  boardId: PropTypes.string.isRequired,
  /** Redux `CHANGE_BACKGROUND` action function to change the board's background */
  changeBackground: PropTypes.func.isRequired,
};

export default BackgroundPicker;
