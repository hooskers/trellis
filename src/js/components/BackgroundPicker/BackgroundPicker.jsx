import React from 'react';
import PropTypes from 'prop-types';

import backgroundPickerPanelStyle from './styles/backgroundPicker';
import * as backgrounds from './styles/backgrounds';

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
  boardId: PropTypes.string.isRequired,
  changeBackground: PropTypes.func.isRequired,
};

export default BackgroundPicker;
